import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button
} from '@chakra-ui/react';
import React from 'react';

const OrderGeneratedAlert = ({ isOpen, onClose, orderNumber, onOrderConfirmationFinished }) => {
    const cancelRef = React.useRef()

    const onAlertClose = () => {
        onClose()
        onOrderConfirmationFinished()
    }

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onAlertClose}
            size={'xl'}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Orden generada exitosamente!
                    </AlertDialogHeader>
                    <AlertDialogCloseButton />

                    <AlertDialogBody>
                        Orden número: <b>#{orderNumber}</b> generada con éxito.
                        <br /><br />
                        Gracias por su compra.
                    </AlertDialogBody>

                    <AlertDialogFooter style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            colorScheme='teal'
                            variant='solid'
                            ref={cancelRef}
                            onClick={onAlertClose}
                        >
                            Aceptar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default OrderGeneratedAlert;