import { useState } from "react";
import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { BsFillCartCheckFill } from "react-icons/bs";

const ItemCount = ({ stock, initial = 0, onAdd, onFinishBuying, finishBuying }) => {
    const [quantity, setQuantity] = useState(initial)

    const onQuantityBtnClickHandler = (action) => {
        if (action === '+' && quantity < stock)
            setQuantity(quantity + 1)

        else if (action === '-' && quantity > 0)
            setQuantity(quantity - 1)
    }

    const onAddBtnClickHandler = () => {
        !disableAddBtn() && onAdd(quantity)
    }

    const disableAddBtn = () => quantity === 0 || stock === 0

    return (
        <Box style={{ display: "contents" }}>
            <HStack maxW='320px' paddingBottom={2}>
                <Button
                    onClick={() => onQuantityBtnClickHandler('-')}
                    isDisabled={quantity === 0}
                    colorScheme='teal'
                    variant='solid'
                >
                    -
                </Button>
                <Input value={quantity} readOnly={true} style={{ textAlign: "center" }} />
                <Button
                    onClick={() => onQuantityBtnClickHandler('+')}
                    isDisabled={quantity === stock}
                    colorScheme='teal'
                    variant='solid'
                >
                    +
                </Button>
            </HStack>
            {finishBuying
                ? <Button
                    onClick={onFinishBuying}
                    colorScheme='orange'
                    variant='solid'
                    leftIcon={<BsFillCartCheckFill />}
                >
                    Finalizar compra
                </Button>
                :
                <Button
                    isDisabled={disableAddBtn()}
                    onClick={onAddBtnClickHandler}
                    colorScheme='teal'
                    variant='solid'
                >
                    Agregar al carrito
                </Button>
            }
        </Box>

    )
}

export default ItemCount;