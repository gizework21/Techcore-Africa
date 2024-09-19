import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const TourCard = ({ image, title, refundable, mobileVoucher, rating, reviews }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center">
        <img src={image} alt={title} className="w-1/4 rounded-lg mr-4" />
        <div className="w-3/4 flex flex-col">
          <div className="flex flex-col items-start">
            <span className="bg-green-500 text-black font-semibold px-2 py-1 rounded-lg">Marked up</span>
            <p className="text-lg font-bold">{title}</p>
          </div>
          <div className="flex flex-col items-start my-1">
            <div className='flex my-2 items-center'>
              <FaMapMarkerAlt className="text-green-300 text-xl" />
              <span className='h-3 w-24 bg-gray-200 rounded-full ml-3'></span>
            </div>
            <div className='flex gap-4'>
            {refundable && <span className="bg-gray-200 text-black font-bold p-1 rounded-lg">Refundable Ticket</span>}
              {mobileVoucher &&
                <span className="bg-gray-200 text-black font-bold p-1 rounded-lg">Mobile Voucher</span>}
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-black font-extrabold">4.5/5</p>
            <p className="text-sm text-gray-500 ml-2">from {reviews} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
