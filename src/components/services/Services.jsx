import React from 'react';
import {
  HStack,
  VStack,
  Heading,
  Button,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Restaurant from '../../../public/Restaurant.png';
import { Link } from 'react-router-dom';
const Services = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <VStack p={{ base: '0', md: '55' }}>
      <Heading fontSize="3rem">Our Services</Heading>
      <HStack HStack spacing="9" flexDirection={columnDirection}>
        <VStack spacing="5" p={{ md: '0', base: '10' }}>
          <img src={Restaurant} alt="" />
          <Text as="h1" textAlign="center" fontSize="1.5rem">
            Register your restaurant
          </Text>
          <Text textAlign="center">
            Elevate your business with SwifDrop! Partner with us to boost sales,
            and unlock new opportunities
          </Text>
          <Button
            bg="#4caf50"
            color="white"
            _hover={{ bg: '#4caf50' }}
            w="80%"
            py="1.5rem"
            borderRadius="20"
            as={Link}
            to="https://new-swift.vercel.app/"
          >
            Register your store
          </Button>
        </VStack>
        <VStack
          spacing="5"
          backgroundColor={{ md: 'white', base: '#dbffdc' }}
          p={{ md: '0', base: '10' }}
        >
          <img src="/Driver vector.png" alt="" />
          <Text as="h1" textAlign="center" fontSize="1.5rem">
            Become our rider
          </Text>
          <Text textAlign="center">
            Indulge in flexibility, seize freedom, and earn competitively as you
            deliver with SwifDrop.
          </Text>
          <Button
            bg="#4caf50"
            color="white"
            _hover={{ bg: '#4caf50' }}
            w="80%"
            py="1.5rem"
            borderRadius="20"
            as={Link}
            to="https://drivers-landing-page.vercel.app/"
          >
            Start earning
          </Button>
        </VStack>
        <VStack spacing="5" p={{ md: '0', base: '10' }}>
          <img src="/Group 70.png" alt="" />
          <Text as="h1" textAlign="center" fontSize="1.5rem">
            Career
          </Text>
          <Text textAlign="center">
            Want to be part of us and contribute to the amazing work we’re doing
          </Text>
          <Button
            bg="#4caf50"
            color="white"
            _hover={{ bg: '#4caf50' }}
            w="80%"
            py="1.5rem"
            borderRadius="20"
          >
            Apply Now
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Services;
