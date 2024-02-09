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
  include: { specific_cat: true; main_cat: true };
}>;
