import CartItem from "./cartItem"
import { useCartContext } from "../contexts/cartContext"

function CartSidebar ({isOpen=true}) {
    const { state } = useCartContext()

    return(
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 flex flex-col border-l border-gray-200 z-50 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-semibold">🛒 Your Cart</h2>
              <button className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none">
                &times;
              </button>
            </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            <ul>{ state.map((item, index) => (
              <li key={index}><CartItem name={item.name} qty={item.qty}/></li>
            ))}</ul>
          </div>
          

          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>$99.97</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
    )
}

export default CartSidebar