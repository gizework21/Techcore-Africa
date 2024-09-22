import React, { useState } from 'react';

const TourSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    alert(`Searching for tours in ${searchTerm} on ${date}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-2 shadow-md rounded-lg">
        <div className="flex flex-col gap-4">
        <label className='text-[18px] font-bold'>Search for Tours</label>
        <label className='text-[#818083]'>Search for a place or activity</label>
          <input
            type="text"
            placeholder="e.g., Lagos, Nigeria"
            className="border -mt-3 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <lable className="text-[#818083]">when</lable>
          <input
            type="date"
            className="border -mt-3 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleSearch}
          >
            Search for tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourSearch;
