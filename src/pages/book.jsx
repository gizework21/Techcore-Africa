import { FaClock, FaPlane } from "react-icons/fa";

const FlightBookingCard = () => {
  return (
    <div className=" bg-blue-50 rounded-[16px] shadow-lg  mx-auto py-6 pl-6">
      {/* Flight Information */}
      <div className="bg-[#E7F6FF]  shadow-md">
        {/* Airline and Flight Route */}
        <div className="flex justify-between items-center p-2 font-[700]">
          <div className="flex items-center">
            {/* Airline Logo */}
            <img
              src="https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png"
              alt="Airline Logo"
              className="size-[24px] mr-2 rounded-lg object-cover"
            />
            <span className="text-textBlack  text-[12px]">VS 411</span>
            <span className="text-textBlack ml-2  text-[12px]">LOS-LHR</span>
          </div>
          <div className="text-sm text-textBlack text-[12px]">
            <span>10:30PM - 05:25PM +1</span>
          </div>
          <span className="text-textBlack text-[12px]">06:55</span>
        </div>
      </div>

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

      {/* Booking Section */}
      <div className="text-left">
        <h3 className="text-[24px] font-bold">Book</h3>
        <p className="text-textBlack mt-2">
          Capture all relevant details from your customer in a one-step
          checkout.
        </p>
      </div>
    </div>
  );
};

export default FlightBookingCard;
