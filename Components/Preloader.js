import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/Preloader.module.css";

gsap.registerPlugin(ScrollTrigger);

const Preloader = () => {
  const [count, setCount] = useState(0);
  const titles = [
    {
      title: "Collabrate",
    },
    {
      title: "Innovate",
    },
    {
      title: "Elevate",
    },
  ];

  const titlesRef = useRef([]);

  // useEffect for gsap
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        y: 200,
        duration: 0.75,
      },
    });

    titlesRef.current.forEach((title, index) => {
      tl.fromTo(
        title,
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
        },
        index * 0.35
      );
    });
  }, []);


    // useEffect for loader
    useEffect(() =>{
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if(prevCount === 100){
                    clearInterval(interval)
                    return prevCount
                }else{
                    return prevCount + 1
                }
            })
        }, 40)
    },[])

  return (
    <>
      <div className={styles.preloader}>
        <h2>Encode</h2>
        <div className={styles.titles}>
          {titles.map((item, index) => (
            <h3 key={index} ref={(el) => (titlesRef.current[index] = el)}>
              {item.title}
            </h3>
          ))}
        </div>
      </div>
      <div className={styles.loader}>
        <p>{count} %</p>
      </div>
    </>
  );
};

export default Preloader;
