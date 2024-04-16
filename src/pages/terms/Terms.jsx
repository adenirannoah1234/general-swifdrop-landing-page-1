import React from 'react';
import { Image, Text, VStack, Box, ListItem, List } from '@chakra-ui/react';

const Terms = () => {
  return (
    <Box>
      <Image src="/terms.png" w={1440} h={150} />
      <Box p="50px">
        <Text>
          Welcome to SwifDrop! These Terms of Use ("Terms") govern your use of
          the SwifDrop website, mobile application, and services ("SwifDrop").
          By accessing or using SwifDrop, you agree to comply with these Terms.
          If you do not agree to these Terms, please do not use SwifDrop.
        </Text>
        <Text fontSize="1.125rem">1. Use of SwifDrop:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            You must be at least 13 years old to use SwifDrop. By using
            SwifDrop, you represent that you are at least 13 years old.{' '}
          </ListItem>
          <ListItem>
            You agree to use SwifDrop only for lawful purposes and in accordance
            with these Terms and all applicable laws and regulations.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">2. User Accounts:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            You may be required to create an account to access certain features
            of SwifDrop. You are responsible for maintaining the confidentiality
            of your account credentials and for all activities that occur under
            your account.
          </ListItem>
          <ListItem>
            You agree to provide accurate, current, and complete information
            when creating your account and to update your information promptly
            if it changes.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">3. Ordering and Deliveries:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            When placing orders through SwifDrop, you agree to provide accurate
            and complete information, including your delivery address, contact
            information, and payment details.{' '}
          </ListItem>
          <ListItem>
            You are responsible for reviewing and confirming your order details
            before submitting your order. Once an order is confirmed, it cannot
            be modified or canceled.{' '}
          </ListItem>
          <ListItem>
            Delivery times provided are estimates only and may vary depending on
            factors such as restaurant preparation time, traffic conditions, and
            weather.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">4. Intellectual Property:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            SwifDrop and its content, including logos, trademarks, text,
            graphics, images, and software, are owned by SwifDrop or its
            licensors and are protected by intellectual property laws.
          </ListItem>
          <ListItem>
            You may not use, reproduce, modify, distribute, or display any part
            of SwifDrop without our prior written consent.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">5. User Content:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            You may have the opportunity to submit content, such as reviews,
            ratings, or comments, through SwifDrop. By submitting content, you
            grant SwifDrop a non-exclusive, royalty-free, worldwide license to
            use, reproduce, modify, distribute, and display your content.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">6. Third-Party Links:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            SwifDrop may contain links to third-party websites or services that
            are not owned or controlled by SwifDrop. SwifDrop has no control
            over, and assumes no responsibility for, the content, privacy
            policies, or practices of any third-party websites or services.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">7. Limitation of Liability:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            To the fullest extent permitted by law, SwifDrop and its affiliates,
            officers, directors, employees, and agents will not be liable for
            any indirect, incidental, consequential, or punitive damages arising
            out of or in connection with your use of SwifDrop.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">8. Indemnification:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            You agree to indemnify and hold harmless SwifDrop and its
            affiliates, officers, directors, employees, and agents from any
            claims, damages, liabilities, and expenses (including attorneys'
            fees) arising out of or in connection with your use of SwifDrop or
            violation of these Terms.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">9. Changes to Terms:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            SwifDrop reserves the right to modify or update these Terms at any
            time without prior notice. The most current version of the Terms
            will be posted on SwifDrop. Your continued use of SwifDrop after any
            changes to the Terms constitutes your acceptance of the revised
            Terms.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">10. Governing Law:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            These Terms are governed by and construed in accordance with the
            laws of [Your Jurisdiction], without regard to its conflict of law
            provisions.
          </ListItem>
        </List>
        <Text>
          Thank you for using SwifDrop! We hope you enjoy your experience.{' '}
        </Text>
      </Box>
    </Box>
  );
};

export default Terms;
