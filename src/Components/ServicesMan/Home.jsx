import React from "react";
import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Banner />
      <Footer/>
    </>
  );
};

export default Home;
