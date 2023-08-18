import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Preloader from '../Components/Preloader';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection'
import TimeLine from '../Components/TimeLine';
import { About } from '../Components/About';
import Team from '../Components/Team';
import Tagline from '../Components/Tagline';
import Gallary from '../Components/Gallary';
export default function Home() {

  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 2500)
  }, [])
  return (
    <div>
      {preloader ? <Preloader /> : <>
      
      <Navbar/>
      {/* <EarthQuake/> */}
      <HeroSection />
      <About />
      <Team />
      <Tagline />
      <TimeLine />
      <Gallary />
      </>}
    </div>
  )
}
