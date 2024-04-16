import React from 'react';
import {
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import swift from '../../assets/swiftlogo.png';
import Facebook from '../../../public/Facebook.png';
import Twitter from '../../../public/Twitter.png';
import Telegram from '../../../public/Telegram.png';
import Instagram from '../../../public/Instagram.png';

const Footer = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Flex
      justifyContent="space-between"
      bg="#002c02"
      px={{ base: '5', md: '50' }}
      py={{ base: '5', md: '35' }}
      color="white"
      flexDirection={columnDirection}
    >
      <VStack>
        <VStack mr={{ md: '0', base: '40px' }}>
          <HStack mr="160px" spacing="5">
            <Image src={swift} w="50" />
            <Text fontSize={{ md: '1.5rem', base: '1.2rem' }} mt="3">
              Swifdrop
            </Text>
          </HStack>
          <Text
            fontSize={{ md: '16px', base: '12px' }}
            mr={{ base: '30px', md: '0' }}
          >
            Swifdrop gives you the best of food in a flash!
          </Text>
        </VStack>
        <VStack display={{ base: 'none', md: 'flex' }} spacing="3">
          <HStack mr={{ md: '150px', base: '330px' }} spacing="3">
            <Image src={Facebook} w="8" h="8" />
            <Image src={Twitter} w="8" h="8" />
            <Image src={Telegram} w="8" h="8" />
            <Image src={Instagram} w="8" h="8" />
          </HStack>
          <Text color="#708870" display={{ base: 'none', md: 'flex' }}>
            © Copyright 2024, All Rights Reserved by SwifDrop
          </Text>
        </VStack>
      </VStack>
      <HStack spacing={{ base: '10', md: '20' }} mt={{ base: '5', md: '0' }}>
        <VStack>
          <Text textDecoration="underline" color="#216624">
            LINKS
          </Text>
          <ChakraLink as={RouterLink} to="/About">
            About Us
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/Faq">
            FAQ
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/services">
            Services
          </ChakraLink>
        </VStack>
        <VStack>
          <Text textDecoration="underline" color="#216624">
            POLICY
          </Text>
          <ChakraLink as={RouterLink} to="/Features">
            Features
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/Privacy">
            Privacy
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/Terms">
            Terms of use
          </ChakraLink>
        </VStack>
        <VStack mb="8">
          <Text textDecoration="underline" color="#216624">
            HELP
          </Text>
          <ChakraLink as={RouterLink}>Contact Us</ChakraLink>
          <ChakraLink as={RouterLink} to="/Career">
            Career
          </ChakraLink>
        </VStack>
      </HStack>
      <Divider display={{ base: 'flex', md: 'none' }} />
      <VStack
        display={{ md: 'none', base: 'flex' }}
        mt={{ base: '4', md: '0' }}
        // mr={{ base: '100px', md: '150px' }}
        spacing="5"
      >
        <HStack spacing="5" mr={{ base: '120px', md: '150px' }}>
          <Image src={Facebook} w="8" h="8" />
          <Image src={Twitter} w="8" h="8" />
          <Image src={Telegram} w="8" h="8" />
          <Image src={Instagram} w="8" h="8" />
        </HStack>
        <Text
          fontSize={{ md: '0', base: '12px' }}
          mr={{ base: '40px', md: '0' }}
        >
          © Copyright 2024, All Rights Reserved by SwifDrop
        </Text>
      </VStack>
    </Flex>
  );
};

export default Footer;
