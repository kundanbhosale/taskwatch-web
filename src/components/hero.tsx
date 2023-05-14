import React, { useEffect, useRef, useState } from 'react'
import useIntersection from '../hooks/userIntersection'

const Herosection = () => {
  // const ref = useRef<HTMLDivElement>(null)
  // const [pause, setPause] = useState(false)
  // const inViewport = useIntersection(ref, '-50%') // Trigger if 200px is visible from the element

  // useEffect(() => {
  //   if (!ref.current) return

  //   const vid = ref.current.firstChild as HTMLVideoElement

  //   inViewport && !pause ? vid?.play() : vid?.pause()
  // }, [inViewport, ref])

  return (
    <section className='mb-16 bg-gradient-to-b from-indigo-100 sm:mb-32 '>
      <div className='mx-auto max-w-screen-xl p-4'>
        <div className='mx-auto mb-16 max-w-screen-md pt-32 text-center'>
          <h1 className='title mb-7'>
            Improve Your Workflow with Kanban Board Tool
          </h1>
          <h3 className='mb-8'>
            Effortlessly manage your projects and improve your workflow with our
            free personal kanban board tool. See the difference it can make.
          </h3>
          <a
            href={process.env.NEXT_PUBLIC_APP_URL}
            className='btn-secondary btn-lg rounded-full '
          >
            Go to App -&gt;
          </a>
        </div>
        <div
          // ref={ref}
          className='flex justify-center'
        >
          <video
            controls
            // autoPlay={inViewport}
            muted
            poster='/images/video.png'
            loop
            disablePictureInPicture
            controlsList='nodownload noremoteplayback noplaybackrate'
            // onClick={() => setPause(true)}
            className='max-w-screen-lg overflow-hidden rounded-lg bg-black-800 p-1 shadow-xl  sm:px-2  sm:py-4 sm:ring-2 sm:ring-gray-100'
          >
            <source src='./video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default Herosection
