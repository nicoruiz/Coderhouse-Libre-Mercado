import { Card, CardBody, CardFooter, Heading, Button, Image, Stack, Text } from '@chakra-ui/react'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ id, title, image, description, price, quantity }) => {
    const { deleteItem } = useContext(CartContext)

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={image}
                alt={title}
                maxHeight={'200'}
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text py='2'>
                        {description}
                    </Text>
                </CardBody>

                <CardFooter style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    <Text color='teal' fontSize='xl'>
                        {quantity} unidades
                    </Text>
                    <Button
                        colorScheme='teal'
                        variant='solid'
                        onClick={() => deleteItem(id)}
                    >
                        Eliminar
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default CartItem;