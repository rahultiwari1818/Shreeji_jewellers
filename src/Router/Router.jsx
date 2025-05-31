import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductPage from "../Pages/Product";
export default function RouterApp() {

  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/product/:productName" element={<ProductPage/>} />
    </Routes>
  )
}
