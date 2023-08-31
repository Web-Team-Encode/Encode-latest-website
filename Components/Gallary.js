import styles from "../styles/Gallary.module.css";
import Link from "next/link";
import Photos from "../pages/Photos";

const Gallary = () => {
  return (
    <>
      <div className={styles.gallary}>
        <hr />
        <h2>Our Gallery</h2>
        <div className={styles.grid_wrapper}>
          <div>
            <img
              src="/Images/img1.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img2.jpeg"
              alt=""
            />
          </div>
          <div className={styles.tall}>
            <img
              src="/Images/img8.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img3.jpeg"
              alt=""
            />
          </div>
          <div className={styles.tall}>
            <img
              src="/Images/img5.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img4.jpeg"
              alt=""
            />
          </div>
          <div className={styles.wide}>
            <img
              src="/Images/img6.jpeg"
              alt=""
            />
          </div>
          {/* <div className={styles.big}>
            <img
              src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
              alt=""
            />
          </div> */}
          <div className={styles.tall}>
            <img
              src="/Images/img7.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img9.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img11.jpg"
              alt=""
            />
          </div>
          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt=""
            />
          </div>
          <div className={styles.wide}>
            <img
              src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div> */}
        </div>
        <Link href="/Photos"><p className={styles.view}>View More</p>
              </Link>
              <h1 className={styles.social_media_p}>
            
          </h1>
      </div>
    </>
  );
};

export default Gallary;
