"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

import ToolsIcon from "@/components/Util/ui/icons/ToolsIcon";
import DrinksIcon from "@/components/Util/ui/icons/DrinksIcon";
import { MainCatsWithSpecificCats } from "@/types_validation/type";

interface Props {
  mainCats: MainCatsWithSpecificCats[];
}

export function CatsMenu({ mainCats }: Props) {
  const [mount, setmount] = React.useState(false);

  React.useEffect(() => {
    setmount(true);
  }, []);
  return (
    <>
      {mount && (
        <NavigationMenu dir="rtl" className="border-transparent">
        <NavigationMenuList>
          {mainCats.map((cat) => {
            return (
              <NavigationMenuItem  key={cat.id}>
                <NavigationMenuTrigger className="text-xl flex items-center gap-1">
                  {cat.title === "نوشیدنی ها" && (
                    <DrinksIcon classes="h-8 w-8 fill-dark_4" />
                  )}
                  {cat.title === "ابزار تهیه نوشیدنی" && (
                    <ToolsIcon classes="h-8 w-8 fill-dark_4" />
                  )}
                  {cat.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" rounded-xl border-transparent">
                  <ul className="grid gap-3 p-4 md:w-[700px] md:grid-cols-5 md:grid-rows-2 items-stretch">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-evenly items-center rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={`/${cat.label}`}
                        >
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            width={100}
                            height={100}
                          />
                          <div className="mb-2 mt-4 text-lg font-iransansbold">
                            {cat.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {cat.Specific_cat.map((specific) => {
                      return (
                        <ListItem
                          className="flex flex-col h-full justify-between border rounded-xl border-opacity-20 border-g1_7 items-stretch font-iransansbol hover:border-opacity-80"
                          key={specific.id}
                          href={`/search/${specific.label}`}
                          title={specific.title}
                        >
                          <Image
                            className="mr-auto"
                            src={specific.single_image}
                            alt={specific.title}
                            width={50}
                            height={50}
                          />
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      )}
    </>
  );
}

type ListItemType1 = React.ComponentPropsWithoutRef<"a">;
type ListItemType2 = Omit<ListItemType1, "href"> & { href: string };

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemType2>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="font-iranyekan text-lg font-medium leading-none">
              {title}
            </div>
            <div className="">{children}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
