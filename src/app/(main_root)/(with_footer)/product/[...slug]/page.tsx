import Breadcrumbs, {
  BreadcrumbsType,
} from "@/components/Util/components/breadcrumbs/Breadcrumbs";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import React, { Suspense, cache } from "react";
import { Metadata } from "next";
import Main from "@/components/Pages/Product_page/main/Main";
import Smilar_product_slider from "@/components/Pages/Product_page/smilar_products_slider/Smilar_product_slider";
interface Props {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { id: true, title: true },
  });
  return products.map((item) => {
    return { slug: [item.id] };
  });
}

const getProduct = cache(async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
      include: { main_cat: true, specific_cat: true, brand: true},
    });
    if (!product) {
      return notFound();
    }
    return product;
  } catch (error) {
    return notFound();
  }
});

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const product = await getProduct(slug[0]);
  return {
    title: product.title,
    description: product.title,
  };
}

const page = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug[0]);

  const breadcrumbs: BreadcrumbsType[] = [
    {
      title: product.main_cat.title,
      link: "#",
    },
    {
      title: product.specific_cat.title,
      link: "#",
    },
  ];

  return (
    <main className="flex flex-col gap-5 px-5">
      <div>
        <Breadcrumbs list={breadcrumbs} />
        <Main product={product} />
      </div>
      <Suspense fallback={<p>loading smilar products...</p>}>
        <Smilar_product_slider title="کالا های مشابه" />
      </Suspense>
    </main>
  );
};

export default page;
