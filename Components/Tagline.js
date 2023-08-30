import styles from '../styles/Tagline.module.css'

const Tagline = () => {
    return ( 
        <>
            <section className={styles.tagline} id='tagline'>
                <div className={styles.tagline_text}>
                    <h3>
                        We&apos;re Architects of Change: Building a community that actually creates an impact
                    </h3>
                </div>
                
            </section>
        </>
     );
}
 
export default Tagline;