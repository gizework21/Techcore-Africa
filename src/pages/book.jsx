import React from 'react';

const FlightBookingCard = () => {
  return (
    <div className="w-[381.33px] h-[286px] bg-blue-50 rounded-[16px] shadow-lg p-[24px_0px_24px_24px] mx-auto">
      {/* Flight Information */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        {/* Airline and Flight Route */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {/* Airline Logo */}
            <img
              src="/path-to-logo.png" // Replace with the actual path to the airline logo
              alt="Airline Logo"
              className="w-6 h-6 mr-2"
            />
            <span className="text-gray-700 font-bold">VS 411</span>
            <span className="text-gray-500 ml-2">LOS - LHR</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>10:30PM - 05:25PM +1</span>
          </div>
          <span className="text-gray-700 font-bold">06:55</span>
        </div>

        {/* Time and Additional Details */}
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

      {/* Booking Section */}
      <div className="text-left">
        <h3 className="text-xl font-semibold">Book</h3>
        <p className="text-gray-500 mt-2">
          Capture all relevant details from your customer in a one-step checkout.
        </p>
      </div>
    </div>
  );
};

export default FlightBookingCard;
