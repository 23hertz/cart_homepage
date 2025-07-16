// import type { IFlashSale } from "../types/IFlashSale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FlashProduct: React.FC<any> = ({
  image,
  description,
  price,
  oldPrice,
  numberRemain,
  totalNumber,
}) => {
  return (
    <div className="flex flex-col shadow-md rounded-xl text-center w-100 mt-9">
      <div
        className={`bg-gray-300 w-[90%] h-[150px] mb-4 mr-3 rounded-t-md`}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="relative p-2  bg-red-100 rounded-full left-25 top-4 w-3 h-3 font-sm text-sm"
        />
      </div>
      <p className="text-[0.9rem] text-center font-[620] font-sm capitalize text-justify px-3">
        {description}
      </p>

      <span className="flex mt-3">
        <h3 className="text-[1.3em] text-capitalize font-bold mb-4 px-3">
          RP{price}
        </h3>
        <h3 className="text-[1em] text-red-900 text-bold mt-1 line-through">
          Rp{oldPrice}
        </h3>
      </span>
      <span className="flex text-grey-300 text-lg">
        <h3 className="flex text-gray-400 text-xl font-bold px-1">
          {numberRemain}
        </h3>
        <span className="text-gray-400">/</span>
        <h3 className="flex text-gray-400 text-xl font-bold  px-1">
          {totalNumber} <span className="text-gray-400 pl-1"> sale</span>
        </h3>
      </span>
    </div>
  );
};

export default FlashProduct;
