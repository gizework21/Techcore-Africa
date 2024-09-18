import React from "react";
import { FaCheck } from "react-icons/fa"; 

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-10 bg-gray-300 flex items-center justify-center rounded-full">
          {/* Centered logo in a circle */}
          <img src="/logo.jpg" alt="Logo" className="w-16 h-8 object-cover" />
        </div>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Flight
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Stays
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Tours
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Help
        </a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          My Account
        </button>
      </div>
    </nav>
  );
};

// Custom Section (Text + Image on Left Side)
const CustomSection = () => {
  return (
    <div className="h-full flex items-center justify-center bg-white">
      <div className="w-full p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Customize every content on your website
        </h1>
        <p className="text-lg text-gray-600">
          Offer your customer a seamless travel booking experience, customized
          to your brand.
        </p>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex h-screen">
        {/* Left Section (Custom Section) */}
        <div className="w-1/2">
          <CustomSection />
        </div>

        {/* Right Section (Navigation and Content) */}
        <div className="w-1/2 p-6 bg-[#E7F6FF] rou">
          {/* Navigation Buttons */}
          <div className="grid grid-cols-4 justify-center mb-4">
            <button className="bg-white text-[#2E2E32] font-semibold  py-3 rounded-[8px] shadow hover:bg-blue-600 hover:text-white  w-[137px] ml-20">
              Hero Section
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold  py-3  rounded-[8px] shadow hover:bg-blue-600 hover:text-white   w-[110px] ml-20">
              About Us
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold  py-3  rounded-[8px] shadow hover:bg-blue-600 hover:text-white  w-[87px] ml-[50px]">
              Tours
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold  py-3  rounded-[8px] shadow hover:bg-blue-600 hover:text-white  w-[94px] mr-30">
              Flights
            </button>
          </div>

          {/* Second Row (5 Buttons) */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <button className="bg-blue-600 text-[#2E2E32] font-semibold px-4 py-2  rounded-[8px] shadow  hover:bg-blue-600  hover:text-white h-[46px] w-[126px] ml-4">
              Navigation
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold px-4 py-2  rounded-[8px] shadow  hover:bg-blue-600 hover:text-white h-[46px] w-[92px] ml-8">
              Hotels
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold px-4 py-2  rounded-[8px] shadow  hover:bg-blue-600 hover:text-white h-[46px] w-[83px] ml-5">
              Chat
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold px-4 py-2  rounded-[8px] shadow  hover:bg-blue-600 hover:text-white h-[46px] w-[126px]">
              Contact Us
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold px-4 py-2  rounded-[8px] shadow  hover:bg-blue-600 hover:text-white h-[46px] w-[84px] ml-5">
              FAQs
            </button>
          </div>

          <div className="grid grid-cols-4 justify-center mb-4">
            <button className="bg-white text-[#2E2E32] font-semibold  py-3 rounded-[8px] shadow hover:bg-blue-600 w-[137px] ml-20">
              Listing Style
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold  py-3  rounded-[8px] shadow hover:bg-blue-600  w-[93px] ml-20">
              Footer
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold  py-3  rounded-[8px] shadow hover:bg-blue-600 w-[149px] ml-[35px]">
            Search Engine
            </button>
            <button className="bg-white text-[#2E2E32] font-semibold  py-3  rounded-[8px] shadow hover:bg-blue-600 w-[94px] ml-12">
              Flights
            </button>
          </div>

          {/* First Row - Without Image, Rounded Gray Center */}
          <div className="bg-gray-300 mt-8 shadow-lg rounded-xl p-4 mb-8 border-blue-500 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-4">
              {/* Gray Circle placed outside the white background */}
              <div className="w-5 h-5 bg-gray-400 flex items-center justify-center rounded-full">
                {/* Empty circle */}
              </div>

              {/* White background container for the rest of the content */}
              <div className="bg-white flex justify-between items-center w-full px-4 py-2 rounded">
                {/* Left side with links */}
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Flight
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Stays
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Tours
                  </a>
                </div>

                {/* Centered Logo */}
                <div className="flex justify-center items-center">
                  <div className="w-20 h-8 bg-gray-400 flex items-center justify-center">
                    Logo
                  </div>
                </div>

                {/* Right side with Help and My Account */}
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Help
                  </a>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    My Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 shadow-lg rounded-xl p-4 mb-8 over:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-4">
              {/* Gray Circle placed outside the white background */}
              <div className="w-5 h-5 bg-gray-400 flex items-center justify-center rounded-full">
                {/* Empty circle */}
              </div>

              {/* White background container for the rest of the content */}
              <div className="bg-white flex justify-between items-center w-full px-4 py-2 rounded">
                {/* Left side with links */}
                {/* Centered Logo */}
                <div className="flex justify-center items-center">
                  <div className="w-20 h-8 bg-gray-400 flex items-center justify-center">
                    Logo
                  </div>
                </div>

                <div className="bg-gray-200 py-2 px-1 flex items-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Flight
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Stays
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Tours
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Help
                  </a>
                </div>

                {/* Right side with Help and My Account */}
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    My Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Rows Remain Unchanged */}
          <div className="bg-white shadow-lg rounded p-4 mb-8 flex justify-between items-center border border-blue-500 hover:shadow-2xl transition-shadow">
            <FaCheck className="text-white bg-gray-400 rounded" />

            <div className="w-20 h-10 bg-gray-300 flex items-center justify-center rounded relative">
              Logo
            </div>

            {/* Center section with links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Flight
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Stays
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Tours
              </a>
            </div>

            {/* Right side with My Account button */}
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                My Account
              </button>
            </div>
          </div>

          <div className="bg-gray-300 shadow-lg rounded-xl p-4 mb-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-4">
              {/* Gray Circle placed outside the white background */}
              <div className="w-8 h-5 bg-gray-400 flex items-center justify-center rounded-full">
                {/* Empty circle */}
              </div>

              {/* White background container for the rest of the content */}
              <div className="bg-white flex justify-between items-center w-full px-4 py-2 rounded">
                {/* Left side with links */}
                {/* Centered Logo */}
                <div className="flex justify-center items-center">
                  <div className="w-20 h-8 bg-gray-400 flex items-center justify-center">
                    Logo
                  </div>
                </div>

                {/* Right side with Help and My Account */}
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Flight
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Stays
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Tours
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Help
                </a>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
