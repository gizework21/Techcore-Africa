const StepsSection = () => {
  const steps = [
    {
      number: "1",
      title: "Subscribe",
      description: "Subscribe to the website plan on Intraverse.",
    },
    {
      number: "2",
      title: "Customize",
      description: "Customize every content on your website to fit your brand.",
    },
    {
      number: "3",
      title: "Start selling",
      description: "Publish to your own domain and start selling instantly.",
    },
  ];

  return (
    <div className="bg-white w-screen text-center py-[66px]">
      <h2 className="text-[24px] md:text-[36px] font-BRFirmaBold py-[8px]">
        The fastest way to sell travel
      </h2>
      <div className="flex justify-center gap-2 md:gap-8 py-[24px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start gap-[8px]"
          >
            <div className="bg-cardLightBlue size-[60px] md:size-[100px] flex justify-center items-center rounded">
              <span className="text-[16px] md:text-[24px] font-[700]">
                {step.number}
              </span>
            </div>
            <h3 className="text-[16px] md:text-[24px] font-[700]">
              {step.title}
            </h3>
            <p className="text-heroSubText text-[12px] md:text-[16px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
