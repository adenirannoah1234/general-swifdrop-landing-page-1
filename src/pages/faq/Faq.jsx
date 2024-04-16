import { useState } from 'react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { MdAdd, MdRemove } from 'react-icons/md'; // Import icons from react-icons library

const Faq = () => {
  const accordionData = [
    {
      heading: 'How does SwifDrop work?',
      content:
        'SwifDrop connects users with local restaurants, allowing them to browse menus, place orders, and track deliveries through our user-friendly app or website. Our network of dedicated riders ensures that your food arrives fresh and on time.',
    },
    {
      heading: 'Is SwifDrop available in my area?',
      content:
        "SwifDrop is continuously expanding to new locations. Check our app or website to see if we're available in your area, and stay tuned for updates as we grow. ",
    },
    {
      heading: 'How can I become a rider for SwifDrop?',
      content:
        "If you're interested in becoming a SwifDrop rider, visit our website or app to learn more about rider opportunities and sign-up requirements. We offer flexible earning opportunities, comprehensive training, and support to help you succeed.",
    },
    {
      heading: 'Can I schedule a delivery in advance?',
      content:
        'IYes, SwifDrop offers scheduled delivery options for your convenience. Simply select your preferred delivery time during the checkout process, and our team will ensure your order arrives at the scheduled time.',
    },
    {
      heading: 'What safety measures are in place for deliveries?',
      content:
        'At SwifDrop, safety is our top priority. Our riders undergo thorough background checks and training, and we provide them with safety equipment and guidelines to ensure a secure delivery experience. Additionally, our app offers features such as real-time tracking and contactless delivery options for added peace of mind.',
    },
    {
      heading: 'How do I pay for my order?',
      content:
        'SwifDrop accepts various payment methods, including credit/debit cards, mobile wallets, and digital payment platforms. Choose your preferred payment option during checkout, and rest assured that your payment information is secure and encrypted.',
    },
    {
      heading: 'What safety measures are in place for deliveries?',
      content:
        'At SwifDrop, safety is our top priority. Our riders undergo thorough background checks and training, and we provide them with safety equipment and guidelines to ensure a secure delivery experience. Additionally, our app offers features such as real-time tracking and contactless delivery options for added peace of mind.',
    },
    {
      heading: 'How can I leave feedback or report an issue?',
      content:
        "We value your feedback and are here to assist you with any inquiries or concerns. You can leave feedback, report issues, or contact our customer support team through our app or website, and we'll be happy to assist you promptly.",
    },
    {
      heading: 'Are there any promotions or discounts available?',
      content:
        'SwifDrop regularly offers promotions, discounts, and loyalty rewards to our users. Keep an eye out for special offers and deals in the app or website, and subscribe to our newsletter to stay updated on the latest promotions.',
    },
    {
      heading: 'Interested in partnership opportunities?',
      content:
        "ccc If you're a local restaurant interested in partnering with SwifDrop, please contact our partnerships team through our website or app. We offer a range of benefits and support services to our restaurant partners, including increased visibility, sales, and marketing opportunities.",
    },

    // Add more accordion items as needed
  ];

  const [isOpen, setIsOpen] = useState(
    new Array(accordionData.length).fill(false)
  ); // State for each accordion item

  const toggleAccordion = (index) => {
    setIsOpen((prevOpen) => {
      const newState = [...prevOpen];
      newState[index] = !newState[index]; // Toggle the state of the clicked item
      return newState;
    });
  };

  return (
    <Accordion allowToggle p={{ md: '50px', base: '30px' }}>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={`${item.heading}_${index}`}
          mt={index > 0 ? '10px' : 0}
        >
          <AccordionButton
            onClick={() => toggleAccordion(index)}
            backgroundColor="#4CAF50"
            _hover="#4CAF50"
            color="#FFFFFF"
            h="64px"
            borderRadius="8px"
          >
            <Box flex="1" textAlign="left">
              {item.heading}
            </Box>
            {isOpen[index] ? <MdRemove /> : <MdAdd />}{' '}
            {/* Toggle icons based on accordion state */}
          </AccordionButton>
          <AccordionPanel
            pb={4}
            display={isOpen[index] ? 'block' : 'none'}
            backgroundColor="#DBFFDC"
            borderRadius="20px"
            mt="4"
          >
            <Text>{item.content}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
