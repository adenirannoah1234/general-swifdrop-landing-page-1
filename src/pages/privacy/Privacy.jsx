import React from 'react';
import { Image, Text, VStack, Box, ListItem, List } from '@chakra-ui/react';
const Privacy = () => {
  return (
    <Box>
      <Image src="/privacy.png" h={150} w={1440} />
      <Box p={{ md: '50px', base: '25' }}>
        <Text>
          At SwifDrop, we are committed to protecting the privacy and security
          of our users. This Privacy Policy outlines how we collect, use,
          disclose, and protect your personal information when you use our
          website, mobile app, or services.
        </Text>

        <Text fontSize="1.125rem">1. Information We Collect:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            Personal Information: When you register an account with SwifDrop, we
            may collect personal information such as your name, email address,
            phone number, and payment details{' '}
          </ListItem>
          <ListItem>
            Usage Data: We may collect information about your interactions with
            our platform, including your browsing history, order preferences,
            and device information.
          </ListItem>
          <ListItem>
            Location Data: With your consent, we may collect your location data
            to provide location-based services, such as finding nearby
            restaurants or tracking deliveries.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">2. How to use your information:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            To Provide Services: We use your information to process orders,
            facilitate deliveries, and provide customer support.{' '}
          </ListItem>
          <ListItem>
            To Improve Services: We may analyze usage data to improve our
            platform, personalize user experiences, and develop new features.{' '}
          </ListItem>
          <ListItem>
            For Marketing Purposes: With your consent, we may send promotional
            emails, newsletters, or notifications about special offers,
            promotions, or events.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">3. How We Share Your Information:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            With Service Providers: We may share your information with
            third-party service providers who assist us in delivering our
            services, such as payment processors or delivery partners.{' '}
          </ListItem>
          <ListItem>
            With Partners: We may share your information with partner
            restaurants or affiliates to facilitate order fulfillment and
            delivery.{' '}
          </ListItem>
          <ListItem>
            For Legal Compliance: We may disclose your information to comply
            with legal obligations, enforce our terms of service, or protect the
            rights, property, or safety of SwifDrop, our users, or others.
          </ListItem>
        </List>
        <Text fontSize="1.125rem">4. Data Security:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction.{' '}
          </ListItem>
          <ListItem>
            We use encryption, secure servers, and access controls to safeguard
            your data and ensure its confidentiality and integrity.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">5. Your Rights and Choices:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            You have the right to access, update, or delete your personal
            information. You can manage your account settings or contact us to
            exercise your rights.{' '}
          </ListItem>
          <ListItem>
            You can opt out of receiving marketing communications or disable
            location services at any time by adjusting your preferences in the
            app or contacting us.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">6. Children's Privacy:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            SwifDrop is not intended for use by children under the age of 13. We
            do not knowingly collect personal information from children, and if
            we become aware that we have inadvertently collected such
            information, we will take appropriate steps to delete it.{' '}
          </ListItem>
        </List>
        <Text fontSize="1.125rem">7. Changes to This Privacy Policy:</Text>

        <List styleType="disc" spacing={1}>
          <ListItem>
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal requirements. We will notify you of any
            material changes by posting the revised policy on our website or
            app.{' '}
          </ListItem>
        </List>
        <Text>
          By using SwifDrop, you agree to the terms of this Privacy Policy.
          Please read this policy carefully and contact us if you have any
          questions or concerns. Thank you for trusting SwifDrop with your
          personal information.
        </Text>
      </Box>
    </Box>
  );
};

export default Privacy;
