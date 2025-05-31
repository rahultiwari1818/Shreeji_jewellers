import { useParams } from "react-router-dom";
import BestSelling from "../Components/BestSelling";

export default function Product() {
    const {productName} = useParams();


  return (
        <BestSelling product={productName}/>
  )
}
