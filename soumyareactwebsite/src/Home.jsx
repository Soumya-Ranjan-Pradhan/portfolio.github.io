import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobaalContext } from './context'
import Services from './Services';
import Contact from './Contact';

const Home = () => {
const {updateHome} = useGlobaalContext();

useEffect(()=>updateHome(), [])
  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  )
}

export default Home