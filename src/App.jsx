import { useRef } from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import RouterApp from "./Router/Router.jsx";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const bestSellingRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <BrowserRouter>
      <Navbar
        onProductsClick={() => bestSellingRef.current?.scrollIntoView({ behavior: "smooth" })}
        onContactClick={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <RouterApp/>
      <div ref={footerRef}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
