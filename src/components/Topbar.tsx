import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'next/link';

function Topbar() {
  return (
    <div className="flex w-full justify-between relative">
      <div className="ftDownload flex justify-between py-5 bg-yellow-400 h-[30px]">
        <FontAwesomeIcon
          icon={faUser}
          className="tuser font-4xl text-grey-400 mb-5 font-2xl absolute top-2"
        />
        <h3 className="text-gray-400 font-bold text-xl bg-400-green pl-9 mb-5 absolute top-1">
          Download Belibeli App
        </h3>
      </div>

      <div className="flex align-around gap-10">
        <div className="space-x-3 ">
          <a
            href="#"
            className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide"
          >
            Mitra BeliBeli
          </a>
          <a
            href="#"
            className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide"
          >
            About BeliBeli
          </a>
          <a
            href="#"
            className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide"
          >
            Promo
          </a>
          <a
            href="#"
            className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide"
          >
            Beli Cano
          </a>
        </div>
        
       <div className="tbsl">
          {/* <Link href="/cart" className="signin text-sm font-bold pr-5">
            Cart
          </Link>
          <Link href="/profile" className="signin text-sm font-bold pr-2">
            Profile
          </Link>
          <Link href="/checkout" className="signin text-sm font-bold pr-2">
            Checkout
          </Link> */}
  
        </div> 
      </div>
    </div>
    // </div>
  );
}

export default Topbar;
