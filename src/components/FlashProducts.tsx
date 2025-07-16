import FlashProduct from "./FlashProduct";
import type { IFlashSale } from "../types/IFlashSale";

function FlashProducts() {
  const fProducts: IFlashSale[] = [
    {
      image: "./images/greshirt.jpg",
      description: "Soft, breathable 100% cotton tee with a classic fit.",
      price: "2090.0",
      oldPrice: "30000.0",
      numberRemain: "10",
      totalNumber: "10",
    },
    {
      image: "./images/grsk.jpg",
      description:
        "Flirty, lightweight short skirt with a comfy fit — perfect for day or night.",
      price: "199.0",
      oldPrice: "3067",
      numberRemain: "10",
      totalNumber: "10",
    },
    {
      image: "./images/bbag.jpg",
      description:
        "Minimal, everyday short bag for your must-haves — stylish and easy to carry.",
      price: "20.0",
      oldPrice: "400",
      numberRemain: "4",
      totalNumber: "10",
    },
    {
      image: "./images/greyhiighheel.jpg",
      description: "Elite shite performance male jackert",
      price: "20.0",
      oldPrice: "30.0",
      numberRemain: "10",
      totalNumber: "10",
    },
  ];

  return (
    <section>
      <div className="flex justify-around gap-6">
        {fProducts.map((fproduct, key) => (
          <FlashProduct {...fproduct} key={key} />
        ))}
      </div>
    </section>
  );
}

export default FlashProducts;
