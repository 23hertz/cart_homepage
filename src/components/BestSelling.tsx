import BestBag from "./BestBag";
import BestSellings from "./BestSellings";
import type { IStore } from "../types/IStore";

function BestSelling() {
  const storeData: IStore[] = [

    {
      name: "Nike sea mall",
      slogan: '"just do it bro!"',
      image1: "./images/greycap.jpeg",
      image2: "./images/grsk.jpg",
      image3: "./images/grshoe.jpeg",
      price1: "300.00",
      price2: "3200.00",
      price3: "3030.00",
    },
    {
      name: "Barudka Disaster mall",
      slogan: '"unleash your fashion!"',
      image1: "./images/shirtgrey.jpg",
      image2: "./images/shoegrey.jpg",
      image3: "./images/watchgrey.jpg",
      price1: "400.0",
      price2: "3200.00",
      price3: "300.00",
    },
    {
      name: "Galaxy galleria mall",
      slogan: '"be extra ordinary!"',
      image1: "./images/shirtgrey.jpg",
      image2: "./images/shoegrey.jpg",
      image3: "./images/watchgrey.jpg",
      price1: "500.0",
      price2: "900.00",
      price3: "300.00",
    },
    {
      name: "Nike sea mall",
      slogan: '"chic, bold, confident!"',
      image1: "./images/shoegrey.jpg",
      image2: "./images/capgrey.jpg",
      image3: "./images/greshirt.jpg",
      price1: "700.0",
      price2: "320.00",
      price3: "456.00",
    },
  ];
  return (
    <section className="mt-1">
      <h2 className="text-center text-2xl font-bold py-5">
        Best Selling Store
      </h2>
      <div className="flex flex-row">
        <BestBag />
        <div className="w-[70%]">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 ">
            {storeData.map((store, key) => (
              <BestSellings {...store} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
