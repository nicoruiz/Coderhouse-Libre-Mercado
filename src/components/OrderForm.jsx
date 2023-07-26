import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Input, ModalFooter, Box, Spinner } from "@chakra-ui/react"
import React from "react"
import { useFormik } from "formik";

const formValues = {
    name: "",
    email: "",
    phone: ""
}

const OrderForm = ({ isOpen, onClose, onSubmit, isLoadingOrder }) => {

    const formik = useFormik({
        initialValues: formValues,
        onSubmit: (values, { resetForm }) => {            
            onSubmit(values)
            resetForm()
        }
    });

    const initialRef = React.useRef(null)

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={formik.handleSubmit}>
                        <ModalHeader>Datos personales</ModalHeader>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Nombre completo</FormLabel>
                                <Input
                                    ref={initialRef}
                                    id='name'
                                    name='name'
                                    placeholder='Nombre completo'
                                    required={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    required={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Teléfono</FormLabel>
                                <Input
                                    id='phone'
                                    name='phone'
                                    placeholder='Teléfono'
                                    required={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                            </FormControl>

                        </ModalBody>

                        <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
                            {isLoadingOrder
                                ? <Spinner size='lg' />
                                : <>
                                    <Button type="submit" colorScheme='teal' variant='solid' mr={3}>
                                        Confirmar compra
                                    </Button>
                                    <Button onClick={onClose}>Cancelar</Button>
                                </>
                            }
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal >
        </>
    )
}

export default OrderForm;