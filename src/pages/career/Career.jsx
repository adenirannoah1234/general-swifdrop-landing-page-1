import React from 'react';
import { Image, VStack, Box, Input, Button, HStack } from '@chakra-ui/react';

const Career = () => {
  return (
    <Box mt={10}>
      <Image src="/career.png" w={1440} h={150} />
      <VStack py="50px">
        <Image src="/bro.png" width={{ md: 'auto', base: '90%' }} />
        <HStack
          as={'form'}
          maxW="563px"
          flexDirection={{ md: 'row', base: 'column' }}
          mt="20"
        >
          <Input
            type="text"
            placeholder="Enter  e-mail to recieve  career updates!"
            _focus={{ borderColor: '#4caf50' }}
            border="2px solid #4caf50"
            focusBorderColor="transparent"
            borderRadius="12px"
            name="text"
            py="1.5rem"
            px="1rem"
            // w="457px"
            width={{ md: '457px', base: '300px' }}
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
            px="10"
            width={{ md: 'auto', base: '300px' }}
            // w="50%"
            borderRadius="10"
          >
            Enter
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Career;
