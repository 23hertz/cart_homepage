import type { CartItemProps } from "../types/Icart"

const CartItem: React.FC<CartItemProps> = ({title, price, image}) => {
    return (
        
        <div className="flex items-center justify-between p-2 mb-2 border-gray-300 rounded-xl border">
      <div className="flex items-center gap-4">
        
        <div className={`bg-gray-300 w-[50px] h-[50px] rounded-md mr-3`} style={{backgroundImage: `url('${image}')`, backgroundSize: "cover"}}>
            </div>

        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-2 bg-gray-200 rounded-full">-</button>
        <span>2</span>
        <button className="px-2 bg-gray-200 rounded-full">+</button>
      </div>

      <p className="font-semibold">$</p>
      <button className="text-red-500 text-sm hover:underline">x</button>
    </div>
    )
}
export default CartItem