import { useParams } from 'react-router';
import useGetProduct from '../hooks/useGetProduct';
import Item from '../components/Item';
import { Box, Button, Flex, Spinner } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import styles from '../pages/ItemDetail.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useToast } from '@chakra-ui/react'

const ItemDetail = () => {
    const { id } = useParams()
    const [product, isLoading] = useGetProduct(id)

    const { addToCart } = useContext(CartContext)

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const toast = useToast()

    const onAdd = (quantityToAdd) => {
        addToCart(product, quantityToAdd)
        navigate("/cart")
        toast({
            title: `Se agregó el producto ${product.title} al carrito.`,
            status: 'success',
            position: 'bottom-right',
            isClosable: true,
        })
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
                    />
                </Box>
            }
        </Flex>
    )
}

export default ItemDetail;