import { useRef } from "react";
import Navbar from "../Components/Navbar";
import Overlay from "../Components/Overlay/Overlay.jsx";
import Footer from "../Components/Footer";
import Values from "../Components/Values";
import BestSelling from "../Components/BestSelling.jsx";

export default function Home() {
  const bestSellingRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <section>
      <Overlay />
      <Navbar
        onProductsClick={() => bestSellingRef.current?.scrollIntoView({ behavior: "smooth" })}
        onContactClick={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
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
