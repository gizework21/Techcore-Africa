import CardImg from "../assets/svg/card.svg";

const FlightBookingCard = () => {
  return (
    <div className=" bg-[#F0F6FC] rounded-[16px] shadow-lg py-6 pl-6 mx-auto">
      {/* Flight Information */}
      <div className="bg-[#E7F6FF]  shadow-md ">
        {/* Airline and Flight Route */}
        <div className="items-center p-2 font-[700] text-[12px]">
          <div className="flex items-center justify-between">
            {/* Airline Logo */}
            <div className="bg-btnBlue text-white rounded-[2px] px-1">
              Select Seat
            </div>
            <span>VS 411</span>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png"
              alt="Airline Logo"
              className="size-[15px] rounded-lg object-cover"
            />
            <span className="h-3 w-[70px] bg-[#D6DEE6] rounded-full ml-3"></span>
            <span className="h-3 w-[40px] bg-[#D6DEE6] rounded-full ml-3"></span>
            <span className="h-3 w-[20px] bg-[#D6DEE6] rounded-full ml-1"></span>
            <span className="h-3 w-[40px] bg-[#D6DEE6] rounded-full ml-1"></span>
          </div>
        </div>
      </div>

      <img
        src={CardImg}
        alt="card"
        className="w-full object-cover bg-white py-3 shadow-md mb-6"
      />

      {/* Booking Section */}
      <div className="text-left">
        <h3 className="text-xl font-semibold">Ancillaries</h3>
        <p className="text-gray-500 mt-2">
          Let your customers book premium sears and pay for additional baggage.
        </p>
      </div>
    </div>
  );
};

export default FlightBookingCard;
