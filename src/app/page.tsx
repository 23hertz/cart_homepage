import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import TodayCategories from "@/components/TodayCategories";
import BestSelling from "@/components/BestSelling";
import Footer from "@/components/Footer";
import Inputs from "@/components/Inputs";

export default function Home() {
  return (
    <div className="container mx-auto px-10 py-5 w-full y-500 rounded-md">
      {/* <Header />
      <Hero />
      <Categories />
      <FlashSale />
      <TodayCategories />
      <BestSelling />
      <Footer /> */}
    
        <Inputs />
      
    </div>
  );
}
