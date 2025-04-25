import CardItem from './components/cardItem'
import data from './data/items.json'
import CartSidebar from './components/cartSidebar'
import { useCartContext } from './contexts/cartContext'

function ShoppingStore () {
    const { dispatch } = useCartContext();
    const items = data.slice(0,18)
    console.log(items)


    const handleAddCart = (item) => {
        dispatch({
            action: 'ADD_ITEM',
            payload : item
        })
    }
    return(
        <>
            <h1 className='mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight mb-8'>Ceviche Store</h1>
            <main>
            <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">{ items.map((item, index) => (
                <li key={index}>
                    <CardItem image={item.images[0]} name={item.title} price={item.price} onAdd={() => handleAddCart({name: item.title, price: item.price, qty: 1, id: item.id})}/>
                </li>
            ))}</ul>
            </main>
            <CartSidebar />
        </>
    )
}

export default ShoppingStore