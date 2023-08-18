import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Encode</div>
        <nav>
            <ul className={styles.navlist}>
                <a href='#home'><li>Home</li></a>
                <a href='#about'> <li>About</li></a>
                <a href='#timeline'><li>Events</li></a>
                <a href='#tagline'> <li>Team</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
