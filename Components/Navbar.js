import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Encode</div>
        <nav>
            <ul className={styles.navlist}>
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Team</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar