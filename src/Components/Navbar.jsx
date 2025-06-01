import logo from "../Assets/Images/logo.png";

export default function Navbar({ onProductsClick, onContactClick }) {
  return (
    <nav className="flex items-center justify-center gap-3 z-10 top-0 w-[100%] bg-[#386641] py-3 fixed ">
      <div>
        <img src={logo} alt="logo" className="h-18 w-18  " />
      </div>
      <div className="flex justify-around items-center">
        <p className="text-white text-[] text-2xl dancing-script-font">
          Shreeji Jewellers
        </p>
        {/* <button className="text-white px-4 py-3  font-black hidden md:inline cursor-pointer">
          About us
        </button>
        <button
          onClick={onProductsClick}
          className="text-white px-4 py-3  font-black hidden md:inline cursor-pointer"
        >
          Products
        </button>
        <button
          onClick={onContactClick}
          className="text-white px-4 py-3  font-black hidden md:inline cursor-pointer"
        >
          Contact
        </button> */}
      </div>
    </nav>
  );
}
