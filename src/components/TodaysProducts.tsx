import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const TodaysProducts: React.FC<any> = ({
  image,
  description,
  ratings,
  numberSold,
  price,
  oldPrice,
}) => {
  return (
    <div className=" rounded-3xl mt-9 shadow-md">
      <div
        className={`bg-gray-300 w-[90%] h-[150px] mb-4 mr-3 rounded-t-md`}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="relative p-2  bg-red-100 rounded-full left-53 top-3 w-3 h-3 font-sm text-sm"
        />
      </div>
      <h3 className="text-[0.9rem] text-center font-[620] font-sm capitalize text-justify px-3">
        {description}
      </h3>
      <div className="flex">
        <FontAwesomeIcon
          icon={faStar}
          className="font-3xl p-3 mt-3 text-yellow-400"
        />
        <h3 className="text-md relative top-4 text-capitalize font-bold mb-4 px-3">
          {ratings}
        </h3>
        <h4 className="text-md relative top-4 text-capitalize font-bold  mb-4 px-3 text-gray-400">
          {numberSold}k <span className="text-base">sold</span>{" "}
        </h4>
      </div>
      <div className="flex">
        <h3 className="text-md text-capitalize font-bold mb-4 px-3">
          RP{price}
        </h3>
        <h4 className="text-sm text-red-300 font-bold ">RP{oldPrice}</h4>
      </div>
    </div>
  );
};

export default TodaysProducts;
