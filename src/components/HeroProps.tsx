import Hero from "./Hero";
import type { IHero } from "../types/IHero";

function HeroProps() {
  const heroTexts: IHero[]= [
    {
      id: 1,
      heroTitle: "#shop with hapiness",
      heroMain: "Giving discounts on every items",
      heroSlogan: "the best online eshop",
    },
    // {
    //   hero_title: "#shop your favourite gifts",
    //   hero_main: "Giving you and your family unending satisfaction",
    //   hero_slogan: "the best online eshop"
    // },
    // {
    //   hero_title: "#Children gifts",
    //   hero_main: "Experince the childish in you",
    //   hero_slogan: "the best online eshop",

    // },
  ];

  return (
    <div>
      {heroTexts.map((heroText) => (
        <Hero {...heroText} key={heroText.id} />
      ))}
    </div>
  );
}

export default HeroProps;
