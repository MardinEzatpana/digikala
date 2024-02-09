import React from "react";
import Prod_price from "../../../../Util/components/Prod_price";

interface Props {
  price: number;
  offPercent: number;
  product_id: string;
}

const Prod_order_form = async ({ price, offPercent }: Props) => {
  
  return (
    <div className="fixed bottom-0 right-0 z-40 w-full bg-slate-100 p-4 px-8 lg:static lg:bg-transparent lg:p-0">
      <div className="flex flex-row-reverse justify-between font-iransansnum lg:flex-col lg:items-end">
        <Prod_price offPercent={offPercent} price={price} />
      </div>
    </div>
  );
};

export default Prod_order_form;
