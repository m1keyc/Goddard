import React from 'react'


import styles from "@styles/Footer.module.css";

export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {

  return (
    <div className={styles.footer}>
        <h2>CONTACT</h2>
        <img src='/gg2.svg'></img>
        <img src='/satori4.svg' width={140}></img>
    </div>

  );
}

export default Footer;
