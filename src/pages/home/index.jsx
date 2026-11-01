import React from 'react'
import Seo from '@components/Seo'
import Hero from './sections/Hero'
import OverMij from './sections/OverMij'
import Reviews from './sections/Reviews'
import Diensten from './sections/Diensten'
import Galerij from './sections/Galerij'
import Werkgebied from './sections/Werkgebied'
import FAQ from './sections/faq'
import Contact from './sections/Contact'

const Home = () => {
  return (
    <>
      <Seo
        title="Loodgieter & dakdekker in Haarlem, Heemstede e.o. | Juffermans"
        description="Loodgietersbedrijf Juffermans — vakwerk in lood, zink en dakbedekking in Haarlem, Heemstede en omgeving. Eén aanspreekpunt, gratis offerte."
        path="/"
      />
      <Hero />
      <OverMij />
      <Reviews />
      <Diensten />
      <Werkgebied />
      <Galerij />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
