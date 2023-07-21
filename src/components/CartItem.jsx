import { Card, CardBody, CardFooter, Heading, Button, Image, Stack, Text, useToast, Divider } from '@chakra-ui/react'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { DeleteIcon } from '@chakra-ui/icons';

const CartItem = ({ id, title, image, description, price, quantity }) => {
    const { deleteItem } = useContext(CartContext)
    const toast = useToast()

    const onDeleteItem = () => {
        deleteItem(id)
        toast({
            title: `Se eliminó el producto ${title} del carrito.`,
            status: 'warning',
            position: 'bottom-right',
            isClosable: true,
        })
    }

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            boxShadow='xl' 
            rounded='md' 
            bg='white'
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

                <CardFooter style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Button
                        colorScheme='red'
                        variant='solid'
                        onClick={onDeleteItem}
                        leftIcon={<DeleteIcon />}
                    >
                        Eliminar
                    </Button>

                    <Divider orientation='vertical' />

                    <Text color='teal' fontSize='2xl'>
                        {quantity} unidad/es
                    </Text>

                    <Divider orientation='vertical' />

                    <Text color='teal' fontSize='2xl'>
                        Total: ${price * quantity}
                    </Text>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default CartItem;