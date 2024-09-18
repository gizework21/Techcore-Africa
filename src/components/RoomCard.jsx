// components/RoomCard.jsx
import React from 'react';


const RoomCard = ({ image, title, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center">
        <img src={image} alt={title} className="w-1/4 rounded-lg mr-4" />
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
