import { Box, Img, Stack } from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Feed1 from '../../../assets/images/feed/f1.jpg';
import { Icon } from '@chakra-ui/icons';

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
                All Feeds
              </CustomHeading>
            </Box>
            <Box>
              <BorderButton Url={'./'} Btnctn={'Add New Post'} />
            </Box>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            <Box w={'515px'} bg={'dashbg.100'}>
              <Stack p={'4'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Box>
                    <CustomHeading
                      textAlign={'left'}
                      color={'#fff'}
                      fontSize={'25px'}
                      mb={'0'}
                    >
                      Lorem Ipsum Here
                    </CustomHeading>
                    <CustomPara color={'brand.800'} fontSize={'13px'}>
                      Yesterday
                    </CustomPara>
                  </Box>
                  <Box>
                    <Icon
                      color={'white'}
                      fontSize={'30px'}
                      as={HiOutlineDotsHorizontal}
                    />
                  </Box>
                </Stack>
                <Stack>
                  <CustomPara fontSize={'14px'} color={'brand.800'}>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt utlabore et dolore magna aliqua.
                  </CustomPara>
                </Stack>
              </Stack>
              <Stack>
                <Img src={Feed1} />
              </Stack>
            </Box>
            <Box w={'515px'} bg={'dashbg.100'}>
              <Stack p={'4'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Box>
                    <CustomHeading
                      textAlign={'left'}
                      color={'#fff'}
                      fontSize={'25px'}
                      mb={'0'}
                    >
                      Lorem Ipsum Here
                    </CustomHeading>
                    <CustomPara color={'brand.800'} fontSize={'13px'}>
                      Yesterday
                    </CustomPara>
                  </Box>
                  <Box>
                    <Icon
                      color={'white'}
                      fontSize={'30px'}
                      as={HiOutlineDotsHorizontal}
                    />
                  </Box>
                </Stack>
                <Stack>
                  <CustomPara fontSize={'14px'} color={'brand.800'}>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt utlabore et dolore magna aliqua.
                  </CustomPara>
                </Stack>
              </Stack>
              <Stack>
                <Img src={Feed1} />
              </Stack>
            </Box>
            <Box w={'515px'} bg={'dashbg.100'}>
              <Stack p={'4'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Box>
                    <CustomHeading
                      textAlign={'left'}
                      color={'#fff'}
                      fontSize={'25px'}
                      mb={'0'}
                    >
                      Lorem Ipsum Here
                    </CustomHeading>
                    <CustomPara color={'brand.800'} fontSize={'13px'}>
                      Yesterday
                    </CustomPara>
                  </Box>
                  <Box>
                    <Icon
                      color={'white'}
                      fontSize={'30px'}
                      as={HiOutlineDotsHorizontal}
                    />
                  </Box>
                </Stack>
                <Stack>
                  <CustomPara fontSize={'14px'} color={'brand.800'}>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt utlabore et dolore magna aliqua.
                  </CustomPara>
                </Stack>
              </Stack>
              <Stack>
                <Img src={Feed1} />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
