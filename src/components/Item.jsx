import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Flex, AspectRatio } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { Link as RouterLink } from 'react-router-dom';

const Item = ({ id, title, image, description, price, stock, isDetailView = false, onAdd }) => {
    return (
        <Card maxW={isDetailView ? 'lg' : 'xs'}>
            <CardBody style={{ minWidth: '15rem' }}>
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={image}
                        alt={title}
                        borderRadius='lg'
                    />
                </AspectRatio>
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
                    <Text paddingBottom={2}>{stock} Unidades disponibles</Text>
                    {isDetailView ?
                        <ItemCount
                            stock={stock}
                            initial={1}
                            onAdd={onAdd}
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