import React from "react";
import Slider from "@/components/Util/components/products_Slider/Products_Slider";
import { Hero_slide_type } from "../products_Slider/hero_slide";
import products_ad from "@/assets/json/products_ad.json"

const AdsliderContent = () => {
  
  const heroSlide: Hero_slide_type = {
    image_url: "/image/assets/ad_slide_hero_v1.png",
    link_url: "#",
  };
  return (
    <Slider products={products_ad} bg_color="bg-g3_3" heroSlide={heroSlide} />
  );
};

export default AdsliderContent;
