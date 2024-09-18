import React from 'react';
import { FaClock, FaPlane } from 'react-icons/fa';

const FlightSearchCard = () => {
  return (
    <div className="w-[381.33px] h-[286px] bg-[#F0F6FC] rounded-[16px] shadow-lg p-[24px_0px_24px_24px] mx-auto">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-1 bg-[#E7F6FF]">
        <button className="bg-[#E7F6FF] text-gray-600  px-2 py-1">Return</button>
        <button className="bg-blue-500 text-white rounded px-3 py-1">Select Seat</button>
        <button className="bg-white text-gray-600 rounded w-[80px]  py-1">1 stop</button>
        <button className="bg-white text-gray-600 rounded px-2 py-1 mr-4">Airline</button>
      </div>

      {/* Flight Time and Details */}
      <div className="bg-white p-4  shadow-md mb-6 ">
        <div className="flex justify-end">
          <span className="text-2xl font-bold">10:30</span>
          <div className="flex">
            <span className="border-2 border-gray-300 w-2 h-2 rounded-full  self-center"></span>
            <span className="border-2 border-gray-300 w-6  self-center"></span>
            <div className="flex justify-center items-center bg-gray-100 rounded-full p-1 w-fit">
              <FaPlane className="text-blue-500 mr-1" />
              <p className="text-blue-500 truncate">1 stop</p>
            </div>
            <span className="border-2 border-gray-300 w-6  self-center"></span>
            <span className="border-2 border-gray-300 w-2 h-2 rounded-full  self-center"></span>
          </div>
        </div>

       

        <div className="flex justify-between items-center mt-2">
          <span className="text-[#818083] text-[12px]">Murtala Muhammed (LOS) Lagos</span>
          <div className="flex justify-center items-center mt-1">
            <FaClock className="text-black mr-1 " />
            <p className="text-sm text-black">12h 14m</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="text-left">
        <h3 className="text-xl font-sans font-bold">Search</h3>
        <p className="text-gray-500 mt-2">
          Make searching flights an intuitive experience for your customers.
        </p>
      </div>
    </div>
  );
};

export default FlightSearchCard;
