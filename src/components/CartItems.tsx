import type { CartItemProps } from "../types/Icart";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartitems: CartItemProps[] = [
    {
      title: "Solid Shorts",
      image:
        "https://images.unsplash.com/photo-1598971861924-c78132a87443?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$9.99",
    },
    {
      title: "Solid Mini Skirt",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/07/white-denim-jacket-jean-shorts-outfit.jpg?fit=728%2C921",
      price: "$9.99",
    },
    {
      title: "Short Male Jean",
      image:
        "https://i.pinimg.com/736x/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg",
      price: "$99.99",
    },
    {
      title: "Vintage Fashion",
      image:
        "https://images.unsplash.com/photo-1598971861924-c78132a87443?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$99.99",
    },
  ];
  return (
    <section className="m-0 p-0 border-0">
      <div className="flex">
        <div className="p-4 ml-20 w-1/2">
          <img
            src="./image/logo.jpg"
            alt="Example"
            className="object-cover h-20 w-20 rounded-md"
          />
        </div>
        <div className="p-4 w-1/2 text-right text-red-500">x Clear Cart</div>
      </div>

      <div className="container flex gap-1 mx-auto p-2 mt-5 w-3/4 rounded-x">
        <div className="p-2 w-3/4 bg-white rounded-t-lg border-gray-300 border">
          <div className="mb-1 h-10 bg-white rounded-t-lg border-b border-gray-300">
            Cart <span className="text-gray-400">(5 Products)</span>
          </div>

          <div>
            {" "}
            <span className="mr-37">Product</span>{" "}
            <span className="mr-37">Count</span> <span>Price</span>{" "}
          </div>

          <div className="p-2 bg-white">
            {cartitems.map((cartitem, key) => (
              <CartItem {...cartitem} key={key} />
            ))}
          </div>

          <div
            className="h-30 bg-center bg-cover border rounded lg"
            style={{ backgroundImage: "url('./image/fff.jpg')" }}
          >
            &nbsp;
          </div>
        </div>

        <div className="p-4 w-2/4 bg-white rounded-t-lg rounded">
          <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Promo code</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Type here..."
                value=""
                className="flex-1 p-2 border rounded"
              />
              <button className="px-4 py-2 text-white bg-black rounded">
                Apply
              </button>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$</span>
              </div>
            </div>

            <button className="mt-4 py-2 w-full text-white bg-black rounded hover:opacity-90">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartItems;
