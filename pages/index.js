import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Preloader from '../Components/Preloader';
import Navbar from '../Components/Navbar';
import EarthQuake from '../Components/EarthQuake';

export default function Home() {

  const [preloader, setPreloader] = useState(true);

  useEffect(()=>{
    setTimeout(() =>{
      setPreloader(false)
    },2500)
  },[])
  return (
    <div className={styles.main}>
      {preloader ? <Preloader /> : <>
      
      <Navbar/>
      <EarthQuake/>
      <h1>ENCODE</h1>
      </>}
    </div>
  )
}
