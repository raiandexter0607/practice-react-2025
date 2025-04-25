import ShoppingStore from "./shopping-store"
import { CartProvider} from "./shopping-store/contexts/cartContext"


function Exercise () {
    return(
        <>
            <CartProvider>
                <ShoppingStore />
            </CartProvider>
        </>
    )
}

export default Exercise