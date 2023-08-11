import React from 'react';
import styles from "@styles/gallery.module.css";
import Footer from '../components/footer';
const Gallery: React.FC = () => {
  return (
    <div  className={styles.gallerybox}>
      <div className={styles.gimg1}>
        <p className={styles.text1}>Previous Staging Work.</p>
        <p className={styles.text2}>20+ years of experience</p>
        <p className={styles.text3}>100+ projects completed</p>
        </div>
        <div className={styles.gimg2}>
        </div>
        <div className={styles.gimg3}>
        </div>
        <div className={styles.gimg4}>
        </div>
        <Footer/>
    </div>
  );
};

export default Gallery;