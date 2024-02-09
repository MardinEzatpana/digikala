import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product_cat: string;
  product_title: string;
}

const Header = ({ product_title, product_cat }: Props) => {
  return (
    <div className="flex items-center gap-2 pb-4 flex-wrap">
      <div>
        <p className="flex gap-2 pb-3">
          <span className="text-xl text-cyan-300">/</span>
          <Link
            href={`#`}
            className="text-xl text-cyan-500 font-iranyekan_bold"
          >
            {product_cat}
          </Link>
        </p>
        <h1 className="text-3xl">{product_title}</h1>
      </div>
    </div>
  );
};

export default Header;
