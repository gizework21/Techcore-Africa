import React from "react";

const FlightSearchCard = () => {
  return (
    <div className="w-[586px] h-[250px] bg-[#F0F6FC] rounded-[16px] shadow-lg p-[24px_0px_24px_24px] ml-8">
      {/* Top Row */}

      {/* Flight Time and Details */}
      <div className="bg-white w-[562px] h-[113px] shadow-md mb-6 justify-center">
        <div className="flex items-center pt-8">
          <img
            src="https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png"
            alt="Airline Logo"
            className="w-6 h-6 mr-2  rounded-lg"
          />
          <span className="-ml-2 text-gray-950 font-bold text-[15px]">
          00:10 - 06:40
          </span>
          <span className="ml-3 text-gray-500 font-bold text-[17px]">
          TK490390, AP109302 | ₦8,500,400
          </span>
          <button className="bg-[#1E61DC] p-[6px] rounded-md w-[109px] text-white ml-12">
            Issue Ticket
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="text-left">
        <h3 className="text-xl font-sans font-bold">Order Management</h3>
        <p className="text-blue-600 mt-2">
      <a href="#">   Register interest today... </a>
        </p>
      </div>
    </div>
  );
};

export default FlightSearchCard;
