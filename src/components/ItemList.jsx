import { Flex, Box } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <Flex flexWrap="wrap">
            {products.map((product) => (
                <Box width="25%" p={2}>
                    <Item
                        key={product.id}
                        {...product}
                    />
                </Box>
            ))}
        </Flex>
    )
}

export default ItemList;