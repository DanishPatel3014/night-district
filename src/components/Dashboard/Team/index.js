import React from 'react'
import {
    Box,
    Stack,
  } from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import Teammemberdetails from './Teammemberdetails'

export default function index() {
  return (
    <>
     <Stack p={'4'} bg={'dashbg.100'}>
            <Box>
              <CustomHeading
                fontSize={'25px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Bartenders
              </CustomHeading>
            </Box>
            <Stack h={'600px'} overflow={'scroll'} bg={'dashbg.100'} p={'4'}>
              <Teammemberdetails/>
              <Teammemberdetails/>
              <Teammemberdetails/>
              <Teammemberdetails/>
              <Teammemberdetails/>
              <Teammemberdetails/>
            </Stack>
          </Stack>
    </>
  )
}
