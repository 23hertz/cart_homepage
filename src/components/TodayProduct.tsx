import TodaysProducts from "./TodaysProducts";
import type { IToday } from "../types/IToday";

function TodayProduct() {
  const productsToday: IToday[] = [

    {
      image: "./images/shoegrey.jpg",
      description:
        "Comfortable, stylish everyday shoes with a durable sole and sleek design.",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
    {
      image: "./images/greshirt.jpg",
      description:
        "Soft, breathable grey shirt with a clean, versatile look for any occasion.",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
    {
      image: "./images/hooddgrey.jpg",
      description: "Comfy, lightweight hoodie for everyday chill and style.",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "200.0",
      oldPrice: "40000",
    },
    {
      image: "./images/capgrey.jpg",
      description:
        "Classic, adjustable cap for everyday wear and sun protection.",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
    {
      image: "./images/grsk.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
    {
      image: "./images/greyhiighheel.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
    {
      image: "./images/grsk.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
    {
      image: "./images/greybag.jpg",
      description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
      ratings: "5.9",
      numberSold: "2090.0",
      price: "30000.0",
      oldPrice: "40000",
    },
  ];

  return (
    <section>
      <div className="justify-between grid grid-cols-4 gap-6 mt-5 p-4">
        {productsToday.map((ptoday, key) => (
          <TodaysProducts {...ptoday} key={key} />
        ))}
      </div>
    </section>
  );
}

export default TodayProduct;
