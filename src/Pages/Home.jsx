import React from 'react'
import Navbar from '../Components/Navbar'
import Overlay from "../Components/Overlay/Overlay.jsx"
import Footer from "../Components/Footer"
import Values from "../Components/Values"

export default function Home() {
  return (
    <section>
      <Overlay/>
      <Navbar/>
      <Values/>
      <Footer/>
    </section>
  )
}
