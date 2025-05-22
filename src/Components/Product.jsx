import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whatsappImage from "../Assets/Images/whatsapp.png";
import Dialog from "./Dialog";

export default function Product({ imageSrc, description, price, name }) {
  const [openDialog, setOpenDialog] = useState(false);

  // Animation variants for the product card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="text-center p-5 rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <div className="overflow-hidden rounded-lg mb-3 w-[200px] mx-auto">
          <motion.img
            src={imageSrc}
            alt={description}
            className="w-full h-[250px] transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.p 
          className="text-base mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {name}
        </motion.p>
        <motion.p 
          className="text-sm text-gray-600 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          From Rs. {price}
        </motion.p>
        <a
          href="https://wa.me/919408122456?text=Welcome to our store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center px-5 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img 
            src={whatsappImage} 
            alt="icon" 
            className="h-8 w-8"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.4 }}
          />
          <p>Order on WhatsApp</p>
        </a>
      </motion.div>

      <AnimatePresence>
        {openDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Dialog
              isOpen={openDialog}
              onClose={() => setOpenDialog(false)}
              name={name}
              imageSrc={imageSrc}
              price={price}
              description={description}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}