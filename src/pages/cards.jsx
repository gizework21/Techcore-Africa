import Book from "./book";
import SearchCards from "./SearchCards";
import PaymentCard from "./paymentCard";
import OrdermanagementCard from "./ordermangementCard";
import AncillariesCard from "./AncillariesCard";

function Cards() {
  return (
    <div className="w-screen flex items-center justify-center bg-white">
      <div className="container w-full">
        <p className="font-brfirma font-normal text-2xl md:text-[36px] leading-tight md:leading-[46.8px] text-center mt-6 md:mt-9 mb-4">
          Everything you need, in one link.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <SearchCards />
          <Book />
          <AncillariesCard />
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-4 w-full mb-14 ">
          <PaymentCard />
          <OrdermanagementCard />
        </div>
      </div>
    </div>
  );
}

export default Cards;
