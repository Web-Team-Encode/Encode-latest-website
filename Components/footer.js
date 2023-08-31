import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.social_media}>
            <p>Stay up to date with the latest news,announcements and events.</p>
            <p>Follow us on social media</p>

            <section className={styles.social}>
                <div className={styles.site}>

                    <section className={styles.inner_link}>
                        <span className={styles.site_name}>
                            <img src="/Images/instagram_logo.svg" className={styles.logo} />
                            <a href="https://www.instagram.com/encode.pdeu/" target="_blank" className={styles.site_name}>
                                Instagram
                            </a>
                        </span>
                    </section>
                </div>
                <div className={styles.site}>

                    <section className={styles.inner_link}>
                        <span className={styles.site_name}>
                            <img src="/Images/threads_logo.svg" className={styles.logo} />
                            <a href="https://www.instagram.com/encode_pdeu/" target="_blank">Threads</a>
                        </span>
                    </section>
                </div>
                <div className={styles.site}>

                    <section className={styles.inner_link}>
                <span className={styles.site_name}>
                <img src="/Images/twitter_logo.svg" className={styles.logo} />
                <a href="https://twitter.com/Encode_PDEU" target="_blank" className={styles.inner_link}>Twitter</a>
                </span>
              </section>
                </div>
                <div className={styles.site}>

                    <section className={styles.inner_link}>
                        <span className={styles.site_name}>
                            <img src="/Images/linkedin_logo.svg" className={styles.logo} />
                            <a href="https://www.linkedin.com/company/encode-pdpu/" target="_blank">
                                Linkedin
                            </a>
                        </span>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default Footer;