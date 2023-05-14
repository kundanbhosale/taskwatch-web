const configuration = {
  site: {
    name: 'Taskwatch - Free Personal Kanban Board for Easy Task Management',
    description:
      'Taskwatch is the ultimate Kanban board tool for effortless project management. Stay organized and boost productivity with our offline-ready and customizable kanban boards. Try it for free!',
    themeColor: '#711aff',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Taskwatch - Kanban Board App',
    twitterHandle: 'kb',
    githubHandle: 'kb',
    language: 'en',
  },
  blog: {
    maxReadMorePosts: 4,
  },
  production: process.env.NODE_ENV === 'production',
}

export default configuration
