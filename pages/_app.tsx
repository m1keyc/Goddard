import type { AppProps } from "next/app";
import "../styles/global.css";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  

  return (

        <Component {...pageProps} />
       
  
  );
}

export default App;
