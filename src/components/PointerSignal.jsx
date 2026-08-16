import { useEffect, useRef } from 'react'

export function PointerSignal() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced || !ref.current) return undefined
    const cursor = ref.current
    let frame = 0
    let x = -50
    let y = -50
    const draw = () => {
      frame = 0
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    const move = (event) => {
      x = event.clientX
      y = event.clientY
      cursor.classList.add('is-visible')
      const target = event.target.closest('[data-cursor]')
      cursor.dataset.mode = target?.dataset.cursor || ''
      cursor.querySelector('span').textContent = target?.dataset.cursor || ''
      if (!frame) frame = requestAnimationFrame(draw)
    }
    const hide = () => cursor.classList.remove('is-visible')
    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('mouseleave', hide)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', hide)
    }
  }, [])

  return <div ref={ref} className="pointer-signal" aria-hidden="true"><span /></div>
}
