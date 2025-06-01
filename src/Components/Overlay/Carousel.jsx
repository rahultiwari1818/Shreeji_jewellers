import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import goldCoinImage from "../../Assets/Images/LaxmiMaaCoin.jpg"; // Replace with actual path
import diamondRingImage from "../../Assets/Images/Ring.png"; // Replace with actual path
import braceletImage from "../../Assets/Images/newbg.jpg"; // Replace with actual path

const posters = [
  {
    image: goldCoinImage,
    headline: "Divine Elegance in Gold",
    subtext: "Celebrate with our Lakshmi Gold Coin",
    highlight: "Mirror Finish | 3D Embossing | Smooth Edges",
    cta: "Shop Now",
    bgColor: "bg-gradient-to-r from-pink-100 to-pink-200",
  },
  {
    image: diamondRingImage,
    headline: "Shine Bright with Love",
    subtext: "Timeless Diamond Rings",
    cta: "Discover More",
    bgColor: "bg-gradient-to-r from-white to-blue-100",
  },
  {
    image: braceletImage,
    headline: "Elegance on Your Finger",
    subtext: "Crafted with Precision",
    cta: "Explore Now",
    bgColor: "bg-gradient-to-r from-green-50 to-yellow-50",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mt-28 w-[100%] md:w-full h-[550px] overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className={` inset-0 flex flex-col items-center justify-center w-[110%] md:w-full ${posters[currentIndex].bgColor}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-3xl  mb-4">{posters[currentIndex].headline}</h2>
          <img
            src={posters[currentIndex].image}
            alt={posters[currentIndex].subtext}
            className="w-[400px] h-[400px] mb-4"
          />
          <p className="text-lg mb-2">{posters[currentIndex].subtext}</p>
          {posters[currentIndex].highlight && (
            <p className="text-sm text-gray-600 mb-4">{posters[currentIndex].highlight}</p>
          )}
          {/* <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            {posters[currentIndex].cta}
          </button> */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        →
      </button>

      {/* Dots for Navigation */}
      
      <div className="absolute bottom-4  gap-2 flex justify-center items-center w-full">
        <div className="flex justify-center gap-3 items-center">
          {posters.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}