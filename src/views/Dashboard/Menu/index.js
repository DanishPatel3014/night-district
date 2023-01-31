import { Box, Button, FormControl, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import {AiOutlineSearch} from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import BorderButton from '../../../components/Website/Buttons/BorderButton';

export default function Menu() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading fontSize={'30px'} color={'#fff'} textAlign={'left'} >Category</CustomHeading>
              <FormControl position={'relative'}>
                <Input color={'#fff'} border={'1px solid #fff !important'} _placeholder={{color:'#fff'}} placeholder="Search" />
                <Button bg={'transparent'} right={'0'} position={'absolute'}><Icon color={'white'} fontSize={'20px'} as={AiOutlineSearch} /></Button>
              </FormControl>
            </Box>
            <Box>
            <BorderButton Url={'./'} Btnctn={'Export'}/>
            </Box>
          </Stack>
          <Stack direction={'row'}>
            
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
