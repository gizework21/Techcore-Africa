
import React from 'react';
import ReactDOM from 'react-dom';
import BarChartCard from './BarChartCard'; // Ensure this path is correct
import FocusOnText from './FocusOnText'; // Ensure this path is correct

const FocusOnWhatMatters = () => {
  return (
    <div className="flex justify-between w-[1200px] h-[475px] gap-8 bg-[#F8F8F8] mt-50">
      <BarChartCard />
      <FocusOnText />
    </div>
  );
};

export default FocusOnWhatMatters
