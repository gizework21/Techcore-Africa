import Image from "../assets/svg/order.svg";

const FlightSearchCard = () => {
  return (
    <div className="bg-[#F0F6FC] rounded-[16px] shadow-lg py-6 pl-6 w-full mt-4">
      {/* Top Row */}

      {/* Flight Time and Details */}
      <div className="bg-white shadow-md mb-6 p-2">
        <p className="text-[14px] text-textBlack">Order</p>

        <div className="flex items-center  justify-between gap-2 py-3">
          <img
            src={Image}
            alt="Airline Logo"
            className="w-[40px]  rounded-lg"
          />
          <span className=" text-textBlack font-[700] text-[16px]">
            00:10 - 06:40
          </span>
          <span className="text-[#818083] font-[700] text-[16px]">
            TK490390, AP109302 |{" "}
            <span className="text-[12px]"> ₦8,500,400</span>
          </span>
          <button className="bg-[#1E61DC] p-[6px] rounded-md w-[109px] text-white">
            Issue Ticket
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="text-left">
        <h3 className="text-xl font-sans font-bold">Order Management</h3>
        <p className="text-blue-600 mt-2">
          <a href="#"> Register interest today... </a>
        </p>
      </div>
    </div>
  );
};

export default FlightSearchCard;
