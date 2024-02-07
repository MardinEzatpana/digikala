import Hero from "@/components/Pages/Home_page/hero/Hero";
import SpecificCats from "@/components/Pages/Home_page/SpecificCats/SpecificCats";
import product_main_categories from "@/assets/json/product_main_categories.json"

export default function Home() {

  return (
    <div className="flex flex-col gap-3">
      <Hero />
      <SpecificCats cats={product_main_categories} />
    </div>
  );
}
