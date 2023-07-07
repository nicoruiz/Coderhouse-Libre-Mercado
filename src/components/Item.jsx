import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Box, Flex } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { Link as RouterLink } from 'react-router-dom';
import styles from './ItemDetail.module.scss';

const Item = ({ id, title, image, description, price, stock, isDetailView = false }) => {
    return (
        <Card maxW={isDetailView ? 'lg' : 'xs'}>
            <CardBody>
                <Image
                    src={image}
                    alt={title}
                    borderRadius='lg'
                    height={270}
                    width={340}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Text color='teal' fontSize='2xl'>
                        ${price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ justifyContent: 'center', textAlign: 'center' }}>
                <Flex direction="column">
                    <Text paddingBottom={2}>Stock: {stock}</Text>
                    {isDetailView ?
                        <ItemCount
                            stock={stock}
                            initial={1}
                            onAdd={(quantity) => alert(`Agregado al carrito ${quantity} unidades.`)}
                        />
                        :
                        <Button
                            as={RouterLink}
                            to={`/item/${id}`}
                            colorScheme='teal'
                            variant='solid'
                        >
                            Ver detalle
                        </Button>
                    }
                </Flex>
            </CardFooter>
        </Card>
    )
}

export default Item;