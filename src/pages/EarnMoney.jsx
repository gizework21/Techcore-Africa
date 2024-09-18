
import React from "react";
import FlightInfo from "../components/FlightInfo";
import TourCard from "../components/TourCard";
import RoomCard from "../components/RoomCard";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-24">
      <div className=" flex flex-col align-middle justify-center">
        <h1 className="font-bold text-2xl antialiased">Earn more money</h1>
        <p className=" text-gray-400 w-full">
          Take control of the entire travel experience. Effortlessly add markups
          to all travel products using our user-friendly dashboard. Upsell your
          customers with accommodations, things to do, and insurance products.
        </p>
      </div>
      <div>
        <div className="bg-gray-200 p-6 ">
          <FlightInfo />
          <TourCard
            image="https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg"
            title="Official National Gallery Highlights Guided Tour"
            refundable={true}
            mobileVoucher={true}
            rating="4.5/5"
            reviews="532"
          />
          <RoomCard
            image="https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg"
            title="Room two, 2 Twin Beds (Runway View, High Floor)"
            rating="8.7/10 Wonderful"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
