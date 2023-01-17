import { Container, Stack } from '@chakra-ui/react';
import Aboutbanner from '../../../assets/images/Banner/about.png'
import React from 'react';

export default function About() {
  return (
    <>
      <Stack
        backgroundImage={Aboutbanner}
        height={'100vh'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
        position={'relative'}
        justifyContent={'center'}
      >
        <Container  
          maxW={'8xl'}
          p={{ base: '15px !important', '2xl': 0 }}
        ></Container>
      </Stack>
    </>
  );
}
