import React from 'react'
import styles from '../styles/About.module.css';
import Link from 'next/link';

export const About = () => {
  return (
    <>
      <div className={styles.about_section} id='about'>
        <section>
          <p>Encode is an inclusive technical community that goes beyond conventional tech promotion, 
            embracing individuals eager to explore the realms of computer science and emerging technologies. 
            It's a supportive space where curiosity, knowledge sharing, and innovation are celebrated, 
            fostering the growth of both technology and its passionate enthusiasts.
          </p>
          <div className={styles.links}>
            <div className={styles.event_button}>
              <Link href="/">
               Our <br /> Gallery
              </Link>
            </div>
            <div className={styles.event_button}>
              <Link href="/">Upcoming <br /> Events
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
