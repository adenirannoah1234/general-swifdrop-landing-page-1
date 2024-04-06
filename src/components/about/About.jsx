import React from 'react';
import {
  HStack,
  VStack,
  Text,
  Heading,
  Box,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import Bike from '../../../public/Bike delivery.png';
const About = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <VStack p={{ base: '10', md: '55' }} spacing="7" bg="#DBFFDC">
      <Heading fontSize="3rem">About us</Heading>
      <HStack spacing="9" flexDirection={columnDirection}>
        <img src={Bike} alt="" width={600} />
        <Box>
          <Text as="h1" color="#4CAF50" fontSize="2rem">
            Overview
          </Text>
          <Text fontSize={{ base: '0.987rem', md: '1.7rem' }}>
            Experience the fastest way to savor your favorites with our delivery
            app. Swift deliveries, guaranteed!
          </Text>
          <HStack spacing={4}>
            <Box>
              <Text fontSize="1.25rem" textAlign="center" fontWeight="600">
                5K+
              </Text>
              <Text color=" #4CAF50">Happy users</Text>
            </Box>
            <Box>
              <Text fontSize="1.25rem" textAlign="center" fontWeight="600">
                20+
              </Text>
              <Text color=" #4CAF50">Restaurants</Text>
            </Box>
            <Box>
              <Text fontSize="1.25rem" textAlign="center" fontWeight="600">
                50+
              </Text>
              <Text color=" #4CAF50">Food menu</Text>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default About;
