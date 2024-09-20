import ImageWeb from "../assets/image.PNG";

const HeroSection = () => {
  return (
    <div className="bg-black text-white w-full h-[130dvh] flex flex-col">
      <div className="h-full flex items-center">
        <div className="container mx-auto text-center space-y-[16px]">
          <h1
            className="text-3xl font-[600]  mb-4 mt-[100px] md:mt-[140px] text-[48px] md:text-[64px] text-center font-BRFirma
          "
          >
            Start selling travel today on <br />
            <span className="block mt-7"> your own website</span>
          </h1>

          <p className="text-center font-br-firma text-[16px] leading-[27.2px] text-heroSubText">
            Customize your travel website, and start selling. Let&apos;s get
            your business off the ground with our intuitive tools!
          </p>

          <button className="bg-btnBlue hover:bg-btnBlue/80 transition-colors duration-150 text-white font-semibold h-[50px] px-14 rounded-[8px] ">
            <span className="font-poppins text-[18px] font-normal leading-[18px] font-PoppinsRegular text-btnText">
              Try it now
            </span>
          </button>
        </div>
      </div>
      {/* Image below the button */}
      <img
        src={ImageWeb} // Replace with the actual image path
        alt="Website Preview"
        className="mx-auto shadow-lg rounded-lg mt-[50px]"
      />
    </div>
  );
};

export default HeroSection;
