"use server";

import React from "react";
import Link from "next/link";
import HelpIcon from "../../ui/icons/helpIcon";
import CartIcon from "../../ui/icons/CartIcon"
import NavTop from "@/assets/images/nav-top.webp"
import LogoDG from "@/assets/images/logo.png"
import Search from "./components/Search";
import Log from "./components/Log";
import NavbarLinks from "./components/NavbarLinks";
import product_main_categories from "@/assets/json/product_main_categories.json"
import Mobile_menu from "./components/Mobile_menu/Mobile_menu";
import Image from "next/image";
import { CatsMenu } from "./components/CatsMenu";


const Header = () => {
  
  return (
    <header>
      <Link href={"/"}>
          <Image
            src={NavTop}
            height={96}
            className="h-[6rem] w-full pb-4 object-cover"
            priority
            alt=""
          />
        </Link>
      <div className="px-4 pb-4">
        <div className="mb-3 md:flex md:gap-6">
          <div className="flex items-center justify-between">
          <Mobile_menu cats={product_main_categories}/>
          <Link href={"/"}>
              <Image
                src={LogoDG}
                width={192}
                height={46}
                className="h-[3rem] w-[12rem] "
                priority
                alt=""
              />
            </Link>
            <HelpIcon classes="h-10 w-10 md:hidden" />
          </div>
          <div className="flex items-center justify-between gap-4 md:grow">
            <Search />
            <div className="flex items-stretch gap-5">
              <Log />
              <span className=" w-1 border-l"></span>
              <CartIcon classes="h-9 w-9 fill-dark_4 mt-3" />
            </div>
          </div>
        </div>
        <div className="text-g1 hidden border-b-g1_7 md:flex md:gap-2">
          <CatsMenu mainCats={product_main_categories} />
          <NavbarLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
