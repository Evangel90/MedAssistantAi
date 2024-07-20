import React from "react";
import { Box, ButtonGroup, Heading, Text, Highlight } from "@chakra-ui/react";
import { EmergencyBtn } from "./components/EmergencyBtn";
import { GetDiagnosticsBtn } from "./components/GetDiagnosticsBtn";


export const App = () => {
  return (
    <Box
      position="relative"
      // width="100%" 
      height="40rem"
      m='1.2rem'
      borderRadius='1rem'
      overflow='hidden'
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)"
    >
      <Box
        as="img"
        src="https://cdn.pixabay.com/photo/2024/04/18/10/09/ai-generated-8704008_1280.jpg"
        alt="Example Image"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(62, 105, 254, 0.5)" // Black color with 50% opacity
      />
      <Box>
        <Heading
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          textAlign="center"
        >
          <Heading lineHeight='tall'>
            <Highlight
              query='MED ASSISTANT AI'
              styles={{ px: '3', py: '1', rounded: 'full', bg: 'whitesmoke' }}
            >
              Get insights about your health with MED ASSISTANT AI.
            </Highlight>
          </Heading>


        </Heading>
        <Text
          position="absolute"
          top="58%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          textAlign="center"
          fontSize='xl'
          minW='20rem'
          maxH='3rem'
          maxW='30%'
          // w='20rem'
        > AI model fine-tuned on extensive medical data
        </Text>
        <ButtonGroup
          position="absolute"
          top="70%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          // flexDirection="column" 
          alignItems="center"
          gap='4'
        >
          <EmergencyBtn />
          <GetDiagnosticsBtn />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
