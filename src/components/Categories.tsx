import Category from "./Category";
import type { ICategory } from "../types/ICategory";

const Categories =  () => {
  const categories : ICategory[]= [
    {
      name: "T-Shirt",
      image: "./images/btshitrt.jpg",
    },
    {
      name: "Jacket",
      image: "./images/bjack.jpg",
    },
    {
      name: "Jean",
      image: "images/32.jpg",
    },
    {
      name: "Skirt",
      image: "images/bjack.jpg",
    },
    {
      name: "Bags",
      image: "images/bbag.jpg",
    },
    {
      name: "Watches",
      image: "images/bwatches.jpg",
    },
    {
      name: "Shoes",
      image: "images/bshoe.jpg",
    },
    {
      name: "Caps",
      image: "images/bcap.jpg",
    },
  ];

  return (
    <section>
      <div className="flex justify-around gap-6">
        {categories.map((category, key) => (
          <Category {...category} key={key} />
        ))}
      </div>
    </section>
    );
    
};

export default Categories;
