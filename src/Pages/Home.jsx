import React from 'react'
import Navbar from '../Components/Navbar'
import Overlay from "../Components/Overlay/Overlay.jsx"
import Footer from "../Components/Footer"
import Values from "../Components/Values"
import ScrollComp from "../Components/ScrollComp"
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <section>
      <ParallaxProvider>
      <Overlay/>
      <Navbar/>
      <Values/>
      {/* <ScrollComp/> */}
      <Footer/>
      </ParallaxProvider>
    </section>
  )
}
