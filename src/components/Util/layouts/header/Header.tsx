"use server";

import React, { cache } from "react";
import Link from "next/link";
import LogoIcon from "../../ui/icons/LogoIcon";
import HelpIcon from "../../ui/icons/helpIcon";
import CartIcon from "../../ui/icons/CartIcon"
import Search from "./components/Search";
import Log from "./components/Log";
import NavbarLinks from "./components/NavbarLinks";


const Header = () => {
  

  return (
    <header>
      <div className="px-4 pb-4">
        <div className="mb-3 md:flex md:gap-6">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <LogoIcon classes="h-[6rem] w-[12rem] fill-g1_7" />
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
          <div className="flex items-center gap-3">
          <h1 className="font-bold text-lg cursor-pointer">نوشیدنی ها</h1>
          <h1 className="font-bold text-lg cursor-pointer">ابزار تهیه نوشیدنی</h1>
          </div>
          <NavbarLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
