import Hero from "@/components/Pages/Home_page/hero/Hero";
import SpecificCats from "@/components/Pages/Home_page/SpecificCats/SpecificCats";
import product_main_categories from "@/assets/json/product_main_categories.json"
import AdSlider from "@/components/Util/components/ad_slider/AdSlider";
import MainCatsBanner from "@/components/Pages/Home_page/MainCatsBanner/MainCatsBanner";

export default function Home() {

  return (
    <div className="flex flex-col gap-3">
      <Hero />
      <SpecificCats cats={product_main_categories} />
      <AdSlider />
      <MainCatsBanner main_cats={product_main_categories} />
    </div>
  );
}
