import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobaalContext } from './context'

const About = () => {

  const {updateAboutPage} = useGlobaalContext()
  useEffect(()=>
    updateAboutPage(),[])

  return (
   <HeroSection />
  )
}

export default About