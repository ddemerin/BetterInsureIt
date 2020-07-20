import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Studies from '../components/Studies'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Testimonies from '../components/Testimonies'

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Studies />
      <Testimonies />
      <Partners />
      <Footer />
    </>
  )
}
