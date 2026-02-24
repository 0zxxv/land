'use client'

import { useEffect, useRef, useState } from 'react'

interface SlideUpOnScrollProps {
  children: React.ReactNode
  className?: string
  /** Distance to slide up in rem. Default 2 */
  distance?: number
  /** Delay before animation starts (ms). Default 0 */
  delay?: number
  /** Trigger when this much of the element is visible (0–1). Default 0.1 */
  threshold?: number
}

export function SlideUpOnScroll({
  children,
  className = '',
  distance = 2,
  delay = 0,
  threshold = 0.1,
}: SlideUpOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delay)
            break
          }
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [threshold, delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transform: visible ? 'translateY(0)' : `translateY(${distance}rem)`,
        opacity: visible ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}
