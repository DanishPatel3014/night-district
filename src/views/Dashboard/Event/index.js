import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Event1  from '../../../assets/images/event/e1.jpg';
import MainDashboard from '../MainDashboard';

export default function index() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Live Events
              </CustomHeading>
            </Box>
            <Box>
              <BorderButton Url={'./'} Btnctn={'Add New Events'} />
            </Box>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}> 
            <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
              <CustomPara marginBottom={'0'} textAlign={'center'}>Today</CustomPara>
            </Box>
              <Stack px={'4'} mb={'24'}>
                <CustomHeading color={'#fff'} fontSize={'25px'} textAlign={'left'} mb={'0'}>Monday Night</CustomHeading>
                <CustomPara fontSize={'14px'}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </CustomPara>
              </Stack>
              <Stack px={'4'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <CustomHeading mb={'0'} color={'#fff'} fontSize={'20px'} textAlign={'left'}>Sold Out</CustomHeading>
                </Box>
                <Box bg={'#ff4764'} px={'2'}>
                  <CustomPara marginBottom={'0'}>LIVE</CustomPara>
                </Box>
              </Stack>
            </Box>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}> 
            <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
              <CustomPara marginBottom={'0'} textAlign={'center'}>Today</CustomPara>
            </Box>
              <Stack px={'4'} mb={'24'}>
                <CustomHeading color={'#fff'} fontSize={'25px'} textAlign={'left'} mb={'0'}>Monday Night</CustomHeading>
                <CustomPara fontSize={'14px'}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </CustomPara>
              </Stack>
              <Stack px={'4'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <CustomHeading mb={'0'} color={'#fff'} fontSize={'20px'} textAlign={'left'}>Sold Out</CustomHeading>
                </Box>
                <Box bg={'#ff4764'} px={'2'}>
                  <CustomPara marginBottom={'0'}>LIVE</CustomPara>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <CustomHeading 
              fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Today's Events
              </CustomHeading>
            </Box>
            <Stack direction={'row'} gap={'4'}>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}> 
            <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
              <CustomPara marginBottom={'0'} textAlign={'center'}>Today</CustomPara>
            </Box>
              <Stack px={'4'} mb={'24'}>
                <CustomHeading color={'#fff'} fontSize={'25px'} textAlign={'left'} mb={'0'}>Monday Night</CustomHeading>
                <CustomPara fontSize={'14px'}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </CustomPara>
              </Stack>
              <Stack px={'4'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <CustomHeading mb={'0'} color={'#fff'} fontSize={'20px'} textAlign={'left'}>Sold Out</CustomHeading>
                </Box>
               
              </Stack>
            </Box>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}> 
            <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
              <CustomPara marginBottom={'0'} textAlign={'center'}>Today</CustomPara>
            </Box>
              <Stack px={'4'} mb={'24'}>
                <CustomHeading color={'#fff'} fontSize={'25px'} textAlign={'left'} mb={'0'}>Monday Night</CustomHeading>
                <CustomPara fontSize={'14px'}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </CustomPara>
              </Stack>
              <Stack px={'4'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <CustomHeading mb={'0'} color={'#fff'} fontSize={'20px'} textAlign={'left'}>Sold Out</CustomHeading>
                </Box>
               
              </Stack>
            </Box>
          </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
