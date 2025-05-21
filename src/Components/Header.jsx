import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import c4 from "../Assets/Images/c4.jpg";
import c2 from "../Assets/Images/c2.jpg";
import c3 from "../Assets/Images/c3.jpg";
import c5 from "../Assets/Images/c5.jpg";
import c6 from "../Assets/Images/c6.jpg";
import c7 from "../Assets/Images/c7.jpg";
import LaxmiMaaCoin from "../Assets/Images/LaxmiMaaCoin.jpg";
const images = [
  c5,c6,c7,c2,c3,LaxmiMaaCoin
];

export default function Header() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ x: `-${index * 100}%` });
  }, [index, controls]);

  return (
    <div className="absolute md:w-full w-[110%] overflow-hidden  h-[50%] py-10 top-20 ">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -300 * (images.length - 1), right: 0 }}
        animate={controls}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="w-screen h-[100%] object-cover "
          />
        ))}
      </motion.div>
    </div>
  );
}
