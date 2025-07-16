import TodayProduct from "./TodayProduct";
function TodayCategories() {
  return (
    <div className="my-25">
      <div className="flex justify-between">
        <h2 className="ml-3 font-bold text-2xl">Todays For You!</h2>
        <span>
          <a
            href="http://"
            className="border-1 p-3 rounded-md w-6 h-3 mr-5 bg-black text-white font-semibold text-md"
          >
            Best Seller
          </a>
          <a
            href="http://"
            className="border-1 p-3 rounded-md w-6 h-3 mr-5 text-black font-bold text-md"
          >
            Keep Stylish
          </a>
          <a
            href="http://"
            className="border-1 p-3 rounded-md w-6 h-3 mr-5 bg- text-black font-bold text-md"
          >
            Special Discount
          </a>
          <a
            href="http://"
            className="border-1 p-3 rounded-md w-6 h-3 mr-5 text-black font-bold text-md"
          >
            Official Store
          </a>
          <a
            href="http://"
            className="border-1 p-3 rounded-md w-6 h-3 mr-5  text-black font-bold text-md"
          >
            Coveted Product
          </a>
        </span>
      </div>

      <TodayProduct />
    </div>
  );
}

export default TodayCategories;
