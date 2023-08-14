import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Preloader from '../Components/Preloader';
import Navbar from '../Components/Navbar';
import EarthQuake from '../Components/EarthQuake';
import TimeLine from '../Components/TimeLine';
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

        <Navbar />
        {/* <TimeLine/> */}
        <EarthQuake />
        <h1 className={styles.maintitle}>ENCODE</h1>
        <div className={styles.tagline}>
          <h1>Wired Minds,</h1>
          <h1>Boundless Possibilities</h1>
          <p>Our Events</p>
        </div>
      </>}
    </div>
  )
}
