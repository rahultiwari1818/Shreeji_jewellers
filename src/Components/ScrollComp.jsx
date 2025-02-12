import React from 'react'
import ringImage from "../Assets/Images/Ring.png"
import { ParallaxBanner } from 'react-scroll-parallax'
export default function ScrollComp() {
    return (
        <ParallaxBanner
        layers={[
          { image: {ringImage}, speed: -20 },
          { image: {ringImage}, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-white font-thin">Hello World!</h1>
        </div>
      </ParallaxBanner>
    )
}
