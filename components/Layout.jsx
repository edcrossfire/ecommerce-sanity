import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="box">
      <Head>
        <title>Shoe Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="w-full">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout