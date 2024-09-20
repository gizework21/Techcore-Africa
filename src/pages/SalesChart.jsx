import BarChartCard from "./BarChartCard"; // Ensure this path is correct
import FocusOnText from "./FocusOnText"; // Ensure this path is correct

const FocusOnWhatMatters = () => {
  return (
    <div className="flex justify-between  flex-col lg:flex-row gap-8 bg-[#F8F8F8] mt-32 px-2">
      <BarChartCard />
      <FocusOnText />
    </div>
  );
};

export default FocusOnWhatMatters;
