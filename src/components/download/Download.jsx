import React from 'react';
import { HStack, VStack, Flex, Text } from '@chakra-ui/react';
import iphone from '../../../public/iphone.png';
import App from '../../../public/App Store.png';
import play from '../../../public/Play Store.png';
const Download = () => {
  return (
    <VStack>
      <VStack>
        <Text>Download SwifDrop</Text>
        <Text>Enjoy swift deliveries on anything you order!</Text>
      </VStack>
      <HStack>
        <img src={iphone} alt="" />
        <HStack>
          <img src={App} alt="" />
          <img src={play} alt="" />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Download;
