import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/image1.png';
import {
  Button,
  Text,
  Box,
  Flex,
  Input,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Hero3 = () => {
  return (
    <Flex
      align="center"
      p={{ base: '20', md: '55' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box>
        <Text
          as="h1"
          fontSize={{ base: '1.5rem', md: '3.3rem' }}
          textAlign="center"
          mb="7"
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
            w="400px"
            px="5"
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
              px="1rem"
              w="100%"
              sx={{
                '::placeholder': {
                  fontSize: '14px',
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
          <HStack spacing="15">
            <ChakraLink
              as={RouterLink}
              // to="/about"
              color="blue.500"
              textDecoration="underline"
            >
              Want to be a swift rider?
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              // to="/about"
              color="blue.500"
              textDecoration="underline"
            >
              Register your Restaurant
            </ChakraLink>
          </HStack>
        </VStack>
      </Box>
      <img src={image1} alt="" width={400} />
    </Flex>
  );
};

export default Hero3;
