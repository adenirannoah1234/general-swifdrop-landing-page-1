import React from 'react';
import {
  HStack,
  VStack,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import iphone from '../../../public/iphone.png';
import App from '../../../public/App Store.png';
import play from '../../../public/Play Store.png';
import { Image } from '@chakra-ui/react';
const Download = () => {
  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <VStack p={{ base: '10', md: '10' }} bg="#dbffdc">
      <VStack>
        <Text fontWeight="700" fontSize={{ base: '2.1rem', md: '2.5rem' }}>
          Download SwifDrop
        </Text>
        <Text fontWeight="400" fontSize={{ base: '0.9rem', md: '1.125rem' }}>
          Enjoy swift deliveries on anything you order!
        </Text>
      </VStack>

      <Flex justify="center" direction={{ base: 'column', md: 'row' }}>
        <Image src={iphone} alt="" w="527px" />
        <HStack spacing={10} mt={{ base: '10', md: '0' }} justify="center">
          <Image src={App} alt="" width={{ base: '170px', md: '200px' }} />
          <Image src={play} alt="" width={{ base: '170px', md: '200px' }} />
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Download;
