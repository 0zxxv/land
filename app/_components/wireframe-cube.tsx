'use client'

import { useEffect, useRef } from 'react'

interface WireframeCubeProps {
  className?: string
}

export function WireframeCube({ className = '' }: WireframeCubeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    let animationFrameId: number
    let rotation = 0

    const size = 800
    canvas.width = size
    canvas.height = size

    const centerX = size / 2
    const centerY = size / 2
    const cubeSize = 176

    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ]

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ]

    function rotatePoint(point: number[], angleX: number, angleY: number) {
      const [x, y, z] = point

      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)
      const y1 = y * cosX - z * sinX
      const z1 = y * sinX + z * cosX

      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)
      const x1 = x * cosY + z1 * sinY
      const z2 = -x * sinY + z1 * cosY

      return [x1, y1, z2]
    }

    function project(point: number[]) {
      const [x, y, z] = point
      const scale = 800 / (800 + z)
      return [
        centerX + x * scale * cubeSize,
        centerY + y * scale * cubeSize
      ]
    }

    function getStrokeColor() {
      return document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000'
    }

    function animate() {
      ctx.clearRect(0, 0, size, size)

      rotation += 0.01

      const rotatedVertices = vertices.map(v =>
        rotatePoint(v, rotation, rotation * 0.7)
      )

      const projectedVertices = rotatedVertices.map(v => project(v))

      ctx.strokeStyle = getStrokeColor()
      ctx.lineWidth = window.innerWidth < 640 ? 2 : 1.2

      edges.forEach(([start, end]) => {
        const [x1, y1] = projectedVertices[start]
        const [x2, y2] = projectedVertices[end]

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
