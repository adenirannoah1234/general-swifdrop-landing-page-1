// import { useState, useRef, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Flex,
//   Text,
//   VStack,
//   Image,
//   InputGroup,
//   Icon,
//   InputRightElement,
//   InputLeftElement,
// } from '@chakra-ui/react';
// import { Link, useNavigate } from 'react-router-dom';
// import { geocode } from 'react-geocode';
// import { setKey } from 'react-geocode';
// import image4 from '../../Assets/Image4.svg';
// import restlogo from '../../Assets/restlogo.png';
// import edit from '../../Assets/edit.png';
// import cloud from '../../Assets/cloud.png';
// import { IoLocation } from 'react-icons/io5';
// import { TbStarFilled } from 'react-icons/tb';
// import BG from '../../Assets/BG.png';
// import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import usePasswordToggle from '../hooks/usePassworToggle';
// import { Grid, GridItem } from '@chakra-ui/react';
// import Success from './success';

// const extractPostalCode = (place) => {
//   let postalCode = null;
//   if (place.address_components) {
//     place.address_components.forEach((component) => {
//       if (component.types.includes('postal_code')) {
//         postalCode = component.long_name;
//       }
//     });
//   }
//   return postalCode;
// };
// const removeLeadingTrailingCommas = (str) => {
//   console.log('Input string:', str);
//   const result = str.replace(/(^,)|(,$)/g, ''); // Remove leading and trailing commas
//   console.log('Output string:', result);
//   return result;
// };

// export default function SignupPage() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [restaurantName, setRestaurantName] = useState('');
//   const [restaurantLogo, setRestaurantLogo] = useState(null);
//   const [logoUrl, setLogoUrl] = useState(null);
//   const [restaurantImage, setRestaurantImage] = useState(null);
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [location, setLocation] = useState('');
//   const [formErrors, setFormErrors] = useState({});
//   const [showSpinner, setShowSpinner] = useState(false);
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   setKey('AIzaSyDE83Koe2R_WZ1oOAt5SDicYKUBcBFLwy0');
//   // const geocodeInstance = geocode;
//   const { showPassword, togglePasswordVisibility } = usePasswordToggle();

//   const addressInputRef = useRef(null);
//   const logoFileInputRef = useRef(null);
//   const imageFileInputRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const autocomplete = new window.google.maps.places.Autocomplete(
//       addressInputRef.current
//     );

//     autocomplete.setFields(['address_components', 'geometry']);

//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();
//       if (!place.geometry) {
//         return;
//       }
//       setLocation(addressInputRef.current.value);
//     });

//     // Additional event listener to detect manual changes in input field
//     const handleInputChange = () => {
//       handleLocationChange({
//         target: { value: addressInputRef.current.value },
//       });
//     };

//     addressInputRef.current.addEventListener('input', handleInputChange);

//     // Cleaning up event listener when component unmounts
//     return () => {
//       if (addressInputRef.current) {
//         addressInputRef.current.removeEventListener('input', handleInputChange);
//       }
//     };
//   }, []);

//   const handleFileIconClick = (inputRef) => {
//     inputRef.current.click();
//   };

//   const handleLogoInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setRestaurantLogo(file);
//       setLogoUrl(URL.createObjectURL(file));
//       console.log('Selected Logo File:', file);
//     }
//   };

//   const handleImageInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setRestaurantImage(file);
//       console.log('Selected Image File:', file);
//     }
//   };

//   const handleLocationChange = (e) => {
//     const value = e.target.value;
//     console.log('New location value:', value);

//     // Use removeLeadingTrailingCommas to remove leading and trailing commas
//     const newValue = removeLeadingTrailingCommas(value);

//     console.log('Processed location value:', newValue);
//     setLocation(newValue); // Updating the location state with the processed value
//   };

//   const validateField = (fieldName, value) => {
//     if (!value.trim()) {
//       return `${fieldName} is required`;
//     }
//     return '';
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = {};
//     const fieldsToValidate = [
//       { fieldName: 'First name', value: firstName },
//       { fieldName: 'Last name', value: lastName },
//       { fieldName: 'Restaurant name', value: restaurantName },
//       { fieldName: 'Email', value: email },
//       { fieldName: 'Phone number', value: phoneNumber },
//       { fieldName: 'Password', value: password },
//       { fieldName: 'Confirm Password', value: confirmPassword },
//       { fieldName: 'Registration number', value: registrationNumber },
//       { fieldName: 'Location', value: location },
//       { fieldName: 'Restaurant Logo', value: restaurantLogo },
//       { fieldName: 'Restaurant Image', value: restaurantImage },
//     ];

//     fieldsToValidate.forEach(({ fieldName, value }) => {
//       if (fieldName === 'Restaurant Logo' || fieldName === 'Restaurant Image') {
//         if (!value) {
//           errors[
//             fieldName.toLowerCase().replace(' ', '')
//           ] = `${fieldName} is required`;
//         }
//       } else {
//         const error = validateField(fieldName, value);
//         if (error) {
//           errors[fieldName.toLowerCase().replace(' ', '')] = error;
//         }
//       }
//     });

//     setFormErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       setShowSpinner(true);
//       // geocode({ address: processedAddress })
//       //   .then((response) => {
//       //     console.log('Geocoding Response:', response);
//       //     // Handle response and call register function if necessary
//       //   })
//       //   .catch((error) => {
//       //     console.error('Geocoding Error:', error);
//       //     // Handle geocoding error
//       //   })
//       //   .finally(() => {
//       //     setShowSpinner(false);
//       //   });

//       register();
//     } else {
//       document
//         .querySelector('.error-message')
//         ?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const register = async () => {
//     try {
//       console.log('Restaurant Logo:', restaurantLogo);

//       const response = await geocode('address', location);
//       console.log(response);

//       const lat = response.results[0].geometry.location.lat;
//       const lng = response.results[0].geometry.location.lng;
//       const postalCode = extractPostalCode(response.results[0]);

//       const formData = new FormData();
//       formData.append('latitude', lat);
//       formData.append('longitude', lng);
//       formData.append('firstname', firstName);
//       formData.append('lastname', lastName);
//       formData.append('email', email);
//       formData.append('restaurantName', restaurantName);
//       formData.append('password', password);
//       formData.append('phoneNumber', phoneNumber);
//       formData.append('address', location);
//       formData.append('code', postalCode);
//       formData.append('logo', restaurantLogo);
//       formData.append('image', restaurantImage);

//       const registerResponse = await fetch(
//         'https://swifdropp.onrender.com/api/v1/restaurant',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       );

//       if (registerResponse.ok) {
//         const responseData = await registerResponse.json();
//         console.log('Registration successful:', responseData);
//         setRegistrationSuccess(true); // <-- Update state

//         // navigate('/signin');
//       } else {
//         const errorData = await registerResponse.json();
//         console.error('Registration failed:', errorData);

//         if (errorData.error) {
//           setFormErrors({ serverError: errorData.error });
//         }
//       }
//     } catch (error) {
//       console.error('Error registering restaurant:', error);
//       setFormErrors({ serverError: 'Network error. Please try again later.' });
//     } finally {
//       setShowSpinner(false);
//     }
//   };

//   return (
//     <Flex justify="center" justifyContent="space-between">
//       {registrationSuccess ? (
//         <Success />
//       ) : (
//         <>
//           <VStack bg="#4CAF50" w="600px">
//             <Box mt="7">
//               <img src={image4} alt="" width={450} height={500} />
//             </Box>
//             <Flex flexDirection="column" alignItems="center" mt="4">
//               <Flex color="#FDE047" style={{ marginRight: '230px' }}>
//                 <TbStarFilled />
//                 <TbStarFilled />
//                 <TbStarFilled />
//                 <TbStarFilled />
//                 <TbStarFilled />
//               </Flex>
//               <Text
//                 as="h1"
//                 width="300px"
//                 mt="4"
//                 fontSize="0.8rem"
//                 color="#FFFFFF"
//               >
//                 "We love Swiftdrop we've been getting and managing orders
//                 seamlessly, it's definitely a restaurant's dream come true"
//               </Text>
//               <Flex alignItems="center" mt="3" style={{ marginRight: '100px' }}>
//                 <img src={BG} alt="" />
//                 <VStack ml={2}>
//                   <Text color="#FFFFFF">Fiyin Oladejo</Text>
//                   <Text color="#CBD5E1">Founder, Tasty Natives</Text>
//                 </VStack>
//               </Flex>
//             </Flex>
//           </VStack>
//           <VStack w="600px">
//             <Text color="#1E1E1E" as="h1" fontSize="3rem" fontWeight="600">
//               Become our Partner
//             </Text>

//             <VStack as={'form'} onSubmit={handleSubmit}>
//               <Box position="relative" width="50px" height="50px" mb="5">
//                 <FormControl isInvalid={!!formErrors.restaurantlogo}>
//                   <Image
//                     src={logoUrl ? logoUrl : restlogo}
//                     alt="Restaurant Logo"
//                     width="100%"
//                     height="100%"
//                     // borderRadius="100%"
//                   />

//                   <Image
//                     src={edit}
//                     alt="Edit"
//                     bg="#4CAF50"
//                     position="absolute"
//                     bottom="1px"
//                     right="5px"
//                     cursor="pointer"
//                     w="15px"
//                     borderRadius="20px"
//                     onClick={() => handleFileIconClick(logoFileInputRef)}
//                   />

//                   {/* File input */}
//                   <input
//                     type="file"
//                     accept="image/*"
//                     style={{ display: 'none' }}
//                     ref={logoFileInputRef}
//                     onChange={handleLogoInputChange}
//                   />
//                 </FormControl>
//               </Box>

//               <Grid templateColumns="repeat(2, 1fr)" gap="2">
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.firstname}>
//                     <FormLabel>First name</FormLabel>
//                     <Input
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={
//                         formErrors.firstName
//                           ? '2px solid red'
//                           : '2px solid lightgrey'
//                       }
//                       focusBorderColor="transparent"
//                       name="name"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.firstname && (
//                       <Text color="red.500">{formErrors.firstname}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.lastname}>
//                     <FormLabel>Last name</FormLabel>
//                     <Input
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={'2px solid lightgrey'}
//                       focusBorderColor="transparent"
//                       name="name"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.lastname && (
//                       <Text color="red.500">{formErrors.lastname}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.restaurantname}>
//                     <FormLabel>Restaurant's name</FormLabel>
//                     <Input
//                       value={restaurantName}
//                       onChange={(e) => setRestaurantName(e.target.value)}
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={'2px solid lightgrey'}
//                       focusBorderColor="transparent"
//                       name="text"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.restaurantname && (
//                       <Text color="red.500">{formErrors.restaurantname}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.restaurantlogo}>
//                     <FormLabel>Restaurant image</FormLabel>
//                     <InputGroup>
//                       <Input
//                         readOnly
//                         value={restaurantImage ? restaurantImage.name : ''}
//                         _focus={{ borderColor: '#4CAF50' }}
//                         placeholder="Upload Image"
//                         border={'2px solid lightgrey'}
//                         focusBorderColor="transparent"
//                         name="file"
//                         py="1rem"
//                         px="1rem"
//                         w="90%"
//                         onClick={() => handleFileIconClick(imageFileInputRef)}
//                         sx={{
//                           '::placeholder': {
//                             fontSize: '1rem',
//                             textAlign: 'center',
//                             fontWeight: '700',
//                             color: '#4CAF50',
//                           },
//                         }}
//                       />
//                       <InputLeftElement
//                         pointerEvents="none"
//                         top="0.154rem"
//                         fontSize="10px"
//                         marginLeft="0.2rem"
//                         h="2rem"
//                         bg="white"
//                         // children={<Icon as={BiCloudUpload} color="#4CAF50" />}
//                         children={<Image src={cloud} alt="cloud" w={5} />}
//                       />
//                     </InputGroup>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleImageInputChange}
//                       style={{ display: 'none' }}
//                       ref={imageFileInputRef}
//                     />
//                     {formErrors.restaurantimage && (
//                       <Text color="red.500">{formErrors.restaurantimage}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>

//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.email}>
//                     <FormLabel>Email</FormLabel>
//                     <Input
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       type="email"
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={'2px solid lightgrey'}
//                       focusBorderColor="transparent"
//                       name="email"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.email && (
//                       <Text color="red.500">{formErrors.email}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.phonenumber}>
//                     <FormLabel>Phone number</FormLabel>
//                     <Input
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       type="tel"
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={'2px solid lightgrey'}
//                       focusBorderColor="transparent"
//                       name="tel"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.phonenumber && (
//                       <Text color="red.500">{formErrors.phonenumber}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.password}>
//                     <FormLabel>Password</FormLabel>

//                     <InputGroup
//                       width="90%"
//                       height="2.5rem"
//                       borderRadius="0.3rem"
//                       paddingRight="0.6rem"
//                       paddingLeft="0.6rem"
//                       border={`${
//                         !!formErrors.password
//                           ? '3px solid red'
//                           : '2px solid lightgrey'
//                       }`}
//                       display="flex"
//                       alignItems="center"
//                       _focus={{
//                         outline: 'none',
//                         border: 'none',
//                       }}
//                       justifyContent="center"
//                       _groupFocus={{
//                         border: '1.4px solid #4CAF50',
//                         outline: '1.4px solid #4CAF50',
//                       }}
//                     >
//                       <Input
//                         // w="100%"
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter password"
//                         border="none"
//                         outline="none"
//                         // border={`${
//                         //   !!formErrors.password
//                         //     ? '3px solid red'
//                         //     : '2px solid lightgrey'
//                         // }`}
//                         // paddingRight="2.3rem"
//                         _focus={{
//                           outline: 'none',
//                           border: 'none',
//                         }}
//                         _hover={{
//                           outline: 'none',
//                           border: 'none',
//                         }}
//                         focusBorderColor="transparent"
//                         // sx={{
//                         //   '::placeholder': {
//                         //     fontSize: '14px',
//                         //     color: '#a89f98',
//                         //   },
//                         // }}
//                       />

//                       <InputRightElement
//                         border="none"
//                         outline="none"
//                         // top="0.2rem"
//                         paddingRight="0.6rem"
//                         cursor="pointer"
//                       >
//                         {showPassword ? (
//                           <Icon
//                             as={BsEyeSlash}
//                             onClick={togglePasswordVisibility}
//                             style={{
//                               fontWeight: 'light',
//                               color: '#a89f98',
//                               width: '1.5rem',
//                               height: '1.5rem',
//                             }}
//                           />
//                         ) : (
//                           <Icon
//                             as={BsEye}
//                             onClick={togglePasswordVisibility}
//                             style={{
//                               fontWeight: 'light',
//                               color: '#a89f98',
//                               width: '1.5rem',
//                               height: '1.5rem',
//                             }}
//                           />
//                         )}
//                       </InputRightElement>
//                     </InputGroup>

//                     {formErrors.password && (
//                       <Text color="red.500">{formErrors.password}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.confirmpassword}>
//                     <FormLabel>Confirm Password</FormLabel>
//                     <Input
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       type="password"
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={'2px solid lightgrey'}
//                       focusBorderColor="transparent"
//                       name="password"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.confirmpassword && (
//                       <Text color="red.500">{formErrors.confirmpassword}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>

//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.registrationnumber}>
//                     <FormLabel>CAC registration number</FormLabel>
//                     <Input
//                       value={registrationNumber}
//                       onChange={(e) => setRegistrationNumber(e.target.value)}
//                       _focus={{ borderColor: '#4CAF50' }}
//                       border={'2px solid lightgrey'}
//                       focusBorderColor="transparent"
//                       name="number"
//                       py="1rem"
//                       px="1rem"
//                       w="90%"
//                       sx={{
//                         '::placeholder': {
//                           fontSize: '14px',
//                           color: '#a89f98',
//                         },
//                       }}
//                     />
//                     {formErrors.registrationnumber && (
//                       <Text color="red.500">
//                         {formErrors.registrationnumber}
//                       </Text>
//                     )}
//                   </FormControl>
//                 </GridItem>

//                 <GridItem>
//                   <FormControl isInvalid={!!formErrors.location}>
//                     <FormLabel>Search location</FormLabel>
//                     <InputGroup>
//                       <InputLeftElement
//                         bg="white"
//                         top="0.13rem"
//                         h="36px"
//                         border="none"
//                         left="0.2rem"
//                         // paddingLeft="60px"
//                       >
//                         <Icon
//                           as={IoLocation}
//                           color="#979797"
//                           borderRadius="3"
//                         />
//                       </InputLeftElement>
//                       <Input
//                         defaultValue={location}
//                         // onChange={(e) => setLocation(e.target.value)}
//                         onChange={handleLocationChange}
//                         ref={addressInputRef}
//                         _focus={{ borderColor: '#4CAF50' }}
//                         border={'2px solid lightgrey'}
//                         focusBorderColor="transparent"
//                         py="1rem"
//                         px="1rem"
//                         w="90%"
//                         sx={{}}
//                       />
//                     </InputGroup>
//                     {formErrors.location && (
//                       <Text color="red.500">{formErrors.location}</Text>
//                     )}
//                   </FormControl>
//                 </GridItem>
//               </Grid>
//               {formErrors.serverError && (
//                 <Text color="red.500" mt={2}>
//                   {formErrors.serverError}
//                 </Text>
//               )}
//               {formErrors.restaurantlogo && (
//                 <Text color="red.500">{formErrors.restaurantlogo}</Text>
//               )}
//               <Button
//                 // align="center"
//                 bg="#4CAF50"
//                 color="white"
//                 _hover={{ bg: '#4CAF50' }}
//                 w="20%"
//                 py="1rem"
//                 type="submit"
//                 // colorScheme="blue"
//                 mt={2}
//                 isLoading={showSpinner}
//               >
//                 Sign up
//               </Button>
//             </VStack>
//             <Flex fontSize="0.875rem">
//               <Text fontSize="0.875rem">Already have an account?</Text>
//               <Link className="link1" to="/signin" style={{ color: '#2563EB' }}>
//                 Login
//               </Link>
//             </Flex>
//           </VStack>
//         </>
//       )}
//     </Flex>
//   );
// }
