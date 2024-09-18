import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">Everything you need, in one link.</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
        
        {/* Search Card */}
        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Search</h3>
          <p className="text-gray-600 mb-6">
            Make searching flights an intuitive experience for your customers.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Flight search example UI */}
            <div className="flex justify-between mb-2">
              <button className="bg-blue-500 text-white py-1 px-4 rounded">Return</button>
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded">Select Seat</button>
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded">1 stop</button>
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded">Airline</button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">10:30</p>
              <p className="text-sm">Murtala Mohammed (LOS) Lagos</p>
              <p className="text-sm">13h 14m</p>
            </div>
          </div>
        </div>

        {/* Book Card */}
        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Book</h3>
          <p className="text-gray-600 mb-6">
            Capture all relevant details from your customer in a one-step checkout.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Booking example UI */}
            <div className="flex justify-between items-center">
              <p className="text-sm">VS 411</p>
              <p className="text-sm">LOS - LHR</p>
              <p className="text-sm">10:30 PM - 05:25 PM</p>
            </div>
          </div>
        </div>

        {/* Ancillaries Card */}
        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Ancillaries</h3>
          <p className="text-gray-600 mb-6">
            Let your customers book premium seats and pay for additional baggage.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Ancillaries example UI */}
            <div className="flex justify-between">
              <span className="text-sm">Baggage</span>
              <span className="text-sm">Seats</span>
              <span className="text-sm">Meals</span>
            </div>
          </div>
        </div>

        {/* Payments Card */}
        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Payments</h3>
          <p className="text-gray-600 mb-6">
            Take payments securely from your customers using our payments.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Payments example UI */}
            <p className="text-sm mb-2">Secured payment with</p>
            <div className="flex justify-between items-center">
              <img src="paystack-logo.png" alt="Paystack" className="w-24" />
              <button className="bg-blue-500 text-white py-1 px-4 rounded">Pay</button>
            </div>
          </div>
        </div>

        {/* Order Management Card */}
        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Order Management</h3>
          <p className="text-gray-600 mb-6">
            Manage your orders easily. 
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Order management example UI */}
            <div className="flex justify-between">
              <p className="text-sm">Order 0010 - 06:40</p>
              <p className="text-sm">TK490390</p>
            </div>
            <a href="#" className="text-blue-500 underline">Register interest today...</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;
