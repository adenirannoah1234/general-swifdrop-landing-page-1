import React from 'react';
// import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import image1 from '../../../assets/image1.png';
import {
  Button,
  Text,
  Box,
  Flex,
  Input,
  HStack,
  VStack,
  Spacer,
  Image,
} from '@chakra-ui/react';

const Hero1 = () => {
  return (
    <Flex
      align="center"
      direction={{ base: 'column', md: 'row' }}
      p={{ base: '20', md: '55' }}
      justifyContent="space-between"
      mt={10}
    >
      <Box maxW="737px">
        <Text
          as="h1"
          fontSize={{ base: '1.5rem', md: '3.4rem' }}
          textAlign="center"
          mb="7"
          fontFamily="Pacifico, cursive"
        >
          <span style={{ color: '#4caf50' }}>Delicious</span> Deliveries,
          Delivered to your <span style={{ color: '#4caf50' }}>Doorstep!</span>
        </Text>
        <Text textAlign="center" fontSize={{ base: '0.8rem', md: '1.25rem' }}>
          Our mission is to bring the diverse flavors of your city to your table
          with the ease of a click. We partner with renowned local restaurants
          to ensure you experience the best the culinary has to offer.
        </Text>
        <VStack>
          <HStack
            as={'form'}
            border={'2px solid #4caf50'}
            // w="400px"
            width={{ base: '303px', md: '400px' }}
            px={{ base: '0', md: '5' }}
            borderRadius="12"
          >
            <Input
              type="text"
              placeholder="Search for popular restaurants"
              // _focus={{ borderColor: '#6e30b0' }}
              border={'none'}
              focusBorderColor="transparent"
              name="text"
              py="1.5rem"
              px="0.7rem"
              w="100%"
              sx={{
                '::placeholder': {
                  fontSize: '12px',
                  color: '#4caf50',
                },
              }}
            />
            <Button
              bg="#4caf50"
              color="white"
              _hover={{ bg: '#4caf50' }}
              type="submit"
              w="50%"
              borderRadius="10"
              // py="1.5rem"
            >
              Submit
            </Button>
          </HStack>
          <HStack spacing="15" mt="4">
            <ChakraLink
              as={RouterLink}
              target="_blank"
              to="https://drivers-landing-page.vercel.app/"
              color="#4caf50"
              textDecoration="underline"
              fontSize={{ base: '13px', md: '16px' }}
            >
              Want to be a swift rider?
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              target="_blank"
              to="https://new-swift.vercel.app/"
              color="#4caf50"
              textDecoration="underline"
              fontSize={{ base: '13px', md: '16px' }}
            >
              Register your Restaurant
            </ChakraLink>
          </HStack>
        </VStack>
      </Box>
      <Image src={image1} alt="" width={400} mt={{ base: '10', md: '0' }} />
    </Flex>
  );
};

export default Hero1;
