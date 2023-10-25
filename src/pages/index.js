import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CategoriesofEvent from "./CategoriesofEvent";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Mainpage from "./Mainpage";
import Gallery from "./Gallery";
import Body from "./Body";
import Nav from "./Nav";
import Map from "./Map";
import TestiMonials from "./TestiMonials";
import Footer from "./Footer";
const index = () => {
  return (
    <>
      <Head>
        <title>DayDream Planner - DD Planner</title>
        <meta
          name="description"
          content="Find and book events online. Our goals is to create a seamless and memorable event that you and your guests will cherish for years to come."
        />
        <link rel="canonical" href="https://planner-alpha.vercel.app/" />
        <meta
          name="keywords"
          content="DD Planners, Dream Day Event Planner, Event Booking"
        />
      </Head>

      <Nav />
      <HeroSection />
      <Body />
      <Mainpage />
      <CategoriesofEvent />
      <Gallery />
      <TestiMonials />

      <Contact />
      <Map />
      <Footer />
    </>
  );
};
export default index;
