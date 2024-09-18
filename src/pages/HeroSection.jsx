import React from "react";
import ImageWeb from "../assets/image.PNG";

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-12 h-[822px]">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold  mb-4 mt-[140px] text-[64px] text-center">
          Start selling travel today on <br />
          <span className="block mt-7">
            {" "}
            your own website
          </span>
        </h1>

        <p className="mb-8 text-center font-br-firma text-[16px] font-normal leading-[27.2px] mt-8">
          Customize your travel website, and start selling. Let's get your
          business off the ground with our intuitive tools!
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold pt-4 pr-6 pb-4 pl-6 w-[250px] h-[50px] rounded-[8px] mb-8 -mt-2">
          <span className="font-poppins text-[18px] font-normal leading-[18px]">
            Try it now
          </span>
        </button>

        {/* Image below the button */}
        <img
          src={ImageWeb} // Replace with the actual image path
          alt="Website Preview"
          className="mx-auto shadow-lg rounded-lg mt-[50px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
