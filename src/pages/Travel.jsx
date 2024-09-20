import { FaCheck } from "react-icons/fa";
import { Button } from "../components/Button";

const btns1 = [
  {
    title: "Listing Style",
    isActive: false,
  },
  {
    title: "Footer",
    isActive: false,
  },
  {
    title: "Search Engine",
    isActive: false,
  },
  {
    title: "ETC",
    isActive: false,
  },
];
const btns = [
  {
    title: "Hero Section",
    isActive: false,
  },
  {
    title: "About Us",
    isActive: false,
  },
  {
    title: "Tours",
    isActive: false,
  },
  {
    title: "Flights",
    isActive: false,
  },
];
const btns2 = [
  {
    title: "Navigation",
    isActive: true,
  },
  {
    title: "Hotels",
    isActive: false,
  },
  {
    title: "Chat",
    isActive: false,
  },
  {
    title: "Contact Us",
    isActive: false,
  },
  {
    title: "FAQs",
    isActive: false,
  },
];

// Custom Section (Text + Image on Left Side)
const CustomSection = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full p-6">
        <h1 className="text-[18px] md:text-[30px] font-bold text-textBlack mb-4">
          Customize every content on your website
        </h1>
        <p className="text-lg text-textBlack">
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
    <div className="flex flex-col md:flex-row h-full items-center">
      {/* Left Section (Custom Section) */}
      <CustomSection />

      {/* Right Section (Navigation and Content) */}
      <div className="md:p-6 bg-[#E7F6FF] rounded flex flex-col items-center">
        <div className="space-y-6 py-4">
          {/* Navigation Buttons */}
          <div className="flex w-full justify-center flex-wrap items-center gap-3 md:gap-6 ">
            {btns.map((btn) => (
              <Button
                isActive={btn.isActive}
                key={btn.title}
                title={btn.title}
              />
            ))}
          </div>
          <div className="flex w-full justify-center flex-wrap items-center gap-0 md:gap-6 ">
            {btns2.map((btn) => (
              <Button
                isActive={btn.isActive}
                key={btn.title}
                title={btn.title}
              />
            ))}
          </div>

          <div className="flex w-full justify-center flex-wrap items-center gap-2 md:gap-6 ">
            {btns1.map((btn) => (
              <Button
                isActive={btn.isActive}
                key={btn.title}
                title={btn.title}
              />
            ))}
          </div>
        </div>

        {/* First Row - Without Image, Rounded Gray Center */}
        <div className="bg-white py-1 md:px-2 rounded-[8px]">
          <div className="bg-gray-300 mt-8 shadow-lg rounded-xl p-4 mb-8 border-blue-500 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Gray Circle placed outside the white background */}
              <div className="hidden w-5 h-5 bg-gray-400 md:flex items-center justify-center rounded-full">
                {/* Empty circle */}
              </div>
              {/* White background container for the rest of the content */}
              <div className="bg-white flex justify-between items-center w-full px-2 md:px-4 py-2 rounded">
                {/* Left side with links */}
                <div className="flex items-center space-x-2 md:space-x-4">
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
                <div className="hidden md:flex justify-center items-center">
                  <div className="w-20 h-8 bg-gray-400 flex items-center justify-center">
                    Logo
                  </div>
                </div>
                {/* Right side with Help and My Account */}
                <div className="flex items-center space-x-2 md:space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Help
                  </a>
                  <button className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded hover:bg-btnBlue/80">
                    My Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 shadow-lg rounded-xl p-4 mb-8 over:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Gray Circle placed outside the white background */}
              <div className="hidden w-5 h-5 bg-gray-400 md:flex items-center justify-center rounded-full">
                {/* Empty circle */}
              </div>
              {/* White background container for the rest of the content */}
              <div className="bg-white flex justify-between items-center w-full px-2 md:px-4 py-2 rounded">
                {/* Left side with links */}
                {/* Centered Logo */}
                <div className="hidden md:flex justify-center items-center">
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
                <div className="flex items-center space-x-2 md:space-x-4">
                  <button className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded hover:bg-btnBlue/80">
                    My Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Other Rows Remain Unchanged */}
          <div className="bg-white shadow-lg rounded p-4 mb-8 flex justify-between items-center border border-blue-500 hover:shadow-2xl transition-shadow">
            <FaCheck className="hidden md:block text-white bg-gray-400 rounded" />
            <div className="hidden w-20 h-10 bg-gray-300 md:flex items-center justify-center rounded relative">
              Logo
            </div>
            {/* Center section with links */}
            <div className="flex items-center space-x-2 md:space-x-4">
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-btnBlue/80">
                My Account
              </button>
            </div>
          </div>
          <div className="bg-gray-300 shadow-lg rounded-xl p-4 mb-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Gray Circle placed outside the white background */}
              <div className="hidden w-8 h-5 bg-gray-400 md:flex items-center justify-center rounded-full">
                {/* Empty circle */}
              </div>
              {/* White background container for the rest of the content */}
              <div className="bg-white flex justify-between items-center w-full px-2 md:px-4 py-2 rounded">
                {/* Left side with links */}
                {/* Centered Logo */}
                <div className="hidden md:flex justify-center items-center">
                  <div className="w-20 h-8 bg-gray-400 flex items-center justify-center">
                    Logo
                  </div>
                </div>
                {/* Right side with Help and My Account */}
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-btnBlue/80">
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
