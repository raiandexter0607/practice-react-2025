function CartItem({ name, qty }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{name}</span>
      <span className="font-semibold">{qty}</span>
    </div>
  );
}

export default CartItem;
