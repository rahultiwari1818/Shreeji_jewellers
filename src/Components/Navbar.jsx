import logo from "../Assets/Images/logo.png";

export default function Navbar({ onProductsClick, onContactClick }) {
  return (
    <nav className="flex items-center justify-around absolute top-0 w-full">
      <div>
        <img src={logo} alt="logo" className="h-18 w-18" />
      </div>
      <div className="flex justify-around items-center">
        <p className="font-black text-[#FFD700] text-2xl dancing-script-font">
          Shreeji Jewellers
        </p>
        <button className="text-white px-4 py-3 text-xl font-black hidden md:inline cursor-pointer">
          About us
        </button>
        <button
          onClick={onProductsClick}
          className="text-white px-4 py-3 text-xl font-black hidden md:inline cursor-pointer"
        >
          Products
        </button>
        <button
          onClick={onContactClick}
          className="text-white px-4 py-3 text-xl font-black hidden md:inline cursor-pointer"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
