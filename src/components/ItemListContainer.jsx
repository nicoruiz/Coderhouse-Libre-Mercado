import { Container, Box } from '@chakra-ui/react'

const ItemListContainer = ({ greetings }) => {
    return (
        <Container padding='4' marginTop='1rem' bg='blue.600' centerContent>
            <Box padding='4' bg='blue.400'>
                {greetings}
            </Box>
        </Container>
    )
}

export default ItemListContainer;