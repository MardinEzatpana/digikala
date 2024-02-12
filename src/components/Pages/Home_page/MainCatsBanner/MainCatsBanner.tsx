import React from "react";
import List from "./components/List";
import { Main_cat } from "@prisma/client";

interface Props {
  main_cats: Main_cat[];
}

const MainCatsBanner = ({ main_cats }: Props) => {
  return (
    <section className=" p-2">
      <List main_cats={main_cats} />
    </section>
  );
};

export default MainCatsBanner;
