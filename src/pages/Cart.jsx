import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from '../pages/ItemDetail.module.scss';
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartList } = useContext(CartContext)

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <Box className={styles.detailContainer}>
            <Box style={{ paddingBottom: '2rem' }}>
                <Text color='teal' fontSize='3xl'>Carrito de compra</Text>
            </Box>

            <Button
                onClick={goBack}
                leftIcon={<ArrowBackIcon />}
                style={{ width: '8rem' }}
                colorScheme='teal'
                variant='solid'
            >
                Atrás
            </Button>

            <Flex direction="column" className={styles.centeredContainer} style={{ gap: '2rem' }}>
                {cartList.map((product) =>
                    <CartItem 
                        key={product.id} 
                        {...product} 
                    />
                )}
            </Flex>
        </Box>
    )
}

export default Cart;