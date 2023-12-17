import React from 'react'

const FeatureSection = () => {
  const features = [
    {
      name: 'Swimnlanes',
      description: `Organize tasks by category or project phase for a clear overview of your workflow.`,
    },
    {
      name: 'Columns & SubColumns',
      description: `Break down work into manageable parts and stay focused with Kanban's flexible structure.`,
    },
    {
      name: 'Offline Ready',
      description: `Kanban boards are offline-ready, allowing users to work and access their boards even without an internet connection.`,
    },
    {
      name: 'Sync with your Drive',
      comming_soon: true,
      description: `Kanban tool syncs with your Google Drive, making it easy to access and share your boards across multiple devices.`,
    },
    {
      name: 'Automate workflow',
      comming_soon: true,
      description: `Automate your workflow with Kanban boards powerful features, saving you time and effort in managing your tasks and projects.`,
    },
    {
      name: 'Realtime collaboration',
      comming_soon: true,
      description: `Collaborate with your team in real-time using Kanban boards intuitive and easy-to-use interface. Keep everyone on the same page and work together seamlessly.`,
    },
  ]

  return (
    <section className='mx-auto  my-16 max-w-screen-lg sm:mb-24'>
      <h2 className='sm-title mb-16 text-center'>Features</h2>
      <div className='mx-4 grid gap-y-4 sm:mx-0 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16'>
        {features.map((item, i) => (
          <div
            key={i}
            className='flex flex-col justify-center rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-8'
          >
            <h4 className='mb-2 font-bold capitalize text-primary-700'>
              {item.name}
            </h4>
            {item.comming_soon && (
              <span className='mb-2  w-fit rounded-full px-2 py-1 text-xs font-medium text-primary-700 ring-2 ring-primary-300'>
                Coming Soon
              </span>
            )}
            <p className='text-sm font-medium text-gray-700'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
