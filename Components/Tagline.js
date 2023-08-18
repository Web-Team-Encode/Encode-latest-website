import styles from '../styles/Tagline.module.css'

const Tagline = () => {
    return ( 
        <>
            <section className={styles.tagline} id='tagline'>
                <div className={styles.tagline_text}>
                    <h3>
                        We&apos;re Architects of Change: Building Community Which Actually Creates Impact
                    </h3>
                </div>
                
            </section>
        </>
     );
}
 
export default Tagline;