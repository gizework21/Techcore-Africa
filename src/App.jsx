import HeroSection from "./pages/HeroSection";

import StepsSection from "./pages/StepSection";
import Cards from "./pages/cards";
import EarnMoneySection from "./pages/EasyMoney";
import SearchTour from "./pages/searchTour"

function App() {
  return (
      <div className="overflow-x-hidden">
    {/* <div className="flex flex-col items-center w-screen">
      <HeroSection />
      <div className="container flex flex-col items-center justify-center">
        <StepsSection />
        <Cards />
        <EarnMoneySection />
      </div>
    </div> */}


    <SearchTour />


    </div>
  );
}

export default App;
