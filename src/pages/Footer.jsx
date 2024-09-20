const ContactSection = () => {
  return (
    <div className=" bg-lightBlue rounded-lg flex flex-col md:flex-row gap-4 justify-between items-center shadow-lg p-2 md:p-[60px]">
      <div>
        <h2 className="text-2xl font-bold mb-2">Get your website today!</h2>
        <p className="text-gray-500">
          Sell flights, hotels, and tours from about the world.
        </p>
      </div>
      <div className="flex gap-4 justify-start">
        {/* Phone Number */}
        <a
          href="tel:02839082932"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          02839082932
        </a>
        {/* Email Address */}
        <a
          href="mailto:hello@test.com"
          className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-blue-200 transition-colors"
        >
          hello@test.com
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
