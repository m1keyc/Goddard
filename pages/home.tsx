import React, { useEffect, useState, useLayoutEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Ufo from '../components/ufo';
import Footer from '../components/footer';
import styles from "@styles/index.module.css";
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();
  const handleListingClick = () => {
    router.push('/listings');
  };

  const handleGalleryClick = () => {
    router.push('/gallery');
  };

  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);

  const checkElementVisibility = () => {
    // Check if the elements are in the viewport
    const element = document.querySelector(`.${styles.element}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      // Trigger the animation if it's not already triggered
      if (isVisible && !isAnimated) {
        setIsAnimated(true);
      }
    }

    const element2 = document.querySelector(`.${styles.element2}`);
    if (element2) {
      const rect2 = element2.getBoundingClientRect();
      const isVisible2 = rect2.top < window.innerHeight && rect2.bottom >= 0;

      // Trigger the animation if it's not already triggered
      if (isVisible2 && !isAnimated2) {
        setIsAnimated2(true);
      }
    }
  };

  useLayoutEffect(() => {
    // Check if the elements are visible on initial load
    checkElementVisibility();

    // Add the event listener for the scroll event
    window.addEventListener('scroll', checkElementVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkElementVisibility);
    };
  }, [isAnimated, isAnimated2]);

  return (
    <>
      <Head>
        <title>GODDARD GROUP</title>
      </Head>
      {/* ---HEADER---- */}
      <div className={styles.onemain}>
        <h1 className={styles.title1}>GODDARD GROUP</h1>
        <h1 className={styles.sub1}>REAL ESTATE - STAGING - CONSTRUCTION</h1>
      </div>
      <div className={styles.shapediv1}></div>
      {/* -------ABOUT------- */}
      <div className={styles.about}>
        <div className={styles.aboutbg}>
          <div className={`${styles.container} ${isAnimated2 ? styles.sub2Animated : ''} ${styles.element2}`}>
            <div className={styles.card + ' ' + styles.card0}>
              <div className={styles.border}>
                <h2 className={styles.zoombio}>Patricia Goddard</h2>
                <h2 className={styles.zoombio2}>Patricia Goddard</h2>
                <div className={styles.icons}>
                  <i className={styles.instagram1} aria-hidden="true"></i>
                  <i className={styles.twitter1} aria-hidden="true"></i>
                  <i className={styles.facebook1} aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bio}>
            <h1 className={`${styles.sub4} ${isAnimated ? styles.sub2Animated : ''} ${styles.element}`}>
              Meet Patricia Goddard, the face behind the business. a highly skilled realtor who excels in selling homes
              and offers an impressive range of services.
            </h1>
            <h1 className={`${styles.sub5} ${isAnimated ? styles.sub2Animated : ''} ${styles.element}`}>
              From expert staging and construction insights to meticulous organization, Patricia enhances property appeal
              to achieve optimal results. Additionally, she provides invaluable mortgage advice, collaborates with
              reputable attorneys, and connects clients with trusted debt counselors.
            </h1>
            {/* ... */}
            {/* <h1 className={`${styles.sub5} ${isAnimated ? styles.sub2Animated : ''} ${styles.element}`}>
              With Patricia's professional expertise and comprehensive support, your real estate journey is guaranteed to
              be seamless and successful.
            </h1> */}
            {/* ... */}
          </div>
        </div>
      </div>
      <div className={styles.customshapedivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles.shapefill}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles.shapefill}
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapefill}></path>
        </svg>
      </div>
      <div className={styles.info}>
        <div className={styles.infotext}>
          <h2 className={styles.infotitle}>Looking for a home?</h2>
          <h2 className={styles.infosub}>Check out my listings and staging gallery.</h2>
        </div>
        <div className={styles.buttons}>
          <img src="/listings2.svg" />
          <button className={styles.learnmore} onClick={handleListingClick}>
            Listings
          </button>
          <img src="/gallery22.svg" />
          <button className={styles.learnmore} onClick={handleGalleryClick}>
            GALLERY
          </button>
          <img src="/gallery22.svg" />
          <button className={styles.learnmore} onClick={handleGalleryClick}>
            NEXTJS FUCK VITE YOU SUCK AT CODING
          </button>
        </div>
      </div>
      <div className={styles.info2}>
        <div className={styles.infotext2}>
          <h2 className={styles.infotitle2}>LOOKING FOR SOMETHING ELSE?</h2>
          <h2 className={styles.infosub2}>OTHER SERVICES I PROVIDE.</h2>
        </div>
        <div className={styles.info2content}>
          <div className={styles.info2text}>
            <h2 className={styles.infosub3}>CONSTRUCTION</h2>
            <h2 className={styles.infosub3}>LANDSCAPING</h2>
            <h2 className={styles.infosub3}>MORTGAGES</h2>
            <h2 className={styles.infosub3}>ATTORNEYS</h2>
            <h2 className={styles.infosub3}>DEBT COUNSELOR</h2>
            <h2 className={styles.infosub3}>ESTATE SALES</h2>
          </div>
          <div className={styles.info2media}>
            {/* <img src='/listings2.svg'></img> */}
            <Ufo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
