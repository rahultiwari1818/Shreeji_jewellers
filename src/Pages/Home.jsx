import { useRef } from "react";
import Values from "../Components/Values";
import BestSelling from "../Components/BestSelling.jsx";
import Carousel from "../Components/Overlay/Carousel.jsx";

export default function Home() {
  const bestSellingRef = useRef(null);

  return (
    <section>
    
      <Carousel/>
      <Values />
      <hr />
      <div ref={bestSellingRef}>
        
      </div>

    </section>
  );
}
