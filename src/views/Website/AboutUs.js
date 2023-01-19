import React from 'react'
import OurStory from '../../components/Website/About/OurStory'
import InerBannner from '../../components/Website/Banners/InerBannner'
import Testimonail from '../../components/Website/Testimonail/Testimonail'

export default function AboutUs() {
  return (
    <>
    <InerBannner simpleHeading={'About Us'} />
    <OurStory/>
    <Testimonail/>

    </>
  )
}
