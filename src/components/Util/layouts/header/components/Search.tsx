"use client";
import React from "react";
import SearchIcon from "@/components/Util/ui/icons/SearchIcon";

const Search = () => {

  return (
    <form className="relative grow md:max-w-[50rem] ">
      <button className="absolute right-2 top-2 opacity-50">
        <SearchIcon clasess="h-8 w-8 fill-dark_4 opacity-70" />
      </button>
      <input
        className="w-full rounded-xl bg-slate-100 pr-11 text-lg leading-[3rem] outline-none"
        placeholder="جستجو کالا  "
        type="text"
        id="search"
      />
    </form>
  );
};

export default Search;
