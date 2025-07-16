// import TopFooter from "./TopFooter";
// import BottomFooter from "./BottomFooter";

function Footer(){
    return (
      <section className="text-white  mt-20">
        <div className="w-[100%] h-[150px] text-center mt-[30px] bg-gray-500">
          <h1 className="italic text-3xl h-[100%] pt-[50px]">
            “Let’s Shop Beyond Boundaries”
          </h1>
        </div>

        <div className="flex justify-around text-sm mx-auto py-5 bg-gray-900">
          <div>
            <h2 className="font-bold text-lg mb-2">BeliBeli.com</h2>
            <p className="mb-4">"Let's Shop Beyond Boundaries"</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">BeliBeli</h2>
            <ul className="space-y-1 text-gray-400">
              <li>About BeliBeli</li>
              <li>Career</li>
              <li>Mitra Blog</li>
              <li>B2B Digital</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Buy</h2>
            <ul className="space-y-1 text-gray-400">
              <li>Bill & Top Up</li>
              <li>BeliBeli COD</li>
              <li>Mitra Blog</li>
              <li>Promo</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Sell</h2>
            <ul className="space-y-1 text-gray-400">
              <li>Seller Education Center</li>
              <li>Brand Index</li>
              <li>Register Official Store</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Guide and Help</h2>
            <ul className="space-y-1 text-gray-400">
              <li>BeliBeli Care</li>
              <li>Term and Condition</li>
              <li>Privacy</li>
              <li>Mitra</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-400">
          © 2001 - 2023, BeliBeli.com
        </div>
      </section>
    );
}

export default Footer;