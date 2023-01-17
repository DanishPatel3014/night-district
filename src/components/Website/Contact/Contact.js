import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import Contactimg from '../../../assets/images/Banner/contact.png';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';

export default function Contact() {
  return (
    <>
      <Stack bgImg={Contactimg} py={20} mt={'0 !important02'} mt={'0 !important'}>
      <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
        <Box>
            <CustomHeading textAlign={'left'} color={'#fff'}>Contact Us</CustomHeading>
            <CustomPara>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>
nisi ut aliquip ex ea commodo consequat.</CustomPara>
        </Box>
        </Container>
      </Stack>
    </>
  );
}
