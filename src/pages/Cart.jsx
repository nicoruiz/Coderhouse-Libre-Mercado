import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from '../pages/ItemDetail.module.scss';
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartList, isEmpty, getTotalAmount } = useContext(CartContext)

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

            <Flex
                direction="column" className={styles.centeredContainer}
                style={{ display: 'grid', padding: '1rem 5rem 0rem 5rem', gap: '2rem' }}
            >
                {isEmpty()
                    ? <Box boxSize='sm' style={{ textAlign: 'center' }}>
                        <Text color='teal' fontSize='2xl'>Tu carrito de compra está vacío</Text>
                        <Image
                            src='https://cdn-icons-png.flaticon.com/512/2037/2037457.png'
                            alt='empty'
                            borderRadius='lg'
                        />
                    </Box>
                    :
                    <>
                        <Text color='teal' fontSize='2xl' style={{ textAlign: 'center' }}>
                            Total de tu compra: ${getTotalAmount()}
                        </Text>
                        {
                            cartList.map((product) =>
                                <CartItem
                                    key={product.id}
                                    {...product}
                                />
                            )
                        }
                    </>

                }
            </Flex>
        </Box>
    )
}

export default Cart;