"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Brand } from "@prisma/client";
import { MainCatsWithSpecificCats, SortValue } from "@/types_validation/type";
import Categories from "./components/categories";
import PriceRange from "./components/priceRange";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./components/AccordionStyled";
interface Props {
  brands: Brand[];
  mainCats: MainCatsWithSpecificCats[];
  searchQuery: string;
  bQ: string[];
  sort: SortValue;
  maxPrice: string;
  minPrice: string;
  page: string;
}

export default function Filters({
  brands,
  mainCats,
  searchQuery,
  sort,
  bQ,
  maxPrice,
  minPrice,
  page,
}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  

  const expandHandler =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={expandHandler("panel1")}
        className=""
      >
        <AccordionSummary
          className="!bg-transparent"
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography className="!font-iranyekan_bold !text-lg !text-dark_3 ">
            دسته بندی ها
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="">
          <Categories
            searchQuery={searchQuery}
            sort={sort}
            mainCats={mainCats}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={expandHandler("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className="!bg-transparent"
        >
          <Typography
            className="!font-iranyekan_bold !text-lg  !text-dark_3"
            fontSize={11}
          >
            برند ها
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={expandHandler("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          className="!bg-transparent"
        >
          <Typography className="!font-iranyekan_bold  !text-lg !text-dark_3">
            محدوده قیمت
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="">
          <PriceRange
            bQ={bQ}
            searchQuery={searchQuery}
            sort={sort}
            maxPrice={maxPrice}
            minPrice={minPrice}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
