import { Icon } from '@chakra-ui/icons';
import { Box, FormControl, Input, Stack, Button, Image } from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { AiOutlineCopy } from 'react-icons/ai';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Teamone from '../../../assets/images/Team/t1.jpg';

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
            <Stack h={'420px'} overflow={'scroll'} bg={'dashbg.100'} p={'4'}>
              <Stack
                py={'5'}
                borderBottom={'1px solid #fff'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box gap={'8'} alignItems={'center'} display={'flex'}>
                        <Image borderRadius={'50%'} w={'100px'} src={Teamone} />
                        <Box>
                        <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Name 
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    Jordan
                  </CustomHeading>
                        </Box>
                      </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Id no
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    #545631
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Earned
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    $2,12.00
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Avg Ordered
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    15%
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Avg Events
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    1 Event
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Date
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    Aug 15, 2021
                  </CustomHeading>
                </Box>
                <Box>
                  <BorderButton Url={'./'} Btnctn={'Export'} />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
