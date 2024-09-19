import HeroSection from "./pages/HeroSection"
import SalesChart from "./pages/SalesChart"
import StepsSection from "./pages/StepSection"
import Cards from "./pages/cards"
import Travel from "./pages/Travel"
import EarnMoney from "./pages/EarnMoney"
import EarnMoneySection from "./pages/EasyMoney"

function App() {

  return (
    <>
      <div>
     <HeroSection /> 
     <StepsSection />
     <Cards />

     {/* <Travel /> */}

     {/* <SalesChart /> */}
     {/* <EarnMoney /> */}
     <EarnMoneySection />
      </div>
  </>
  )
}

export default App
