import logo from "../Assets/Images/logo.png";

export default function Footer() {
  return (
    <footer className="w-[100%] md:w-full bg-[#386641] text-white">
      <div className="block md:flex  justify-center gap-5  items-center  md:px-20 py-10 w-full">
        <div className="py-2 flex gap-3 md:gap-5 justify-around items-center">
          <img src={logo} defer alt=" logo " srcSet="" className="h-18 w-18  rounded-full" />
          <div className="text-xl font-black">
            <a
              href="tel:+919408122456"
              className="text-lg font-semibold hover:underline"
            >
              Contact : 94081 22456
            </a>
            <p>Kaushal Soni</p>
          </div>
        </div>
        <div className=" flex justify-center items-center px-3 py-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2342184091285!2d72.8327633!3d21.2225589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9fb7ad25c5%3A0xb1f7b6e201af2562!2sSHREEJI%20JEWELLERS!5e0!3m2!1sen!2sin!4v1739368194000!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg w-full max-w-3xl"
          ></iframe>
        </div>
      </div>
      <hr className="bg-[#d3d3d3]" />
      <hr className="bg-[#d3d3d3]" />
      <div className="text-center py-2">Copyright © All rights reserved</div>
    </footer>
  );
}
