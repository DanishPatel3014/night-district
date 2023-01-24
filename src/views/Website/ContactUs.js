import React from 'react'
import { useEffect } from 'react';
import InerBannner from '../../components/Website/Banners/InerBannner'
import Contact from '../../components/Website/Contact/Contact'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <>
    <InerBannner simpleHeading={'Contact Us'}/>
    <Contact/>
    </>
  )
}
