import { useState, useEffect } from 'react'

export default function useDominantColor(imageUrl) {
  const [color, setColor] = useState(null)

  useEffect(() => {
    if (!imageUrl) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = imageUrl

    const handleLoad = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = 10
      canvas.height = 10
      ctx.drawImage(img, 0, 0, 10, 10)
      const data = ctx.getImageData(0, 0, 10, 10).data
      let r = 0, g = 0, b = 0, count = 0
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
        count++
      }
      r = Math.round(r / count)
      g = Math.round(g / count)
      b = Math.round(b / count)
      setColor(`rgba(${r}, ${g}, ${b}, 0.4)`)
    }

    const handleError = () => setColor(null)

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)
    return () => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
  }, [imageUrl])

  return color
}