import React from 'react'
import InerBannner from '../../components/Website/Banners/InerBannner'
import AllBars from '../../components/Website/Bars/AllBars'
import TopBar from '../../components/Website/Bars/index.js'
import Testimonail from '../../components/Website/Testimonail/Testimonail'

export default function Bars() {
  return (
    <>
    <InerBannner simpleHeading={'Bars'}/>
    <TopBar/>
    <AllBars/>
    <Testimonail/>
    </>
  )
}
