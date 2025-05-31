import CloseIcon  from "../Assets/Icons/CloseIcon.svg";
export default function Dialog({
  isOpen,
  onClose,
  name,
  imageSrc,
  price,
  description,
}) {
  if (!isOpen) return null;

  return (
    <section className="h-screen w-screen right-0 left-0 bottom-0 top-0 fixed bg-gray-100 bg-opacity-70 z-20 flex justify-center items-center">
      <section className="bg-white rounded-xl shadow-xl w-full  md:max-w-3xl">
        <section className="p-2 md:p-5 px-3 py-2 md:px-5 md:py-3 flex justify-between items-center border-b">
          <section></section>
          <section>
            <p className="text-xl font-bold">Product Description</p>
          </section>
          <section>
            <img src={CloseIcon} alt="close" className="cursor-pointer" onClick={() => close()}  />
          </section>
        </section>
        <section className="p-2 md:p-5 max-h-[80vh] md:max-h-[60vh] overflow-auto">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-[250px] object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-2">From Rs. {price}</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>{" "}
        </section>
      </section>
    </section>
  );
}
