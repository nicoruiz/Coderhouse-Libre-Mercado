import { IconButton } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './CartWidget.module.scss';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)

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
            <span className={styles.cartNotification}>{getTotalQuantity()}</span>
        </>
    )
}

export default CartWidget;