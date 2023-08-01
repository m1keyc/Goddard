import type { AppProps } from "next/app";
import "../styles/global.css";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import NavBar from "@components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  

  return (
    <ChakraProvider>
        <NavBar/>
        <Component {...pageProps} />
        <Analytics/>
        </ChakraProvider>
  
  );
}

export default App;
