import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) {
            const filteredList = cartList.filter(item => item.id !== product.id)
            setCartList(
                [
                    ...filteredList,
                    {
                        ...product,
                        quantity: quantity
                    }
                ]
            )
        }
        else {
            setCartList((prev) =>
                [
                    ...prev,
                    {
                        ...product,
                        quantity: quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => cartList.some(item => item.id === id)

    const isEmpty = () => cartList.length === 0

    const clear = () => setCartList([])

    const deleteItem = (id) => {
        const filteredList = cartList.filter(item => item.id !== id)
        setCartList(filteredList)
    }

    const getTotalQuantity = () => cartList.reduce(
        (acc, product) => acc + product.quantity, 0
    )

    const getTotalAmount = () => cartList.reduce(
        (acc, product) => acc + (product.price * product.quantity), 0
    )

    return (
        <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem, isEmpty, getTotalQuantity, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;