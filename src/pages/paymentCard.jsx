import Paystack from "../assets/Paystack.png";

const FlightSearchCard = () => {
  return (
    <div className=" bg-[#F0F6FC] rounded-[16px] shadow-lg py-6 pl-6 w-full">
      {/* Top Row */}

      {/* Flight Time and Details */}
      <div className="bg-white shadow-md mb-6 justify-center p-2">
        <p className="text-[14px] text-textBlack">Secured payment with</p>
        <div className="flex items-center ">
          <img
            src={Paystack}
            alt="Airline Logo"
            className="object-cover  rounded-lg"
          />

          <span className="ml-3 text-gray-500 font text-[20px]">
            **** **** **** 3920 | MM/YY CVC
          </span>
          <button className="bg-[#1E61DC] p-[6px] rounded-md w-[109px] text-white ml-12">
            Pay
          </button>
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
