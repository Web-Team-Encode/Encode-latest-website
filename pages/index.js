import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Preloader from '../Components/Preloader';

export default function Home() {

  const [preloader, setPreloader] = useState(true);

  useEffect(()=>{
    setTimeout(() =>{
      setPreloader(false)
    },2500)
  },[])
  return (
    <>
      {preloader ? <Preloader /> : <>
      Home Page
      
      </>}
    </>
  )
}
