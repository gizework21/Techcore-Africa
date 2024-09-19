import React from 'react';

const FlightSearchCard = () => {
  return (
    <div className="w-[586px] h-[250px] bg-[#F0F6FC] rounded-[16px] shadow-lg p-[24px_0px_24px_24px] ml-8">
      {/* Top Row */}

      {/* Flight Time and Details */}
      <div className="bg-white w-[562px] h-[113px] shadow-md mb-6 justify-center">
        <div className="flex items-center pt-8">
        <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8JpdsAntkAoNkAotp/xOiJzOv5/f5uweZruOKW0e2Hxuj0+v2SzOoAnNi63vHI5/VKsN/S6fXs9/yr1+6w3PFTteEnq97a7vjh8Pk9rN5/y+uk1/DB4/Rsveae0ewHBz9EAAACLElEQVR4nO3c63KaUBSGYfYBoUaRgwE1oPd/l7Gk01+dqcKsr7vmfa4g7zDGvRY7yTIAAAAAAAAAAAAAAAAA31X3Xv6wk7/vhC1171wMVqJzTatrGYKzFYaTqKXLvXHLvabsNDGtecrPmrMm5mD/YJyrRJ+aQ6WIqYkhhhhiiCGGmKRiplc6zkgOmlF00HypESCrL+bD2UU4al4qbzY1h+CrRvTxnxXTprTzMRXCFgB4Ed34llv7OGhapt5Fe8NVsT9vh2h8nJnFeLX/8uxK66PZb1vzGMkIMAv2j0aya57F3vzNhmRs/oqxf+lEDDHEEEMMMcQ8SLJr/oqxP87oDpqCGaDLZSPAaN1yfzSNpsaXglGzqPvKm6uqjeZNwK7ebqyNZ+UVOgDfVmFHXHIeN2927r+VhS1T7wzfz4bget0LWvtdc9TdaxbsmnX3mhXvAPxL3WvmihYxxBBDDDHEEPOfx3Cv+XmKXbPPVRtA+11zaFTDWVa012C5bK7CtRVuNbp63NoZa9Xd+V8MN03yXROAJxW7Bf71D/1np+N+yRL5NqXXU0z9wv+gMezF3yB/Vy/eNce4TezZrNk1R6f7Y7KHrBoB/C2t7/dVu2bd3yw+ZtWkSYwhYogRIIYYAWKSjVl1nJGtKh/TDiti/JjWQXPNrjkOiY0A2WnxrjnExB7MXVvGBSvk4ENzTOsTM+vq4/55t8MpuecyW7JqSrMEAAAAAAAAAAAAAACk6BOEn1k0snIQ2wAAAABJRU5ErkJggg=="
              alt="Airline Logo"
              className="w-6 h-9 mr-2  rounded-lg"
            />
          <span className="-ml-2 text-gray-950 font-bold text-[20px]">paystack</span>
          <span className="ml-3 text-gray-500 font text-[20px]">**** **** **** 3920 | MM/YY CVC</span>
          <button className='bg-[#1E61DC] p-[6px] rounded-md w-[109px] text-white ml-12'>Pay</button>
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
