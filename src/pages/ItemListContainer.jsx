import { useParams } from 'react-router';
import useGetProducts from '../hooks/useGetProducts';
import ItemList from '../components/ItemList';
import styles from './ItemListContainer.module.scss';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';

const ItemListContainer = ({ greetings }) => {
    const { categoryId } = useParams();

    const [products, isLoading] = useGetProducts(categoryId);

    return (
        <Box className={styles.itemListContainer}>
            <Box style={{ paddingBottom: '2rem' }}>
                <Text color='teal' fontSize='3xl'>{greetings}</Text>
            </Box>

            <Flex direction="column">
                {isLoading
                    ? <Box className={styles.spinnerContainer}>
                        <Spinner size='xl' />
                    </Box>
                    : <ItemList products={products} />
                }
            </Flex>
        </Box>
    )
}

export default ItemListContainer;