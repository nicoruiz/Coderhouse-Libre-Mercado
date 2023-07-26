import { Box, Text, Image } from "@chakra-ui/react";

const EmptyCart = () => {
    return (
        <Box boxSize='sm' style={{ textAlign: 'center' }}>
            <Text color='teal' fontSize='2xl'>Tu carrito de compra está vacío</Text>
            <Image
                src='https://cdn-icons-png.flaticon.com/512/2037/2037457.png'
                alt='empty'
                borderRadius='lg'
            />
        </Box>
    )
}

export default EmptyCart;