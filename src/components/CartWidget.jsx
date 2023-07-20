import { IconButton } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './CartWidget.module.scss';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
    const { cartList } = useContext(CartContext)

    const totalQuantity = cartList.reduce(
        (acc, product) => acc + product.quantity, 0
    )

    return (
        <>
            <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Cart'
                size='lg'
                fontSize='20px'
                icon={<AiOutlineShoppingCart />}
            />
            <span className={styles.cartNotification}>{totalQuantity}</span>
        </>
    )
}

export default CartWidget;