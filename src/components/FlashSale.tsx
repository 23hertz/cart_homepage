import FlashProducts from "./FlashProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function FlashSale() {
  return (
    <div className=" bg-gray-100 px-7 py-12">
      <div className="p-4 flex justify-between">
        <div className="flex gap-4 align-between">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBolt}
                className="bg-gray-900 p-2 rounded-full mb-6 text-white"
              />
              <h2 className="ml-3 font-bold text-md pb-5">Flash Sale</h2>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-2">
            {/* Hours */}
            <div className="flex items-center gap-1">
              <h3 className="font-bold pt-1 text-[0.8em] bg-red-400 text-white rounded-full w-6 h-6 text-center mb-[2.5em]">
                08
              </h3>
              <span className="font-bold text-md mb-[2.5em]">:</span>
            </div>

            {/* Minutes */}
            <div className="flex items-center gap-1">
              <h3 className="font-bold pt-1 text-[0.8em] bg-red-400 text-white rounded-full w-6 h-6 text-center mb-[2.5em]">
                17
              </h3>
              <span className="font-bold text-md mb-[2.5em]">:</span>
            </div>

            {/* Seconds */}
            <div className="flex items-center">
              <h3 className="font-bold  pt-1 text-[0.8em] bg-red-400 text-white rounded-full w-6 h-6 text-center mb-[2.5em]">
                56
              </h3>
            </div>
          </div>
        </div>

        <div className="arrows">
          <span className="bg-white  text-black mr-3 p-1 rounded-md shadow">
            <a href="http://">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-8 no-underline"
              />
            </a>
          </span>
          <span className="bg-black text-white p-1 rounded-md">
            <a href="http://">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-15 text-lg no-underline"
              />
            </a>
          </span>
        </div>
      </div>
      <FlashProducts />
    </div>
  );
}

export default FlashSale;
