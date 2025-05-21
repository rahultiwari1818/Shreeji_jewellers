export default function Dialog({ isOpen, onClose, name, imageSrc, price, description }) {
  if (!isOpen) return null;

  return (
    <div className="h-screen w-screen right-0 left-0 bottom-0 top-0 fixed bg-transparent bg-opacity-70 z-20 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative border border-b">
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-500 hover:text-black  h-5 w-5 text-3xl cursor-pointer"
        >

          x
        </button>
        <img src={imageSrc} alt={name} className="w-full h-[250px] object-cover rounded mb-4" />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">From Rs. {price}</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
