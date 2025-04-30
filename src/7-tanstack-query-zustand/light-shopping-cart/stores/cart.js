import { create } from "zustand";

export const cartStore = create((set) => {
    return {
        cart : [],
        addItemToCart : (item) => set((state) => ({ cart: [...state.cart, { title: item.title, img: item.image }]}))
    }
})


