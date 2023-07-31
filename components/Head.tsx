import NextHead from "next/head";

interface HeadProps {
  title: string,
  favicon: string,
  name: string,
  content: string,
}

const Head = ({title, favicon, name, content}: HeadProps) => {

  return (
    <NextHead>
      <title>{ title ? title : "0xUFO's" }</title>
      <meta
        name={ name ? name : "0xUF0s" }
        content={ content ? content : "0xUF0s NFT" }
      />
      <link rel="icon" href={ favicon ? favicon : "/favicon.ico"} />
    </NextHead>
  );
};

export default Head;
