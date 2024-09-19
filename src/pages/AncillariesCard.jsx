import React from "react";
import { FaClock, FaPlane } from "react-icons/fa";
import Main from "../../public/main.PNG";

const FlightBookingCard = () => {
  return (
    <div className="w-[381.33px] h-[286px] bg-blue-50 rounded-[16px] shadow-lg p-[24px_0px_24px_24px] mx-auto">
      {/* Flight Information */}
      <div className="bg-[#E7F6FF] p-1  shadow-md mb-6 -mt-1">
        {/* Airline and Flight Route */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {/* Airline Logo */}
            <span className="text-gray-700 font-bold">VS 411</span>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png"
              alt="Airline Logo"
              className="w-6 h-6 mr-2 rounded-lg"
            />
            <span className='h-3 w-24 bg-gray-200 rounded-full ml-3'></span>
            <span className='h-3 w-16 bg-gray-200 rounded-full ml-3'></span>
            <span className='h-3 w-4 bg-gray-200 rounded-full ml-1'></span>
            <span className='h-3 w-14 bg-gray-200 rounded-full ml-1'></span>
          </div>
       
        </div>
      </div>

      <div className="bg-white p-3 -mt-6  shadow-md mb-6 ">
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
          <span className="text-[#818083] text-[12px]">
            Murtala Muhammed (LOS) Lagos
          </span>
          <div className="flex justify-center items-center mt-1">
            <FaClock className="text-black mr-1 " />
            <p className="text-sm text-black">12h 14m</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="text-left">
        <h3 className="text-xl font-semibold">Ancillaries</h3>
        <p className="text-gray-500 mt-2">
        Let your customers book premium sears
         and pay for additional baggage.
        </p>
      </div>
    </div>
  );
};

export default FlightBookingCard;
