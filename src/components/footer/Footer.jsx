import React from 'react';
import { HStack, VStack, Flex, Text, Image, Box } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import swift from '../../assets/swiftlogo.png';
import Facebook from '../../../public/Facebook.png';
import Twitter from '../../../public/Twitter.png';
import Telegram from '../../../public/Telegram.png';
import Instagram from '../../../public/Instagram.png';

const Footer = () => {
  return (
    <Flex
      justifyContent="space-between"
      bg="#002c02"
      px={{ base: '20', md: '50' }}
      py={{ base: '10', md: '35' }}
      color="white"
    >
      <VStack>
        <VStack>
          <HStack mr="160px">
            <Image src={swift} w="50" />
            <Text fontSize="1.5rem" mt="3">
              Swifdrop
            </Text>
          </HStack>
          <Text>Swifdrop gives you the best of food in a flash!</Text>
        </VStack>
        <VStack>
          <HStack mr="150px">
            <Image src={Facebook} w="10" h="10" />
            <Image src={Twitter} w="10" h="10" />
            <Image src={Telegram} w="10" h="10" />
            <Image src={Instagram} w="10" h="10" />
          </HStack>
          <Text>© Copyright 2024, All Rights Reserved by SwifDrop</Text>
        </VStack>
      </VStack>
      <HStack spacing="20">
        <VStack>
          <Text>LINKS</Text>
          <ChakraLink as={RouterLink}>About Us</ChakraLink>
          <ChakraLink as={RouterLink}>FAQ</ChakraLink>
          <ChakraLink as={RouterLink}>Services</ChakraLink>
        </VStack>
        <VStack>
          <Text>LINKS</Text>
          <ChakraLink as={RouterLink}>Features</ChakraLink>
          <ChakraLink as={RouterLink}>Privacy</ChakraLink>
          <ChakraLink as={RouterLink}>Terms of use</ChakraLink>
        </VStack>
        <VStack>
          <Text>LINKS</Text>
          <ChakraLink as={RouterLink}>Contact Us</ChakraLink>
          <ChakraLink as={RouterLink}>Career</ChakraLink>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Footer;
