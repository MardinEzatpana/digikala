import { Prisma } from "@prisma/client";

export type MainCatsWithSpecificCats = Prisma.Main_catGetPayload<{
  include: { Specific_cat: true };
}>;

export type AllCatsTopsViewProducts = Prisma.ProductGetPayload<{
  include: { main_cat: true };
}>[];

export type AdWithProducts = Prisma.AdGetPayload<{
  select: {
    product: true;
  };
}>;

export type Product_full = Prisma.ProductGetPayload<{
  include: { brand: true;  specific_cat: true; main_cat: true };
}>;

export type ProductsWithBrands = Prisma.ProductGetPayload<{
  include: { brand: true };
}>;

export enum SortValue {
  grtPrice = "0",
  lwrPrice = "1",
  grtView = "2",
  grtSale = "3",
  fav = "4",
  newst = "5",
}

export interface SortItem {
  id: string;
  title: string;
  value: SortValue;
}

export type SortItems = SortItem[];

export type MainCat_with_Specific_cats = Prisma.Main_catGetPayload<{
  include: { Specific_cat: true };
}>;

export type DrinksBrands = Prisma.ProductGetPayload<{
  select: {
    brand: true;
  };
}>;
