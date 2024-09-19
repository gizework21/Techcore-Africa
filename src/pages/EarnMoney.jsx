import React, { useEffect, useState } from "react";
import FlightInfo from "../components/FlightInfo";
import TourCard from "../components/TourCard";
import RoomCard from "../components/RoomCard";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Replace with your actual API endpoint for tours and rooms
        const toursResponse = await fetch("/data/tours.json");
        const hotelsResponse = await fetch("/data/hotels.json");
        
        const toursData = await toursResponse.json(); 
        const hotelsData = await hotelsResponse.json(); 

        setTours(toursData);
        setHotels(hotelsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




  return (
    <div className="grid grid-cols-2 gap-4 p-24 mt-32">
      <div className=" flex flex-col align-middle justify-center">
        <h1 className="font-bold text-2xl antialiased">Earn more money</h1>
        <p className=" text-gray-400 w-full">
          Take control of the entire travel experience. Effortlessly add markups
          to all travel products using our user-friendly dashboard. Upsell your
          customers with accommodations, things to do, and insurance products.
        </p>
      </div>
      <div>
        <div className="bg-[#E7F6FF] p-6 ">
          <FlightInfo />
          {tours.map((tour, index) => (
          <TourCard
          images={tour.image} // Pass the images array
          title={tour.title}
          refundable={tour.refundable}
          mobileVoucher={tour.mobileVoucher}
          rating={tour.rating}
          reviews={tour.reviews}
          />
        ))}
        {hotels.map((hotel, index) =>(
          <RoomCard
            image={hotel?.image}
            title={hotel?.title}
            rating={hotel?.rating}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
