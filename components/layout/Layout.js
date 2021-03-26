import Head from "next/head";
import React from "react";
import Navegation from "../Nav/Navegation";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Produnt Hunt Clone" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize-opentype.css/0.2.3/normalize-opentype.css"
          integrity="sha512-FzZ3/JDud8bWNK4cEbzFg63/pyzJ2eKyP+GIkLsHZvhu7NRHdZRn9BqhXH1xE3AS4gns491NY4uopx9Tci7i8w=="
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>Produnt Hunt</title>
      </Head>
      <Navegation />
      {children}
    </>
  );
};

export default Layout;
