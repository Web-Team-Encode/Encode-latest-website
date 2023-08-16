import React from 'react'
import styles from '../styles/About.module.css';
import Link from 'next/link';

export const About = () => {
  return (
    <>
      <div className={styles.about_section}>
        <section>
          <p>We believe in the power of individual contribution: the fire at the heart of Web3.
            We back the founders of new forms of network, digital organisations that harness the
            talents of individuals for the benefit of the collective. Together, we're shaping a
            world where ownership, collaboration, and innovation thrive beyond traditional boundaries.
          </p>
          <section className={styles.links}>
            <section className={styles.event_button}>
              <Link href="/">Gallary
              </Link>
            </section>
            <section className={styles.event_button}>
              <Link href="/">Upcoming Events
              </Link>
            </section>
          </section>
        </section>
      </div>
    </>
  )
}
