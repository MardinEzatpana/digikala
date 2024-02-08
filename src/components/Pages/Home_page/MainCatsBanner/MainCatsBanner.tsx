import React from "react";
import List from "./components/List";

interface Props {
  main_cats:{
    _id: {
      $oid:string
    }
    title:string
    image:string
    label:string
    specific_cat:{
      _id: {
        $oid:string
      }
      main_cat_id: {
        $oid:string
      }
      title:string
      single_image:string
      hero_image:string
      label:string
      products_id:
        {
          $oid:string
        }[]
    }[]
  }[],
}

const MainCatsBanner = ({ main_cats }: Props) => {
  return (
    <section className=" p-2">
      <List main_cats={main_cats} />
    </section>
  );
};

export default MainCatsBanner;
