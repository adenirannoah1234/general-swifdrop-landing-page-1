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
      <Flex justify="center" direction={{ base: 'column', md: 'row' }}>
        <VStack display={{ md: 'none', base: 'flex' }}>
          <Text fontWeight="700" fontSize={{ base: '2.1rem', md: '2.5rem' }}>
            Download SwifDrop
          </Text>
          <Text fontWeight="400" fontSize={{ base: '0.9rem', md: '1.125rem' }}>
            Enjoy swift deliveries on anything you order!
          </Text>
        </VStack>
        <Image src={iphone} alt="" w="527px" />
        {/* show at smaller screen sizes dont show at smaller screen sizes at all */}

        <VStack mt={'14'}>
          {/* dont show at smaller screen show only md */}
          <VStack display={{ base: 'none', md: 'flex' }}>
            <Text fontWeight="700" fontSize={{ base: '2.1rem', md: '2.5rem' }}>
              Download SwifDrop
            </Text>
            <Text
              fontWeight="400"
              fontSize={{ base: '0.9rem', md: '1.125rem' }}
            >
              Enjoy swift deliveries on anything you order!
            </Text>
          </VStack>
          <HStack spacing={10} mt={{ base: '10', md: '14' }} justify="center">
            <Image src={App} alt="" width={{ base: '170px', md: '200px' }} />
            <Image src={play} alt="" width={{ base: '170px', md: '200px' }} />
          </HStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Download;
