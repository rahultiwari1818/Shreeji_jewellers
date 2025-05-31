import { Link } from "react-router-dom";
import necklace6 from "../Assets/Images/Necklaces/necklace6.jpg";
import bracelet6 from "../Assets/Images/Bracelets/bracelet6.jpg";

export default function ProductList() {
  const productList = [
    {
      productName: "Necklaces",
      image: necklace6,
    },
    {
      productName: "Bracelets",
      image: bracelet6,
    },
  ];
  return (
    <div className="py-5 px-4 md:px-8 lg:px-16  my-16">
      <div className="py-5 shadow-2xl bg-white rounded-2xl px-3">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 gap-4   ">
          {productList?.map((product, id) => {
            return <ProductOverview product={product} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

const ProductOverview = ({ product }) => {
  return (
    <Link to={`/product/${product.productName}`}>
      <div className="shadow-2xl rounded-2xl bg-white px-4 py-8  flex justify-center items-center my-8">
        <div>
            <h2 className="text-2xl font-bold my-3">{product.productName}</h2>
            <img
            src={product.image}
            alt="product"
            className="h-[300px] w-[300px] "
            />
        </div>
      </div>
    </Link>
  );
};
