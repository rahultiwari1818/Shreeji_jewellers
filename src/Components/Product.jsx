import { useState } from "react";
import whatsappImage from "../Assets/Images/whatsapp.png";
import Dialog from "./Dialog";

export default function Product({ imageSrc, description, price, name }) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <div
        className="text-center p-5 rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <div className="overflow-hidden rounded-lg mb-3 w-[200px] mx-auto">
          <img
            src={imageSrc}
            alt={description}
            className="w-full h-[250px] transition-transform duration-300 hover:scale-105"
          />
        </div>
        <p className="text-base mb-1">{name}</p>
        <p className="text-sm text-gray-600 mb-3">From Rs. {price}</p>
        <a
          href="https://wa.me/919408122456?text=Welcome to our store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center px-5 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-200"
          onClick={(e) => e.stopPropagation()} // prevent dialog trigger on WhatsApp click
        >
          <img src={whatsappImage} alt="icon" className="h-8 w-8" />
          <p>Order on WhatsApp</p>
        </a>
      </div>

      <Dialog
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
        name={name}
        imageSrc={imageSrc}
        price={price}
        description={description}
      />
    </>
  );
}
