import { Flex, Box } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <Flex flexWrap="wrap">
            {products.map((product) => (
                <Box key={product.id} width="25%" p={2}>
                    <Item
                        {...product}
                    />
                </Box>
            ))}
        </Flex>
    )
}

export default ItemList;