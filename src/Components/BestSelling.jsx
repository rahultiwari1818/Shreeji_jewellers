import Product from "./Product";
import braceletData from "./Data/BraceletData.js";
import necklaceData from "./Data/NecklaceData.js";

export default function BestSelling() {
  return (
    <div className="py-5 px-16">
      <div className="py-5">
        <h2 className="text-2xl font-black">Best Selling Bracelets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {braceletData["1"].map((bracelet, id) => {
            return (
              <Product
                key={id}
                imageSrc={bracelet.imageSrc}
                description={bracelet.description}
                price={bracelet.price}
                name={bracelet.name}
              />
            );
          })}
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-2xl font-black">Best Selling Necklaces</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {necklaceData["1"].map((bracelet, id) => {
            return (
              <Product
                key={id}
                imageSrc={bracelet.imageSrc}
                description={bracelet.description}
                price={bracelet.price}
                name={bracelet.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
