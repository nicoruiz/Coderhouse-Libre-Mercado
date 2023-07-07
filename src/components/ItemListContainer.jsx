import { useParams } from 'react-router';
import useGetProducts from '../hooks/useGetProducts';
import ItemList from './ItemList';
import styles from './ItemListContainer.module.scss';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greetings }) => {
    const { categoryId } = useParams();

    const [products, isLoading] = useGetProducts();
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        categoryId != null 
            ? setFilteredProducts(products.filter((p) => p.category === categoryId))
            : setFilteredProducts(products)
    }, [products, categoryId])
    return (
        <Box className={styles.itemListContainer}>
            <Box>
                {greetings}
            </Box>

            <Flex direction="column">
                {isLoading
                    ? <Box className={styles.spinnerContainer}>
                        <Spinner size='xl' />
                    </Box>
                    : <ItemList products={filteredProducts} />
                }
            </Flex>
        </Box>
    )
}

export default ItemListContainer;