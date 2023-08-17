import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Preloader from '../Components/Preloader';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection'
import TimeLine from '../Components/TimeLine';
import { About } from '../Components/About';
import Team from '../Components/Team';
import Tagline from '../Components/Tagline';
export default function Home() {

  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 2500)
  }, [])
  return (
    <div>
      {preloader ? <Preloader /> : <>
      
      {/* <Navbar/> */}
      {/* <EarthQuake/> */}
      {/* <HeroSection /> */}
      <About />
      <Team />
      {/* <Tagline /> */}
      <TimeLine />
      </>}
    </div>
  )
}
