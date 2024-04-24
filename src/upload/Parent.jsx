// import React, { useState } from 'react';
// import {
//   Flex,
//   Text,
//   Icon,
//   HStack,
//   Button,
//   Image,
//   Box,
//   Container,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
// import swiftlogo from '../../assets/swiftlogo.png';
// import divider from '../../assets/Divider.png';
// import Home from '../../../public/Home.png';
// import About from '../../../public/About.png';
// import Services from '../../../public/Services.png';
// import { Link as ChakraLink } from '@chakra-ui/react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';

// function CustomNavbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });
//   const menuAlign = showMenu ? 'flex-start' : 'space-between';
//   const isSmallScreen = useBreakpointValue({ base: true, md: false });

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       maxW="100%"
//       p={5}
//       bg={{ md: '#dbffdc', base: 'white' }}
//       color="#4caf50"
//     >
//       {/* Logo and Menu Toggle */}
//       <Flex align="center" bg={{ md: '#dbffdc', base: '#dbffdc' }}>
//         <Image src={swiftlogo} alt="logo" className="logo" w={10} />
//         <Text ml={2} fontSize="1.25rem">
//           Swif<span>drop</span>
//         </Text>
//       </Flex>

//       {/* Hamburger Icon */}
//       <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
//         {showMenu ? (
//           <CloseIcon fill="#4caf50" w="24px" h="24px" />
//         ) : (
//           <svg
//             fill="#4caf50"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             width="24px"
//             height="24px"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         )}
//       </Box>

//       {/* Menu Items */}
//       <Box
//         display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
//         mt={{ base: isOpen ? 4 : 0, md: 0 }}
//         bg={{ base: isOpen ? 'white' : 'inherit', md: 'inherit' }}
//         p={{ base: isOpen ? 4 : 0, md: 0 }}
//         borderRadius={{ base: isOpen ? 'md' : 'none', md: 'none' }}
//         flexGrow={1}
//       >
//         <Flex
//           spacing={6} justify="center" align="center" w="100%"
//         >
//           <HStack spacing={4}>
//             <Image
//               src="/Home.png"
//               display={{ md: 'none', base: 'flex' }}
//               w={10}
//             />
//             <ChakraLink
//               as={RouterLink}
//               color={location.pathname === '/' ? '#4caf50' : 'black'}
//               to="/"
//               fontWeight="700"
//             >
//               Home
//             </ChakraLink>
//           </HStack>

//           <HStack spacing={4}>
//             <Image
//               src="/Services.png"
//               display={{ md: 'none', base: 'flex' }}
//               w={10}
//             />
//             <ChakraLink
//               as={RouterLink}
//               color={location.pathname === '/services' ? '#4caf50' : 'black'}
//               to="/services"
//               fontWeight="700"
//             >
//               Services
//             </ChakraLink>
//           </HStack>

//           <HStack spacing={4}>
//             <Image
//               src="/About.png"
//               display={{ md: 'none', base: 'flex' }}
//               w={10}
//             />
//             <ChakraLink
//               as={RouterLink}
//               color={location.pathname === '/about' ? '#4caf50' : 'black'}
//               to="/about"
//               fontWeight="700"
//             >
//               About
//             </ChakraLink>
//           </HStack>
//           <HStack spacing={4}>
//             <Image
//               src="/Features.png"
//               display={{ md: 'none', base: 'flex' }}
//               w={10}
//             />
//             <ChakraLink
//               as={RouterLink}
//               color={location.pathname === '/features' ? '#4caf50' : 'black'}
//               to="/features"
//               fontWeight="700"
//             >
//               Feature
//             </ChakraLink>
//           </HStack>
//         </Flex>
//       </Box>
//       {!isSmallScreen && (
//         <HStack spacing={7}>
//           <SearchIcon w="50px" fontSize="2rem" color="#4caf50" />
//           <Image src={divider} alt="" />
//           <Button
//             bg="#4caf50"
//             color="white"
//             _hover={{ bg: '#4caf50' }}
//             py="1.5rem"
//             w="50%"
//             borderRadius="5"
//             px="1.5rem"
//           >
//             Learn More
//           </Button>
//         </HStack>
//       )}
//     </Flex>
//   );
// }

// export default CustomNavbar;
import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
import ImageCropperModal from './Upload'; // Assuming the modal component is in a separate file

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const handleSelectImage = () => {
    setIsModalOpen(true); // Open the modal when "Select Image" button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const updateFoodImage = (imageSrc) => {
    avatarUrl.current = imageSrc;
  };
  return (
    <Box h="700px">
      {/* Button to trigger image selection */}
      <Button onClick={handleSelectImage}>Select Image</Button>
      {/* Render the modal */}
      <ImageCropperModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        updateFoodImage={updateFoodImage}
        // src={selectedImageFile ? URL.createObjectURL(selectedImageFile) : null}
      />
    </Box>
  );
};

export default ParentComponent;
