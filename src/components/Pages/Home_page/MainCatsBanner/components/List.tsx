import React from "react";
import Item from "./Item";

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

const List = ({ main_cats }: Props) => {
  return (
    <div className="flex flex-row gap-3 max-md:flex-col">
      {main_cats.map((cat) => {
        return <Item key={cat._id.$oid} cat={cat} />;
      })}
    </div>
  );
};

export default List;
