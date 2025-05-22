import { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Values from "../Components/Values";
import BestSelling from "../Components/BestSelling.jsx";
import Carousel from "../Components/Overlay/Carousel.jsx";

export default function Home() {
  const bestSellingRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <section>
      <Navbar
        onProductsClick={() => bestSellingRef.current?.scrollIntoView({ behavior: "smooth" })}
        onContactClick={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <Carousel/>
      <Values />
      <hr />
      <div ref={bestSellingRef}>
        <BestSelling />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </section>
  );
}
