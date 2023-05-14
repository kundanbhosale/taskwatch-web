import React from 'react'

const Cta = () => {
  return (
    <section className='mx-auto my-16 max-w-screen-lg rounded-lg bg-gradient-to-b from-indigo-100 to-indigo-50 px-4 py-16 text-center sm:my-24 md:p-16'>
      {/* <h2 className='mb-8 text-center'>Try Kanban Board</h2> */}
      <p className='mb-8 text-center font-medium md:text-xl'>
        Start organizing your tasks and projects with ease. Try Taskwatch.io
        today and experience the power of Kanban boards in action!
      </p>
      <a
        href={process.env.NEXT_PUBLIC_APP_URL || '/'}
        className='btn-primary btn-lg  rounded-full text-center'
      >{`Kanban App`}</a>
    </section>
  )
}

export default Cta
