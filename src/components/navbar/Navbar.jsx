import React, { useState } from 'react';
import {
  Flex,
  Text,
  Icon,
  HStack,
  Button,
  Image,
  Box,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import swiftlogo from '../../assets/swiftlogo.png';
import divider from '../../assets/Divider.png';
import Home from '../../../public/Home.png';
import About from '../../../public/About.png';
import Services from '../../../public/Services.png';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const menuAlign = showMenu ? 'flex-start' : 'space-between';
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      maxW="100%"
      p={5}
      bg="#dbffdc"
      color="#4caf50"
    >
      {/* Logo and Menu Toggle */}
      <Flex align="center">
        <Image src={swiftlogo} alt="logo" className="logo" w={10} />
        <Text ml={2} fontSize="1.25rem">
          Swif<span>drop</span>
        </Text>
      </Flex>

      {/* Hamburger Icon */}
      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {showMenu ? (
          <CloseIcon fill="#4caf50" w="24px" h="24px" />
        ) : (
          <svg
            fill="#4caf50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="24px"
            height="24px"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        )}
      </Box>

      {/* Menu Items */}
      <Box
        display={{ base: showMenu ? 'block' : 'none', md: 'flex' }}
        w={{ md: 'auto', base: '100%' }}
        // h="100%"
        mt={{ base: '2', md: '0' }}
        // alignItems="center"
        alignItems={{ base: 'flex-start', md: 'center' }} // Adjusted here
        justifyContent={{ base: 'flex-start', md: 'center' }}
        flexGrow={1}
        bg={isSmallScreen ? 'white' : 'transparent'}
      >
        <HStack spacing={4} flexDirection={columnDirection}>
          <HStack>
            {isSmallScreen && <Icon as={Home} w={10} h={10} />}
            <ChakraLink as={RouterLink} color="black" to="/">
              Home
            </ChakraLink>
          </HStack>
          <HStack>
            {isSmallScreen && <Icon as={Services} w={10} h={10} />}
            <ChakraLink as={RouterLink} color="black" to="/services">
              Services
            </ChakraLink>
          </HStack>

          <ChakraLink as={RouterLink} color="black" to="/About">
            About
          </ChakraLink>
          <ChakraLink as={RouterLink} color="black" to="/Features">
            Feature
          </ChakraLink>
        </HStack>
      </Box>

      {/* Additional Actions */}
      {!isSmallScreen && (
        <HStack spacing={7}>
          <SearchIcon w="50px" fontSize="2rem" color="#4caf50" />
          <Image src={divider} alt="" />
          <Button
            bg="#4caf50"
            color="white"
            _hover={{ bg: '#4caf50' }}
            py="1.5rem"
            w="50%"
            borderRadius="5"
            px="1.5rem"
          >
            Learn More
          </Button>
        </HStack>
      )}
    </Flex>
  );
}

export default CustomNavbar;
