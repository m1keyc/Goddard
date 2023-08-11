import React from 'react';
import styles from "@styles/contact.module.css";
import Footer from '../components/footer';
const Contact: React.FC = () => {
  return (
    <>
    <div className={styles.contactbox}>
    <div className={styles.glass}>
        <div className={styles.contactvertical}>
            <p className={styles.contact1}>CONTACT</p>
        </div>
            
            <div className={styles.contactcontent}>
                <p className={styles.contact2}>PHONE: <span className={styles.contactcolor}>312-321-3323</span></p>
                <p className={styles.contact2}>EMAIL: <span className={styles.contactcolor}>yoyoyo@yoyo.com</span></p>
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.contactpic} src='/facebookicon2.svg' height={100} width={100}/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.contactpic} src='/instagramicon.svg' height={100} width={100}/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.contactpic} src='/linkedinicon.svg' height={100} width={100}/>
                    </a>
                </div>
            </div>
            </div>
    </div>
    <div className={styles.branding}>
        <img className={styles.contactpic2} src='gganimwhite.svg' height={400} width={400}/>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;