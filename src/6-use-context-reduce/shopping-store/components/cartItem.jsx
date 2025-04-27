function CartItem({ name, qty, price }) {
  return (
<div className="flex justify-between items-center py-3 border-b border-gray-300">
  <div className="flex flex-col">
    <span className="text-gray-800 font-semibold text-md">{name}</span>
    <span className="text-gray-500 text-sm">${price.toFixed(2)}</span>
  </div>
  <div className="flex items-center space-x-2">
    <span className="text-gray-700 font-medium">Qty: {qty}</span>
    <span className="font-semibold text-gray-800">${(price * qty).toFixed(2)}</span>
  </div>
</div>
  );
}

export default CartItem;
