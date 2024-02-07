"use client";
import React from "react";
import Price from "./components/price/Price";
import Link from "next/link";
import Status from "./components/Status";
import ImageComponent from "./components/ImageComponent";
import Title from "./components/Title";

type Product = {
  _id: {
    $oid: string
  },
  title: string,
  brandFn: string,
  brandEn: string,
  main_cat_id: {
    $oid: string
  },
  specific_cat_id: { $oid: string },
  image_url:string ,
  status: boolean,
  selling_type: string,
  price: number,
  off_percent: number,
  statistics: {
    totalRate: number,
    buyerRate: number,
    totalLike: number,
    soled: number,
    views: number
  },
  createdAt: {
    $date: string
  },
  updatedAt: {
    $date: string
  }
}
interface Props {
  product: Product;
  index: number;
}

const Product_slid_card = ({
  product: {
    title,
    status,
    selling_type,
    statistics,
    price,
    off_percent,
    image_url,
  },
  index,
}: Props) => {
  return (
    <div
      className={`relative h-full overflow-hidden bg-light_1 shadow-md transition-all duration-150 hover:scale-[1.015] hover:shadow-lg ${
        index === 0 && "rounded-br-xl rounded-tr-xl"
      }`}
    >
      <Link
        href="#"
        className=" grid h-full grid-rows-3 p-3"
      >
        <ImageComponent image_url={image_url} title={title} />
        <div className="flex h-full flex-col justify-between py-2">
          <Title title={title} />
          <Status type={selling_type} />
          {status ? (
            <Price price={price} off_percent={off_percent} />
          ) : (
            <p className="mb-3 mt-auto font-iranyekan_bold text-xl text-red-400">
              اتمام موجودی
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Product_slid_card;