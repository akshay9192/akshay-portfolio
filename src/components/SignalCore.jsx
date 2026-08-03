import { useEffect, useRef, useState } from 'react'
import {
  Color,
  IcosahedronGeometry,
  Mesh,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from 'three'
import { ProjectArt } from './ProjectArt'

function StaticCore({ project }) {
  return (
    <div className="signal-static" style={{ '--signal-accent': project.signal.cyan }} aria-hidden="true">
      <span className="signal-static-ring ring-a" />
      <span className="signal-static-ring ring-b" />
      <span className="signal-static-ring ring-c" />
      <span className="signal-static-axis" />
    </div>
  )
}

export default function SignalCore({ project }) {
  const mountRef = useRef(null)
  const stateRef = useRef(null)
  const initialSignal = useRef(project.signal)
  const [fallback, setFallback] = useState(false)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion || !mountRef.current) return undefined
    let cancelled = false
    let observer
    let frame = 0
    let resizeObserver

    function createScene() {
      try {
        if (cancelled || !mountRef.current) return
        const mount = mountRef.current
        const probe = document.createElement('canvas')
        if (!probe.getContext('webgl2') && !probe.getContext('webgl')) {
          setFallback(true)
          return
        }
        const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
        renderer.setClearColor(0x000000, 0)
        renderer.outputColorSpace = SRGBColorSpace
        mount.appendChild(renderer.domElement)

        const scene = new Scene()
        const camera = new PerspectiveCamera(34, 1, 0.1, 20)
        camera.position.z = 4.25
        const detail = window.matchMedia('(max-width: 700px)').matches ? 3 : 4
        const geometry = new IcosahedronGeometry(1.22, detail)
        const uniforms = {
          uTime: { value: 0 },
          uPointer: { value: new Vector2() },
          uAccent: { value: new Color(initialSignal.current.cyan) },
          uSecondary: { value: new Color(initialSignal.current.secondary) },
          uPattern: { value: initialSignal.current.pattern },
          uPulse: { value: 0 },
        }
        const material = new ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms,
          vertexShader: `
            uniform float uTime;
            uniform vec2 uPointer;
            uniform float uPattern;
            varying vec3 vNormal;
            varying vec3 vPosition;
            varying float vWave;
            void main() {
              vec3 p = position;
              float waveA = sin((p.y * (5.0 + uPattern * 5.0)) + uTime * 0.42);
              float waveB = cos((p.x + p.z) * (4.0 + uPattern * 3.0) - uTime * 0.31);
              float deformation = (waveA + waveB) * 0.035;
              p += normal * deformation;
              p.x += uPointer.x * (0.05 + p.z * 0.018);
              p.y += uPointer.y * (0.05 + p.z * 0.018);
              vNormal = normalize(normalMatrix * normal);
              vPosition = p;
              vWave = waveA * 0.5 + waveB * 0.5;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 uAccent;
            uniform vec3 uSecondary;
            uniform float uPattern;
            uniform float uPulse;
            varying vec3 vNormal;
            varying vec3 vPosition;
            varying float vWave;
            void main() {
              float rim = pow(1.0 - abs(vNormal.z), 2.15);
              float bands = smoothstep(0.58, 0.88, sin((vPosition.y + vPosition.x * uPattern) * 22.0) * 0.5 + 0.5);
              float pulseBand = 1.0 - smoothstep(0.0, 0.12, abs(vPosition.y - mix(-1.35, 1.35, uPulse)));
              vec3 color = mix(uAccent * 0.34, uAccent, rim + bands * 0.2);
              color = mix(color, uSecondary, pulseBand * 0.72);
              float alpha = 0.12 + rim * 0.58 + bands * 0.1 + pulseBand * 0.25;
              gl_FragColor = vec4(color, alpha);
            }
          `,
        })
        const core = new Mesh(geometry, material)
        core.rotation.x = -0.14
        scene.add(core)

        const pointsMaterial = new PointsMaterial({ color: initialSignal.current.cyan, size: detail === 3 ? 0.018 : 0.012, transparent: true, opacity: 0.48 })
        const points = new Points(geometry, pointsMaterial)
        points.scale.setScalar(1.012)
        scene.add(points)

        let visible = true
        let last = performance.now()
        let pulseStart = performance.now()
        const pointer = new Vector2()
        const targetPointer = new Vector2()
        const clock = { elapsed: 0 }

        const resize = () => {
          const rect = mount.getBoundingClientRect()
          if (!rect.width || !rect.height) return
          renderer.setSize(rect.width, rect.height, false)
          camera.aspect = rect.width / rect.height
          camera.updateProjectionMatrix()
        }
        const onPointerMove = (event) => {
          const rect = mount.getBoundingClientRect()
          targetPointer.set(((event.clientX - rect.left) / rect.width - 0.5) * 2, -((event.clientY - rect.top) / rect.height - 0.5) * 2)
        }
        const onPointerLeave = () => targetPointer.set(0, 0)
        const render = (now) => {
          frame = 0
          if (!visible || document.hidden) return
          const delta = Math.min((now - last) / 1000, 0.05)
          last = now
          clock.elapsed += delta
          pointer.lerp(targetPointer, 0.055)
          uniforms.uPointer.value.copy(pointer)
          uniforms.uTime.value = clock.elapsed
          uniforms.uPulse.value = Math.min((now - pulseStart) / 1350, 1)
          core.rotation.y += delta * 0.09
          points.rotation.y = core.rotation.y * 0.86
          points.rotation.z -= delta * 0.018
          renderer.render(scene, camera)
          frame = requestAnimationFrame(render)
        }
        const resume = () => {
          if (!frame && visible && !document.hidden) {
            last = performance.now()
            frame = requestAnimationFrame(render)
          }
        }
        const onVisibility = () => {
          if (document.hidden && frame) {
            cancelAnimationFrame(frame)
            frame = 0
          } else resume()
        }
        observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting
          if (visible) resume()
          else if (frame) {
            cancelAnimationFrame(frame)
            frame = 0
          }
        }, { rootMargin: '120px' })
        observer.observe(mount)
        resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(mount)
        mount.addEventListener('pointermove', onPointerMove)
        mount.addEventListener('pointerleave', onPointerLeave)
        document.addEventListener('visibilitychange', onVisibility)
        resize()
        resume()

        stateRef.current = {
          uniforms,
          pointsMaterial,
          pulse: () => { pulseStart = performance.now() },
          dispose: () => {
            if (frame) cancelAnimationFrame(frame)
            observer?.disconnect()
            resizeObserver?.disconnect()
            mount.removeEventListener('pointermove', onPointerMove)
            mount.removeEventListener('pointerleave', onPointerLeave)
            document.removeEventListener('visibilitychange', onVisibility)
            geometry.dispose()
            material.dispose()
            pointsMaterial.dispose()
            renderer.dispose()
            renderer.forceContextLoss()
            renderer.domElement.remove()
          },
        }
      } catch {
        if (!cancelled) setFallback(true)
      }
    }
    createScene()
    return () => {
      cancelled = true
      stateRef.current?.dispose()
      stateRef.current = null
      observer?.disconnect()
      resizeObserver?.disconnect()
    }
  }, [reducedMotion])

  useEffect(() => {
    const state = stateRef.current
    if (!state) return
    state.uniforms.uAccent.value.set(project.signal.cyan)
    state.uniforms.uSecondary.value.set(project.signal.secondary)
    state.uniforms.uPattern.value = project.signal.pattern
    state.pointsMaterial.color.set(project.signal.cyan)
    state.pulse()
  }, [project])

  return (
    <div className="signal-experience" style={{ '--signal-accent': project.signal.cyan }}>
      <ProjectArt project={project} eager className="signal-art" />
      <div ref={mountRef} className="signal-canvas" aria-hidden="true" />
      {(reducedMotion || fallback) && <StaticCore project={project} />}
      <div className="signal-caption" aria-hidden="true">
        <span>Surface</span><i /><span>Evidence</span><i /><span>Review</span>
      </div>
    </div>
  )
}
