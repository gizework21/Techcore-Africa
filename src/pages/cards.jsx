import React from "react";
import Book from "./book";
import SearchCards from "./SearchCards";
import PaymentCard from "./paymentCard";
import OrdermanagementCard from "./ordermangementCard";

function cards() {
  return (
    <>
      <p class="font-brfirma font-normal text-[36px] leading-[46.8px] text-center mt-9 mb-4">
        Everything you need, in one link.
      </p>
      <div className="grid gap-x-0 gap-y-4 grid-cols-3">
        <SearchCards />
        <Book />
        <Book />
      </div>
      <div className="grid  gap-y-4 grid-cols-2 mt-5 text-center">
        <PaymentCard />
        <OrdermanagementCard />
      </div>
    </>
  );
}

export default cards;
