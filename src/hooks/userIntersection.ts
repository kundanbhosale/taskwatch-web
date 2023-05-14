'use client' // This is a client component 👈🏽
import { useState, useEffect, RefObject } from 'react'

const useIntersection = (
  element: RefObject<HTMLDivElement>,
  rootMargin: string
) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )

    element.current && observer.observe(element.current)

    return () => {
      if (element.current) {
        observer.unobserve(element.current)
      }
    }
  }, [element, rootMargin])

  return isVisible
}

export default useIntersection
