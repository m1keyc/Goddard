import type { NextPage } from "next";
import { useState, useEffect } from 'react';
import Home from "./home";
import Head from "next/head";
import Loader from "@components/sections/Loader";

const Index: NextPage = () => {
  const [showHome, setShowHome] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <>
       <Head>
         <title>Goddard</title>
        <meta name="description" content="Goddard." />
        <meta name="keywords" content="Goddard" />
        <meta property="og:title" content="Goddard" />
        <meta property="og:description" content="Goddard" />
        <meta property="og:image" content="https://Goddard" />
        <meta property="og:url" content="https://Goddard" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="goddard" />
        <meta name="twitter:description" content="goddard" />
        <meta name="twitter:image" content="https://goddard" />
        </Head>
      {showHome 
        ? <Home /> 
        : <Loader/>
      }
    </>
    
  );
};

export default Index;