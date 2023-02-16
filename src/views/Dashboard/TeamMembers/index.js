import { Icon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { AiOutlineCopy } from 'react-icons/ai';



import Team from '../../../components/Dashboard/Team/index'

export default function index() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'6'}>
          <Stack mb={'2'} direction={'row'} justifyContent={'space-between'}>
            <Box alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'20px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Bartenders/Bouncers
              </CustomHeading>
              <FormControl w={'350px'} position={'relative'}>
                <Input
                  color={'#fff'}
                  border={'1px solid #fff !important'}
                  _placeholder={{ color: '#fff' }}
                  placeholder="Search"
                />
                <Button bg={'transparent'} right={'0'} position={'absolute'}>
                  <Icon
                    color={'pHeading.100'}
                    fontSize={'20px'}
                    as={AiOutlineCopy}
                  />
                </Button>
              </FormControl>
            </Box>
            <Box>
              <BorderButton Url={'./'} Btnctn={'Create New Profile'} />
            </Box>
          </Stack>
         <Team/>
        </Stack>
      </MainDashboard>
    </>
  );
}
