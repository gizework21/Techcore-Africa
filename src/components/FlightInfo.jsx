// components/FlightInfo.jsx
import React from "react";
import { FaPlane, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const FlightInfo = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-4 mb-4 gap-4 items-center">
      <div className="top flex justify-between gap-12 items-center">
        <div className="flex items-center">
          <p className="text-md font-medium">DEPARTURE</p>
          <span className="text-md text-gray-400 font-semibold m-4">.</span>
          <p className="text-md text-gray-400">Turkish Airline</p>
          <p className="bg-blue-100 text-blue-600 text-sm font-semibold px-2 m-3 rounded-lg">
            AMADEUS
          </p>
        </div>
        <button className="bg-green-500 text-black text-md font-semibold p-1 rounded-lg float-end w-[30px] truncate">
          Earn Commission
        </button>
      </div>
      <div className="bottom flex align-middle mx-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center self-start">
          <FaPlane className="text-red-500" size={24} />
        </div>
        <div className="flex flex-col items-end">
          <p className="text-2xl font-bold">18:30</p>
          <p className="text-sm text-gray-500">Murtala Muhammed (LOS)</p>
          <p className="text-sm text-gray-500">Lagos</p>
        </div>
        <div className="flex flex-col mx-4">
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
          <div className="flex justify-center items-center mt-1">
            <FaClock className="text-gray-500 mr-1" />
            <p className="text-sm text-gray-500">12h 14m</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-2xl font-bold">
            06:30
            <span className="align-super text-sm text-blue-500 font-extra-light">
              +1 day
            </span>
          </p>
          <p className="text-sm text-gray-500">London Heathrow (LHR)</p>
          <p className="text-sm text-gray-500">London</p>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
