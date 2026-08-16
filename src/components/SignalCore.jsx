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
  const [fallback, setFallback] = useState(false)
  const [staticMode, setStaticMode] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
  ))

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobile = window.matchMedia('(max-width: 767px), (pointer: coarse)')
    const update = () => setStaticMode(reduced.matches || mobile.matches)
    reduced.addEventListener('change', update)
    mobile.addEventListener('change', update)
    return () => {
      reduced.removeEventListener('change', update)
      mobile.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (staticMode || !mountRef.current) return undefined

    let cancelled = false
    let frame = 0
    let observer
    let resizeObserver

    try {
      const mount = mountRef.current
      const probe = document.createElement('canvas')
      if (!probe.getContext('webgl2') && !probe.getContext('webgl')) {
        queueMicrotask(() => { if (!cancelled) setFallback(true) })
        return undefined
      }

      const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setClearColor(0x000000, 0)
      renderer.outputColorSpace = SRGBColorSpace
      mount.appendChild(renderer.domElement)

      const scene = new Scene()
      const camera = new PerspectiveCamera(34, 1, 0.1, 20)
      camera.position.z = 4.3
      const geometry = new IcosahedronGeometry(1.2, 3)
      const uniforms = {
        uTime: { value: 0 },
        uPointer: { value: new Vector2() },
        uAccent: { value: new Color(project.signal.cyan) },
        uSecondary: { value: new Color(project.signal.secondary) },
      }
      const material = new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms,
        vertexShader: `
          uniform float uTime;
          uniform vec2 uPointer;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vec3 p = position;
            float wave = sin(p.y * 5.0 + uTime * 0.16) + cos((p.x + p.z) * 4.0 - uTime * 0.12);
            p += normal * wave * 0.018;
            p.x += uPointer.x * (0.025 + p.z * 0.009);
            p.y += uPointer.y * (0.025 + p.z * 0.009);
            vNormal = normalize(normalMatrix * normal);
            vPosition = p;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uAccent;
          uniform vec3 uSecondary;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            float rim = pow(1.0 - abs(vNormal.z), 2.3);
            float band = smoothstep(0.66, 0.9, sin((vPosition.y + vPosition.x * 0.22) * 18.0) * 0.5 + 0.5);
            vec3 color = mix(uAccent * 0.28, uAccent, rim + band * 0.14);
            color = mix(color, uSecondary, band * 0.08);
            gl_FragColor = vec4(color, 0.08 + rim * 0.46 + band * 0.06);
          }
        `,
      })
      const core = new Mesh(geometry, material)
      core.rotation.x = -0.14
      scene.add(core)

      const pointsMaterial = new PointsMaterial({ color: project.signal.cyan, size: 0.011, transparent: true, opacity: 0.3 })
      const points = new Points(geometry, pointsMaterial)
      points.scale.setScalar(1.01)
      scene.add(points)

      let visible = true
      let last = performance.now()
      const pointer = new Vector2()
      const targetPointer = new Vector2()
      const finePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches

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
        if (!visible || document.hidden || cancelled) return
        const delta = Math.min((now - last) / 1000, 0.05)
        last = now
        uniforms.uTime.value += delta
        pointer.lerp(targetPointer, 0.035)
        uniforms.uPointer.value.copy(pointer)
        core.rotation.y += delta * 0.025
        points.rotation.y = core.rotation.y * 0.82
        points.rotation.z -= delta * 0.004
        renderer.render(scene, camera)
        frame = requestAnimationFrame(render)
      }
      const resume = () => {
        if (!frame && visible && !document.hidden && !cancelled) {
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
      })
      observer.observe(mount)

      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(mount)
      if (finePointer) {
        mount.addEventListener('pointermove', onPointerMove)
        mount.addEventListener('pointerleave', onPointerLeave)
      }
      document.addEventListener('visibilitychange', onVisibility)
      resize()
      resume()

      return () => {
        cancelled = true
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
      }
    } catch {
      queueMicrotask(() => { if (!cancelled) setFallback(true) })
      return undefined
    }
  }, [project, staticMode])

  return (
    <div className="signal-experience" style={{ '--signal-accent': project.signal.cyan }} aria-hidden="true">
      <div ref={mountRef} className="signal-canvas" />
      {(staticMode || fallback) && <StaticCore project={project} />}
    </div>
  )
}
