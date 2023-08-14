import { NextPage } from "next";
import styles from "@styles/galleryui.module.css";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import slides from "@components/slides";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import slides2 from "@components/slides2";
import slides3 from "@components/slides3";
import Footer from '../components/footer';
import { useRouter } from 'next/router';

const Gallery2: NextPage = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const router = useRouter();
  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <>
    <Head>
       <title>0xUFOs</title>
      <meta name="description" content="NFT collection for Crypto and UFO enthusiasts. Colorful, Fully Animated and Highly Collectible ASCII art 100% generated on Ethereum's Blockchain. Using Solidity and Web3 technology 0xUFOs are 100% digitally generated and stored on the Ethereum Blockchain." />
      <meta name="keywords" content="ufo nft, ufo nfts, ufo art, ufo collectibles, digital assets, unique collectibles, blockchain, cryptocurrency, 0xufo, 0xufos, ufo game, web3 ufo game, ascii ufo, ascii art, animated ufos, animated nfts" />
      <meta property="og:title" content="UFO NFTs, Art, and Collectibles" />
      <meta property="og:description" content="A NFT collection for Crypto and UFO enthusiasts. Colorful, Fully Animated and Highly Collectible ASCII art 100% generated on Ethereum's Blockchain. Using Solidity and Web3 technology 0xUFOs are 100% digitally generated and stored on the Ethereum Blockchain." />
      <meta property="og:image" content="https://0xufo.xyz/uf15.svg" />
      <meta property="og:url" content="https://0xufo.xyz" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="UFO NFTs, Art, and Collectibles" />
      <meta name="twitter:description" content="NFT collection for Crypto and UFO enthusiasts. Colorful, Fully Animated and Highly Collectible ASCII art 100% generated on Ethereum's Blockchain. Using Solidity and Web3 technology 0xUFOs are 100% digitally generated and stored on the Ethereum Blockchain." />
      <meta name="twitter:image" content="https://0xufo.xyz/uf15.svg" />
      </Head>
      <div className={styles.title}>
            <p>100 S Brockway St, Palatine</p>
        </div>
      <div className={styles.container}>
      <div className={styles.containermain}>
      <Image className={styles.imgh} width={520} height={450} src="/bg3.jpg"  onClick={() => setOpen(true)}/>
      
     

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
      />
      </div>

      <div className={styles.containerother}>
      <div className={styles.imgh}>
      <Image className={styles.imgh} width={220} height={220} src="/bio2.jpg"  onClick={() => setOpen2(true)}/>
      
     

      <Lightbox
        open={open2}
        close={() => setOpen2(false)}
        slides={slides2}
        plugins={[Zoom]}
      />
      </div>
      <div className={styles.imgh}>
      <Image className={styles.imgh} width={220} height={220} src="/bg2.png"  onClick={() => setOpen3(true)}/>
      
     

      <Lightbox
        open={open3}
        close={() => setOpen3(false)}
        slides={slides3}
        plugins={[Zoom]}
      />
      </div>
      </div>
      </div>
      <div className={styles.gallerybutton}>
      <button type="button" onClick={() => setOpen(true)}>
        VIEW ALL
      </button>
      </div>
      <div className={styles.container2}>
        <div className={styles.infobox}>
            <div className={styles.infoboxc}>
                <p className={styles.text1}>3</p>
                <p className={styles.text2}>BEDROOM</p>
            </div>
            <div className={styles.infoboxc}>
                <p className={styles.text1}>2</p>
                <p className={styles.text2}>FULL BATHS</p>
            </div>
            <div className={styles.infoboxc}>
                <p className={styles.text1}>1200</p>
                <p className={styles.text2}>SQUARE FEET</p>
            </div>
        </div>
        <div className={styles.infobox}>
            <div className={styles.infoboxc}>
                <p className={styles.text1}>2</p>
                <p className={styles.text2}>BEDROOM</p>
            </div>
            <div className={styles.infoboxc}>
                <p className={styles.text1}>2</p>
                <p className={styles.text2}>FULL BATHS</p>
            </div>
            <div className={styles.infoboxc}>
                <p className={styles.text1}>1200</p>
                <p className={styles.text2}>SQUARE FEET</p>
            </div>
        </div>
        <div className={styles.description}>
        <p className={styles.text3}>Nestled in a peaceful neighborhood, this cozy house boasts three bedrooms, a welcoming living room with a brick fireplace, and a modern open-concept kitchen. A study nook offers a quiet space, while the attached two-car garage provides convenience. With two and a half bathrooms, it's perfect for family or guests, embodying a harmonious blend of comfort and functionality.</p>
        </div>
        <div className={styles.contactme}>
        <button className={styles.text4} onClick={handleContactClick}>CONTACT</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Gallery2;