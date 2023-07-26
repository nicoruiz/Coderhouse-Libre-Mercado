import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from '../pages/ItemDetail.module.scss';
import { Box, Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import OrderForm from "../components/OrderForm";
import { addDocToCollection } from "../data/firestoreService";
import { serverTimestamp } from "firebase/firestore";
import OrderGeneratedAlert from "../components/OrderGeneratedAlert";

const Cart = () => {
    const { cartList, isEmpty, getTotalAmount, clearCart } = useContext(CartContext)

    const [isLoadingOrder, setIsLoadingOrder] = useState(false)
    const [generatedOrder, setGeneratedOrder] = useState()

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const { isOpen: isOrderFormOpen, onOpen: openOrderForm, onClose: closeOrderFormClose } = useDisclosure()
    const { isOpen: isOrderConfirmOpen, onOpen: openOrderConfirmation, onClose: closeOrderConfirmation } = useDisclosure()

    const continueBuying = () => {
        openOrderForm()
    }

    const onOrderSubmit = async (clientInformation) => {
        setIsLoadingOrder(true)
        
        const order = {
            buyer: clientInformation,
            items: cartList.map(x => ({
                id: x.id,
                title: x.title,
                quantity: x.quantity,
                price: x.price
            })),
            date: serverTimestamp(),
            total: getTotalAmount()
        }

        const orderId = await addDocToCollection("orders", order)
        setIsLoadingOrder(true)

        // Show generated order
        setGeneratedOrder(orderId)
        closeOrderFormClose()
        openOrderConfirmation()
    }

    const onOrderConfirmationFinished = () => {
        clearCart()
        navigate("/")
    }

    return (
        <>
            <OrderForm 
                isOpen={isOrderFormOpen} 
                onClose={closeOrderFormClose} 
                onSubmit={onOrderSubmit}
                isLoadingOrder={isLoadingOrder}
            />

            <OrderGeneratedAlert 
                isOpen={isOrderConfirmOpen} 
                onClose={closeOrderConfirmation}
                orderNumber={generatedOrder}
                onOrderConfirmationFinished={onOrderConfirmationFinished}
            />

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
                            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Text color='teal' fontSize='2xl' style={{ textAlign: 'center' }}>
                                    Total de tu compra: ${getTotalAmount()}
                                </Text>
                                <Button
                                    colorScheme='teal'
                                    variant='solid'
                                    onClick={continueBuying}
                                >
                                    Iniciar compra
                                </Button>
                            </Box>
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
        </>
    )
}

export default Cart;