import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product, quantity) => {
        // Check if can add item to cart based on product stock
        if (!canAddToCart(product, quantity))
            return false;

        if (isInCart(product.id)) {
            const filteredList = cartList.filter(item => item.id !== product.id)
            const itemInCart = getItemInCart(product.id)

            setCartList(
                [
                    ...filteredList,
                    {
                        ...product,
                        quantity: itemInCart.quantity + quantity
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

        return true;
    }

    const isEmpty = () => cartList.length === 0

    const clearCart = () => setCartList([])

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

    //** Private functions **/
    const isInCart = (id) => cartList.some(item => item.id === id)

    const getItemInCart = (id) => cartList.filter(product => product.id === id)[0]

    const canAddToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const itemInCart = getItemInCart(item.id)
            return (quantity + itemInCart.quantity) <= item.stock
        }
        else return true
    }
    //** /Private functions **/

    return (
        <CartContext.Provider value={{ cartList, addToCart, clearCart, deleteItem, isEmpty, getTotalQuantity, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;