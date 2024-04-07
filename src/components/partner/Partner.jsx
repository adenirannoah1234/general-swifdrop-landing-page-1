import React from 'react';
import {
  HStack,
  VStack,
  Flex,
  Box,
  Heading,
  Avatar,
  AvatarGroup,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import pizza from '../../../public/pizzaimage.png';
const Partner = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <VStack p={{ base: '10', md: '10' }}>
      <Heading fontSize={{ base: '2rem', md: '3rem' }} fontWeight={700}>
        Our Partners
      </Heading>
      <HStack flexDirection={columnDirection} mt="5" justify="center">
        <VStack>
          <Text
            fontSize={{ base: '0.9rem', md: '1.9rem' }}
            fontWeight={500}
            // textAlign="center"
          >
            Elevate your restaurant's reach with us and also streamline your
            operational management for swift success.
          </Text>
          <AvatarGroup size="md" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </VStack>
        <Image src={pizza} alt="pizza-image" w="500px" />
      </HStack>
    </VStack>
  );
};

export default Partner;
