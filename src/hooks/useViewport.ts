'use client' // This is a client component 👈🏽
import { useState, useEffect } from 'react'

const useViewPort = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setScreenWidth(window.screen.width)
    setScreenHeight(window.screen.height)
  }

  useEffect(() => {
    if (width === 0 && height === 0) {
      handleWindowResize()
    } else {
      window.addEventListener('resize', handleWindowResize)
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  return {
    width,
    height,
    screenWidth,
    screenHeight,
  }
}

export default useViewPort
