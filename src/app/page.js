'use client'
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
      <Navbar/>
      <Homepage />
      <Footer />
    </>
  );
}
