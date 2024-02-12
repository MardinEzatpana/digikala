/* eslint-disable @next/next/no-img-element */
"use server";

import React from "react";
import Link from "next/link";
import HelpIcon from "../../ui/icons/helpIcon";
import CartIcon from "../../ui/icons/CartIcon"
import Search from "./components/Search";
import Log from "./components/Log";
import NavbarLinks from "./components/NavbarLinks";
import Mobile_menu from "./components/Mobile_menu/Mobile_menu";
import { CatsMenu } from "./components/CatsMenu";
import { MainCatsWithSpecificCats } from "@/types_validation/type";
import { prisma } from "@/lib/db/prisma";


const Header = async () => {
  const cats: MainCatsWithSpecificCats[] = await prisma.main_cat.findMany({
    include: { Specific_cat: true },
  });
  
  return (
    <header>
      <Link href={"/"}>
          <img
            src="/image/nav-top.webp"
            className="h-[6rem] w-full pb-4 object-cover"
            alt=""
          />
        </Link>
      <div className="px-4 pb-4">
        <div className="mb-3 md:flex md:gap-6">
          <div className="flex items-center justify-between">
          <Mobile_menu cats={cats}/>
          <Link href={"/"}>
              <img
                src="/image/logo.png"
                className="h-[3rem] w-[12rem] "
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
          <CatsMenu mainCats={cats} />
          <NavbarLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
