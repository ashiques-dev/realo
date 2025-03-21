import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
