import EarnMoney from "./EarnMoney";
import Travel from "./Travel";
import SalesChart from "./SalesChart";
import Footer from "./Footer";

function EasyMoney() {
  return (
    <div className="bg-[#F8F8F8] mt-16">
      <p className="font-bold text-[18px] md:text-[36px] text-center pt-16 pb-8">
        An easy to use travel booking platform
      </p>
      <Travel />
      <SalesChart />
      <div className="hidden md:block">
        <EarnMoney />
      </div>
      <Footer />
    </div>
  );
}

export default EasyMoney;
