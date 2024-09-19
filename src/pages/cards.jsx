import React from "react";
import Book from "./book";
import SearchCards from "./SearchCards";
import PaymentCard from "./paymentCard";
import OrdermanagementCard from "./ordermangementCard";
import AncillariesCard from "./AncillariesCard";

function Cards() {
  return (
    <>
      <p className="font-brfirma font-normal text-2xl md:text-[36px] leading-tight md:leading-[46.8px] text-center mt-6 md:mt-9 mb-4">
        Everything you need, in one link.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <SearchCards />
        <Book />
        <AncillariesCard />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 text-center">
        <PaymentCard />
        <OrdermanagementCard />
      </div>
    </>
  );
}

export default Cards;