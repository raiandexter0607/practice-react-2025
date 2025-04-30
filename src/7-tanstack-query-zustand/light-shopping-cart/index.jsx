import { useItems } from "./hooks/useItems";
import { cartStore } from "./stores/cart";

function LightShoppingCart() {
  const { data, isLoading } = useItems();

  const cart = cartStore((state) => state.cart)
  const addItemToCart = cartStore((state) => state.addItemToCart)

  if (isLoading) return <p>Is Loading..</p>;

  return (
    <>
      <h1>Shopping Cart</h1>
      <h1>{cart.length}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover"/>
            <button onClick={() =>  addItemToCart(item)} className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200">Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default LightShoppingCart;
