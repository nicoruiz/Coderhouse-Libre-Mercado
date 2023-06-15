import { IconButton } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './CartWidget.module.scss';

const CartWidget = () => {
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
            <span className={styles.cartNotification}>10</span>
        </>
    )
}

export default CartWidget;