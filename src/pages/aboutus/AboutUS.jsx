import React from 'react';
import { Image, Text, VStack, Box, ListItem, List } from '@chakra-ui/react';

const AboutUS = () => {
  return (
    <Box mt={10}>
      <Image src="/aboutheading.png" h={150} w={1440} />
      <Box p={{ md: '50px', base: '20px' }}>
        <Text>
          At SwifDrop, we believe in connecting people through the joy of food.
          Founded with a vision to revolutionize the way communities experience
          local dining, we are committed to providing a seamless and convenient
          platform that brings together local restaurants, passionate riders,
          and discerning food lovers
        </Text>
        <Text fontSize="1.25rem">Our Mission:</Text>
        <Text>
          Our mission is simple yet powerful—to empower local businesses, enable
          flexible opportunities for gig workers, and delight customers with
          exceptional dining experiences, one delivery at a time.
        </Text>
        <Text mb={4} fontSize="1.25rem">
          What Sets Us Apart:{' '}
        </Text>
        <List spacing={1} styleType="disc">
          <ListItem>
            Local Focus: We are deeply rooted in the communities we serve,
            celebrating the diverse flavors and cultures of local cuisine while
            supporting small businesses and entrepreneurs.
          </ListItem>
          <ListItem>
            Innovation: We leverage cutting-edge technology and data-driven
            insights to optimize every aspect of the food delivery experience,
            from order placement to delivery tracking.
          </ListItem>
          <ListItem>
            Commitment to Quality: We prioritize quality and reliability in
            everything we do, ensuring that every meal delivered through
            SwifDrop meets the highest standards of freshness, taste, and
            presentation.
          </ListItem>
          <ListItem>
            Empowerment: We are passionate about creating opportunities for
            individuals to thrive in the gig economy, providing flexible earning
            opportunities and fostering a supportive and inclusive community for
            our riders.
          </ListItem>
        </List>
        <Text mb={4} fontSize="1.25rem">
          Our Promise:
        </Text>
        <List spacing={1} styleType="disc">
          <ListItem>
            Convenience: Whether you're craving comfort food from your favorite
            local diner or exploring new culinary adventures, SwifDrop makes it
            easy to satisfy your cravings with just a few taps on your device.
          </ListItem>
          <ListItem>
            Reliability: With SwifDrop, you can trust that your order will
            arrive on time and exactly as you requested, thanks to our dedicated
            team of riders and robust logistics infrastructure.
          </ListItem>
          <ListItem>
            Community: We are more than just a delivery service—we are a
            community of food enthusiasts, local businesses, and riders who
            share a passion for great food and meaningful connections.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.25rem">Join Us:</Text>
        <Text>
          Whether you're a hungry diner looking for your next delicious meal, a
          local restaurant eager to expand your reach, or a rider seeking
          flexible earning opportunities, we invite you to join the SwifDrop
          family and be part of our journey to redefine the future of food
          delivery. Together, let's make every meal memorable. Welcome to
          SwifDrop.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUS;
