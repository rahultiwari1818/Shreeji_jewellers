import { useRef } from "react";
import Values from "../Components/Values";
import Carousel from "../Components/Overlay/Carousel.jsx";
import ProductList from "../Components/ProductList.jsx";

export default function Home() {
  const bestSellingRef = useRef(null);

  return (
    <section>
    
      <Carousel/>
      <Values />
      <hr />
      <div ref={bestSellingRef}>
        <ProductList/>
      </div>

    </section>
  );
}
