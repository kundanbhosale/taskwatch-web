import Cta from '@/components/cta '
import FeatureSection from '@/components/features '
import Herosection from '@/components/hero '
import React, { Fragment } from 'react'

const HomePage = async () => {
  return (
    <Fragment>
      <Herosection />
      <FeatureSection />
      <Cta />
    </Fragment>
  )
}
// eslint-disable-next-line import/no-unused-modules
export default HomePage
