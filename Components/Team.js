import { useState } from 'react';
import styles from '../styles/Team.module.css'
import data from '../public/Data/Team.json'

const Team = () => {
    const [teamData, setTeamData] = useState(data);

    return (
        <>
            <div className={styles.team_section}>
                <section className={styles.team_text}>
                    <h2>Our Executives</h2>
                </section>
                <section className={styles.team_cards}>
                    <section className={styles.card_flex}>
                        {teamData.map((item, index) => {
                            return (
                                <>
                                    <div class={styles.content}>
                                        <img src={item.img} />
                                        <section className={styles.team_name}>
                                            <h2>{item.name}</h2>
                                            <h3>{item.designation}</h3>
                                        </section>
                                    </div>
                                </>
                            )
                        })}
                    </section>

                </section>
                <hr />
                <button className={styles.club_button}>More than just technical club</button>
                <section className={styles.team_image}>
                    <img src='/Images/team_img.jpeg' />
                </section>
                <section className={styles.community_button}>

                    <section>
                        <h2 className={styles.tagline}>We Encourage Creative Minds</h2>
                        <div>
                            <a href='https://chat.whatsapp.com/CbZ618g7HCOCMOgRoV4W8m' target='_blank'><button>
                                Join Our Community
                            </button></a>

                        </div>
                    </section>

                </section>
            </div>
        </>
    );
}

export default Team;