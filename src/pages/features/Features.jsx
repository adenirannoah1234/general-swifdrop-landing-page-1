import React from 'react';
import { Image, Text, VStack, Box, ListItem, List } from '@chakra-ui/react';
const Features = () => {
  return (
    <Box>
      <Image src="/featuresh.png" h={150} w={1440} />
      <Box p={{ md: '50px', base: '25' }}>
        <Text mb={4} fontSize="1.125rem">
          SwifDrop Features:{' '}
        </Text>
        <List styleType="decimal" spacing={1}>
          <ListItem>
            User-Friendly Interface: Our intuitive app and website make it easy
            for users to browse menus, place orders, and track deliveries with
            just a few taps or clicks.
          </ListItem>
          <ListItem>
            Restaurant Selection: Explore a diverse range of restaurants in your
            area, from beloved local favorites to trending culinary hotspots,
            all conveniently accessible in one platform.
          </ListItem>
          <ListItem>
            Customized Ordering: Tailor your orders to your preferences, with
            options for special instructions, dietary restrictions, and meal
            customizations to ensure a personalized dining experience.
          </ListItem>
          <ListItem>
            Real-Time Tracking: Stay informed every step of the way with
            real-time order tracking, allowing you to monitor the status of your
            delivery from the moment it's placed until it arrives at your
            doorstep.
          </ListItem>
          <ListItem>
            Secure Payments: Enjoy peace of mind with secure payment options,
            including credit/debit cards, mobile wallets, and other digital
            payment methods, ensuring a seamless and hassle-free transaction
            process.
          </ListItem>
          <ListItem>
            Rating and Reviews: Share your feedback and experiences with other
            users by leaving ratings and reviews for restaurants and delivery
            services, helping to maintain transparency and accountability within
            the SwifDrop community.
          </ListItem>
          <ListItem>
            Promotions and Discounts: Take advantage of exclusive promotions,
            discounts, and loyalty rewards offered by participating restaurants
            and SwifDrop partners, making every meal a rewarding experience.
          </ListItem>
          <ListItem>
            Customer Support: Access dedicated customer support channels,
            including live chat, email, and phone support, to address any
            inquiries, concerns, or issues you may encounter during your dining
            journey.
          </ListItem>
          <ListItem>
            Restaurant Partnerships: Partner with SwifDrop as a local restaurant
            to expand your customer base, increase sales, and streamline your
            delivery operations through our innovative platform and dedicated
            support services.
          </ListItem>
          <ListItem>
            Rider Opportunities: Join our team of passionate riders and enjoy
            flexible earning opportunities, competitive compensation, and access
            to valuable resources and training to excel in the gig economy.
          </ListItem>
          <ListItem>
            Data Privacy: Rest assured that your privacy and data security are
            our top priorities. We employ robust encryption and data protection
            measures to safeguard your personal information and ensure a safe
            and secure dining experience.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Features;
