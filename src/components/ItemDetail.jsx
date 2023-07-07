import { useParams } from 'react-router';
import useGetProduct from '../hooks/useGetProduct';
import Item from './Item';
import { Box, Button, Flex, Spinner } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import styles from './ItemDetail.module.scss';
import { useNavigate } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [product, isLoading] = useGetProduct(id)
    const navigate = useNavigate();

    const goBack = () => navigate(-1)

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
                        isDetailView={true}
                    />
                </Box>
            }
        </Flex>
    )
}

export default ItemDetail;