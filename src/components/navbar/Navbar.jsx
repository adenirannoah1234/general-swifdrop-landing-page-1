import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  HStack,
  Button,
  Image,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
const CustomNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ md: '4', base: '0' }}
      bg={{ md: '#dbffdc' }}
      color="#4caf50"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
    >
      <Flex
        bg="#dbffdc"
        p={2}
        borderRadius="md"
        display="flex"
        alignItems="center"
        justify="space-between"
        width={{ md: 'auto', base: '100%' }}
      >
        <Flex>
          <Image src="/swiftlogo.png" alt="Logo" w={12} h={12} />
          <Text fontSize="xl" fontWeight="bold" mt={2} ml={3}>
            Swiftdrop
          </Text>
        </Flex>
        {isMobile && (
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={toggleMenu}
            fontSize="1.875rem"
          />
        )}
      </Flex>
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        mt={{ base: isOpen ? 4 : 0, md: 0 }}
        bg={{ base: isOpen ? 'white' : 'inherit', md: 'inherit' }}
        p={{ base: isOpen ? 4 : 0, md: 0 }}
        borderRadius={{ base: isOpen ? 'md' : 'none', md: 'none' }}
        flexGrow={1}
      >
        <HStack
          spacing={6}
          justify={{ md: 'center', base: 'flex-start' }}
          align={{ md: 'center', base: 'flex-start' }}
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <HStack spacing={4}>
            <Image
              src="/Home.png"
              display={{ md: 'none', base: 'flex' }}
              w={10}
            />
            <ChakraLink
              as={RouterLink}
              color={location.pathname === '/' ? '#4caf50' : 'black'}
              to="/"
              fontWeight="700"
            >
              Home
            </ChakraLink>
          </HStack>

          <HStack spacing={4}>
            <Image
              src="/Services.png"
              display={{ md: 'none', base: 'flex' }}
              w={10}
            />
            <ChakraLink
              as={RouterLink}
              color={location.pathname === '/services' ? '#4caf50' : 'black'}
              to="/services"
              fontWeight="700"
            >
              Services
            </ChakraLink>
          </HStack>

          <HStack spacing={4}>
            <Image
              src="/About.png"
              display={{ md: 'none', base: 'flex' }}
              w={10}
            />
            <ChakraLink
              as={RouterLink}
              color={location.pathname === '/about' ? '#4caf50' : 'black'}
              to="/about"
              fontWeight="700"
            >
              About
            </ChakraLink>
          </HStack>
          <HStack spacing={4}>
            <Image
              src="/Features.png"
              display={{ md: 'none', base: 'flex' }}
              w={10}
            />
            <ChakraLink
              as={RouterLink}
              color={location.pathname === '/features' ? '#4caf50' : 'black'}
              to="/features"
              fontWeight="700"
            >
              Feature
            </ChakraLink>
          </HStack>
        </HStack>
      </Box>
      <HStack spacing={4} display={{ md: 'flex', base: 'none' }}>
        <SearchIcon w={6} h={6} />
        <img src="/Divider.png" alt="" />
        <Button
          bg="#4caf50"
          color="white"
          _hover={{ bg: '#4caf50' }}
          py={2}
          px={4}
          borderRadius="md"
        >
          Learn More
        </Button>
      </HStack>
    </Flex>
  );
};

export default CustomNavbar;
