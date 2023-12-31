import { useParams } from 'react-router';
import useGetProduct from '../hooks/useGetProduct';
import Item from '../components/Item';
import { Box, Button, Flex, Spinner } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import styles from '../pages/ItemDetail.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useToast } from '@chakra-ui/react'

const ItemDetail = () => {
    const { id } = useParams()
    const [product, isLoading] = useGetProduct(id)
    const [finishBuying, setFinishBuying] = useState(false)

    const { addToCart } = useContext(CartContext)

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const toast = useToast()

    const onAdd = (quantityToAdd) => {
        const productAdded = addToCart(product, quantityToAdd)

        if (productAdded) {
            setFinishBuying(true)
            toast({
                title: `Se agregó el producto ${product.title} al carrito.`,
                status: 'success',
                position: 'bottom-right',
                isClosable: true,
            })
        }
        else {
            toast({
                title: `Stock insuficiente. No es posible agregar el producto ${product.title} al carrito.`,
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
            })
        }

    }

    const goToCart = () => {
        navigate("/cart")
    }

    return (

        <Flex direction="column" className={styles.detailContainer}>
            <Button
                onClick={goBack}
                leftIcon={<ArrowBackIcon />}
                style={{ width: '8rem' }}
                colorScheme='teal'
                variant='solid'
            >
                Atrás
            </Button>

            {isLoading
                ? <Box className={styles.centeredContainer}>
                    <Spinner size='xl' />
                </Box>
                :
                <Box className={styles.centeredContainer}>
                    <Item
                        {...product}
                        isDetailView
                        onAdd={onAdd}
                        onFinishBuying={goToCart}
                        finishBuying={finishBuying}
                    />
                </Box>
            }
        </Flex>
    )
}

export default ItemDetail;