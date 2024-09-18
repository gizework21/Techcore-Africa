import React from 'react';

const FlightSearchCard = () => {
  return (
    <div className="w-[586px] h-[250px] bg-[#F0F6FC] rounded-[16px] shadow-lg p-[24px_0px_24px_24px] ml-8">
      {/* Top Row */}
    

      {/* Flight Time and Details */}
      <div className="bg-white p-4  shadow-md mb-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold">10:30</span>
          <span className="ml-4 text-gray-600">Murtala Muhammed (LOS) Lagos</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-500">1 stop</span>
          <span className="text-gray-500 text-sm flex items-center">
            <i className="material-icons text-xs mr-1">schedule</i>
            12h 14m
          </span>
        </div>
      </div>

      {/* Search Section */}
      <div className="text-left">
        <h3 className="text-xl font-sans font-bold">Payments</h3>
        <p className="text-gray-500 mt-2">
        Take payments securely from your customers using our payments.
        </p>
      </div>
    </div>
  );
};

export default FlightSearchCard;
