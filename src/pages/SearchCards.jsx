import { FaClock, FaPlane } from "react-icons/fa";
import DownIcon from "../assets/svg/down.svg";
import DownIconWhite from "../assets/svg/down-white.svg";

const FlightSearchCard = () => {
  return (
    <div className=" bg-[#F0F6FC] rounded-[16px] shadow-lg py-6 pl-6 mx-auto">
      {/* Top Row */}
      <div className="flex justify-between items-center bg-[#E7F6FF] text-[12px] font-[700] p-2">
        <button className="bg-[#E7F6FF] text-textBlack  px-2 py-1 flex items-center">
          <p>Return</p>
          <img src={DownIcon} alt="down icon" className="ml-1" />
        </button>
        <button className="bg-btnBlue text-white rounded-[2px] px-3 py-1 flex items-center">
          <p>Select Seat</p>
          <img src={DownIconWhite} alt="down icon" className="ml-1" />
        </button>
        <button className="bg-white text-textBlack rounded-[2px] px-2  py-1 flex items-center">
          <p>1 stop</p>
          <img src={DownIcon} alt="down icon" className="ml-1" />
        </button>
        <button className="bg-white text-textBlack rounded-[2px] px-2 py-1 mr-4">
          Airline
        </button>
      </div>

      {/* Flight Time and Details */}
      <div className="bg-white p-4 shadow-md mb-6 ">
        <div className="flex items-center gap-2 justify-end">
          <span className="text-[16px]  font-[700] text-textBlack">10:30</span>
          <div className="flex">
            <span className="border-2 border-line w-2 h-2 rounded-full  self-center"></span>
            <span className="border border-line w-6 self-center"></span>
            <div className="flex justify-center items-center bg-cardBgWhite rounded-full p-1 w-fit">
              <FaPlane className="text-btnBlue mr-1" />
              <p className="text-btnBlue truncate">1 stop</p>
            </div>
            <span className="border border-line w-6  self-center"></span>
            <span className="border-2 border-line w-2 h-2 rounded-full  self-center"></span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-[#818083] text-[12px]">
            Murtala Muhammed (LOS) Lagos
          </span>
          <div className="flex justify-center items-center mt-1">
            <FaClock className="text-black mr-1 " />
            <p className="text-sm text-textBlack">12h 14m</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="text-left">
        <h3 className="text-[24px] font-bold">Search</h3>
        <p className="text-textBlack mt-2">
          Make searching flights an intuitive experience for your customers.
        </p>
      </div>
    </div>
  );
};

export default FlightSearchCard;
