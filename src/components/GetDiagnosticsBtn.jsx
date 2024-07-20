import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    FormControl,
    FormLabel,
    Input,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Link,
} from "@chakra-ui/react";

export const GetDiagnosticsBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

    const Overlay = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='10%'
            backdropBlur='5px'
        />
    );

    return (
        <div>
            <Button
                colorScheme="blackAlpha"
                onClick={onOpen}
            >
                Get Diagnostics
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <Overlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Full name</FormLabel>
                            <Input ref={initialRef} placeholder='Full name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Create Password</FormLabel>
                            <Input type='password' placeholder='Password' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type='password' placeholder='Password' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Link color='teal.500' href='#' p={4}>
                            Already have an account!
                        </Link>
                        <Button colorScheme='blue' mr={3}>
                            Sign Up
                        </Button>
                        {/* <Button onClick={onClose}>Cancel</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}
