import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input,
    InputGroup,
    InputRightElement,
    Card,
    CardBody,
} from "@chakra-ui/react";

export const EmergencyBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)

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
                colorScheme="whiteAlpha"
                onClick={onOpen}
            >
                Emergency Chat
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <Overlay />
                <ModalContent>
                    <ModalHeader>Emergency Chat Bot</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Card>
                            <CardBody>
                                <Text>Type in your Emergency and click SEND! to get and emergency diagnostics
                                    Use Get Diagnositic to enable the full power of MED ASSISTANT AI</Text>
                            </CardBody>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                // type={show ? 'text' : 'password'}
                                type='textarea'
                                placeholder='What is your Emergency?'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {/* {show ? 'Hide' : 'Show'} */}
                                    Send
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};
