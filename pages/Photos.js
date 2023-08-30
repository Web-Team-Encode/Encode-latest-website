import React from 'react';
import styles from "../styles/Photos.module.css"; // Import the styles

const Photos = () => {
    return (
        <div className={styles.body}>
            <p className={styles.text}>Our Gallery</p>
            <div id="photos" className={styles.photo_section} >
                <img src="/Images/team_img.jpeg" alt="team" className={styles.image1} />
            </div>
            <div className={styles.grid_wrapper}>
                <div className={styles.tall}>
                    <img src="/Images/img1.jpeg" alt="team" className={styles.image} />
                </div>
                <div>
                    <img src="/Images/img2.jpeg" alt="team" className={styles.image} />
                </div>
                <div className={styles.tall}>
                    <img src="/Images/img3.jpeg" alt="team" className={styles.image} />
                </div>

            </div>
            <div className={styles.grid_wrapper}>
                <div className={styles.wide}>
                    <img src="/Images/img4.jpeg" alt="team" className={styles.wide_image} />
                </div>
                <div className={styles.wide}>
                    <img src="/Images/img5.jpeg" alt="team" className={styles.wide_image} />
                </div>

            </div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /><br /> <br />
            <div className={styles.grid_wrapper}>
                <div className={styles.tall}>
                    <img src="/Images/img6.jpeg" alt="team" className={styles.tall_image} />
                </div>
                <div>
                    <img src="/Images/img7.jpeg" alt="team" className={styles.image2} />
                </div>
                <div className={styles.tall}>
                    <img src="/Images/img8.jpeg" alt="team" className={styles.image2} />
                </div>

            </div>
            <br /> <br /><br /> <br /><br /> <br /><br /> <br />
            <div className={styles.grid_wrapper}>
                <div className={styles.wide}>
                    <img src="/Images/img9.png" alt="team" className={styles.wide_image} />
                </div>
                <div className={styles.wide}>
                    <img src="/Images/img10.jpg" alt="team" className={styles.wide_image} />
                </div>

            </div>
            <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />

            <p className={styles.text}> OUR EVENTS</p>
            <div id="event 1" className={styles.event_container}>
                <p className={styles.event_name}> Introductory Session 2023</p>
                <p className={styles.event_desc}>On the illustrious day of August 18, 2023, a significant milestone was achieved as the curtains rose on the introductory session of ENCODE. With immense pride and joy, we celebrated not only the commencement of the 2023 edition but also the remarkable feat of completing a glorious decade. ENCODE, the esteemed Computer Science club of PDPU, marked its 10th anniversary in an event that resonated with success, enthusiasm, and a commitment to further excellence. This introductory session not only unveiled the exciting prospects that await but also served as a testament to the journey of innovation and knowledge that ENCODE has embarked upon over the years.</p>
                <div className={styles.grid_wrapper}>
                    <div className={styles.tall}>
                        <img src="/Images/img12.jpg" alt="team" className={styles.image} />
                    </div>
                    <div>
                        <img src="/Images/img13.jpg" alt="team" className={styles.image} />
                    </div>
                    <div className={styles.tall}>
                        <img src="/Images/img14.jpg" alt="team" className={styles.image} />
                    </div>
                </div>
                <div className={styles.grid_wrapper}>
                    <div className={styles.wide}>
                        <img src="/Images/img15.jpg" alt="team" className={styles.wide_image} />
                    </div>
                    <div className={styles.wide}>
                        <img src="/Images/img16.jpg" alt="team" className={styles.wide_image} />
                    </div>
                </div>
            </div>
            <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
            <div id="event 2" className={styles.event_container}>
                <p className={styles.event_name}>CODEWAR</p>
                <p className={styles.event_desc}>Codewar 2023, Encode&apos;s premier event for the Tesseract community, concluded as a remarkable journey into competitive programming. Spanning a dynamic 3-hour coding marathon, participants showcased their problem-solving skills and coding finesse. Challenges emphasized both coding acumen and quick thinking. Codewar 2023 exemplified growth and the thrill of pressure situations, celebrating dedication to coding. As Codewar&apos;s virtual battlefield closed, it reiterated that each keystroke, algorithm, and strategy shapes coding excellence&apos;s future. Until the next edition, keep coding, pushing boundaries, and evolving in this dynamic technological landscape.</p>
                <div className={styles.grid_wrapper}>
                    <div className={styles.tall}>
                        <img src="/Images/img20.jpg" alt="team" className={styles.image} />
                    </div>
                    <div>
                        <img src="/Images/img21.jpg" alt="team" className={styles.image} />
                    </div>
                    <div className={styles.tall}>
                        <img src="/Images/img22.jpg" alt="team" className={styles.image} />
                    </div>
                </div>
                <div className={styles.grid_wrapper}>
                    <div className={styles.wide}>
                        <img src="/Images/img19.jpg" alt="team" className={styles.wide_image} />
                    </div>
                    <div className={styles.wide}>
                        <img src="/Images/img18.jpg" alt="team" className={styles.wide_image} />
                    </div>
                </div>

            </div>
            <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
            <div id="event 1" className={styles.event_container}>
                <p className={styles.event_name}>IDEATHON</p>
                <p className={styles.event_desc}> Space exploration had sparked a multitude of inquiries demanding innovative resolutions. Challenges encompassing the management of space debris, the redefinition of launch techniques for practicality, and the safeguarding of astronauts against cosmic radiations had stirred interest and curiosity. ENCODE had extended an invitation to enthusiasts to rise to the occasion and become integral to the solutions through their dynamic event, IDEATHON. This platform functioned as a catalyst for inventive concepts. Teams had been assembled, thoughts had been pooled, and brainstorming sessions had delved profoundly into the core of space-related predicaments. Participants had seized the opportunity to contribute to the constantly evolving realm of space exploration while potentially garnering acknowledgment for their imaginative pursuits. The stage had been set to mold the future, and participants had engaged in ENCODE&apos;s IDEATHON, allowing their innovations to radiate brilliantly.</p>
                <div className={styles.grid_wrapper}>
                    <div className={styles.tall}>
                        <img src="/Images/img25.jpg" alt="team" className={styles.image} />
                    </div>
                    <div>
                        <img src="/Images/img24.jpg" alt="team" className={styles.image} />
                    </div>
                    <div className={styles.tall}>
                        <img src="/Images/img23.jpg" alt="team" className={styles.image} />
                    </div>


                </div>
            </div>
            <p className={styles.end_line}>Stay Tuned for Upcoming Events</p>
        </div>
    );
}

export default Photos;
