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
      <title>{ title ? title : "Goddard Group" }</title>
      <meta
        name={ name ? name : "Goddard Group" }
        content={ content ? content : "Goddard Group" }
      />
      <link rel="icon" href={ favicon ? favicon : "/favicon.ico"} />
    </NextHead>
  );
};

export default Head;
