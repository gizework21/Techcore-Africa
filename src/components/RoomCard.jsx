// components/RoomCard.jsx
import {React, useState} from 'react';
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const RoomCard = ({ images, title, rating }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(images)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center">
      <div className="relative w-1/4 mr-4">
          <img
            src={images[currentIndex]}
            alt={title}
            className="rounded-lg h-[190px] w-full object-cover"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 p-2">
            <button className="bg-gray-300 rounded-full p-1" onClick={handlePrev}>
              <FaChevronLeft className="text-xl" />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2">
            <button className="bg-gray-300 rounded-full p-1" onClick={handleNext}>
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex flex-col items-start">
            <div className='flex gap-4'>
            <span className="bg-green-500 text-black font-semibold px-2 py-1 rounded-lg">Marked up</span>
            <span className="bg-green-500 text-black font-semibold px-2 py-1 rounded-lg">Earn Commission</span>
            </div>
            <p className="text-lg font-bold">{title}</p>
          </div>
          <div className="flex items-center my-2">
            <p className="text-sm text-gray-500">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
