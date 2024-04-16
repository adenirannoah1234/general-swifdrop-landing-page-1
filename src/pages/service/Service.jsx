import React from 'react';
import { Image, Text, VStack, Box, ListItem, List } from '@chakra-ui/react';

const Service = () => {
  return (
    <VStack>
      <Image src="/service.png" h={150} w={1440} />
      <Box p="50px">
        <Text fontSize="1.25rem" fontWeight="400" lineHeight="1.5">
          <span style={{ marginLeft: '20px' }}>S</span>wifdrop is your ultimate
          destination for seamless food delivery, connecting local restaurants
          directly to your doorstep. With our innovative platform, users can
          browse through a diverse range of cuisines from their favorite
          neighborhood eateries and have their meals delivered swiftly and
          conveniently.
        </Text>
        <Text mb={4} fontSize="1.25rem">
          For Users:
        </Text>
        <List spacing={1} styleType="disc">
          <ListItem>
            Explore Local Delights: Discover a variety of culinary delights from
            a curated selection of local restaurants in your area.
          </ListItem>
          <ListItem>
            Effortless Ordering: With just a few taps on our user-friendly app
            or website, place your order and track its status in real-time.
          </ListItem>
          <ListItem>
            Customizable Preferences: Tailor your orders to your dietary
            preferences and cravings, with options for special requests and
            modifications
          </ListItem>
          <ListItem>
            Secure Payments: Enjoy peace of mind with secure payment options,
            ensuring a smooth and hassle-free transaction every time.
          </ListItem>
        </List>
        <Text mb={4} fontSize="1.25rem">
          For Riders:{' '}
        </Text>
        <List spacing={1} styleType="disc">
          <ListItem>
            Flexible Opportunities: Join our team of dedicated riders and enjoy
            the flexibility to work on your schedule, earning competitive
            compensation for each delivery.
          </ListItem>
          <ListItem>
            Efficient Routing: Our advanced routing algorithms optimize your
            delivery routes, ensuring timely and efficient deliveries to our
            valued customers.{' '}
          </ListItem>
          <ListItem>
            Safety First: Rest assured, your safety is our top priority.
            SwifDrop provides comprehensive training and support, along with
            safety features built into our app to ensure a secure delivery
            experience.{' '}
          </ListItem>
          <ListItem>
            Earn Rewards: As a SwifDrop rider, you'll have access to exclusive
            rewards and incentives, making every delivery a rewarding
            experience.
          </ListItem>
        </List>
        <Text mb={4} fontSize="1.25rem">
          For Restaurants:{' '}
        </Text>
        <List spacing={1} styleType="disc">
          <ListItem>
            Expand Your Reach: Partner with SwifDrop to reach a wider audience
            of hungry customers in your local community, increasing your
            restaurant's visibility and sales.{' '}
          </ListItem>
          <ListItem>
            Seamless Integration: Our user-friendly platform seamlessly
            integrates with your existing restaurant operations, streamlining
            the ordering and delivery process for maximum efficiency.
          </ListItem>
          <ListItem>
            Marketing Support: Benefit from targeted marketing campaigns and
            promotions to showcase your menu offerings and attract new
            customers.{' '}
          </ListItem>
          <ListItem>
            Feedback and Analytics: Gain valuable insights into customer
            preferences and feedback, enabling you to optimize your menu
            offerings and enhance the overall dining experience.
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
};

export default Service;
