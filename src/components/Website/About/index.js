import { Box, Container, Heading, Image, Stack, Text,Link } from '@chakra-ui/react';
import Aboutbanner from '../../../assets/images/Banner/about.png';
import Mobile from '../../../assets/images/shorts/mobile.png';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import { useNavigate } from 'react-router';
import { Link as ReactLink } from 'react-router-dom';
import PrimaryBtn from '../Buttons/PrimaryBtn';
export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        backgroundImage={Aboutbanner}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
        position={'relative'}
        mt={'0 !important'}
      >
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack textAlign={'center'} mb={20}>
            <CustomHeading>About Night District</CustomHeading>
            <CustomPara textAlign={'center'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
              <br />
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea
              <br />
              commodo consequat.
            </CustomPara>
          </Stack>
          <Box>
            <Stack direction={'row'} alignItems={'center'}>
              <Box w={'30%'}>
                <Image src={Mobile} />
              </Box>
              <Box w={'55%'}>
                <CustomHeading
                  textAlign={'left'}
                  color={'#fff'}
                  fontSize={'35px'}
                >
                  Queue Management System
                </CustomHeading>
                <CustomPara>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostr ud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</CustomPara>
               <CustomPara marginBottom={'20px'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CustomPara>
                  <Link w={{ base: '120px', xl: 'auto' }} display={{ base: 'none', lg: 'flex' }} onClick={() => navigate('/register')}><PrimaryBtn value={'Get Started'} /></Link>
               
              </Box>
            </Stack>
          </Box>
        </Container>
      </Stack>
    </>
  );
}
