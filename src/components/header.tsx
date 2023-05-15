'use client' // This is a client component 👈🏽
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import useViewPort from '../hooks/useViewport'
import configuration from '@/configuration '

const Header = () => {
  const path = usePathname()
  const { width } = useViewPort()
  const p = path.split('/')[1]
  return (
    <header>
      <nav
        className={`border-gray-20 border-b p-4 dark:bg-gray-800 lg:px-6 ${
          path === '/' && 'bg-indigo-100'
        }`}
      >
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <Link href='/' className=' flex items-center' passHref>
            <span
              className='relative'
              style={{
                width: width > 768 ? '175px' : '35px',
                height: width > 768 ? '50px' : '35px',
              }}
            >
              {width ? (
                <Image
                  src={
                    width > 768
                      ? '/images/logo.png'
                      : '/images/favicon/android-chrome-192x192.png'
                  }
                  alt={'logo of taskwatch.io'}
                  title={configuration.site.name}
                  width={width > 768 ? 175 : 35}
                  height={width > 768 ? 50 : 35}
                  priority={true}
                  placeholder='empty'
                />
              ) : null}
            </span>
          </Link>
          <div className='flex-between  flex items-center gap-x-8'>
            <Link
              href='/blogs'
              className={`link ${p === 'blogs' ? 'text-primary-700' : ''}`}
            >
              Blogs
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || '/'}
              className='btn-primary w-fit rounded-full'
            >{`Kanban Boards`}</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
