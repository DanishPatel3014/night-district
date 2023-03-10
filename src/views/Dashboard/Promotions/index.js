import {
  Box,
  Flex,
  FormControl,
  Img,
  FormLabel,
  Stack,
  Switch,
} from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';

export default function index() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'6'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Spirits
              </CustomHeading>
            </Box>
            <Box>
              <Flex alignItems={'center'} gap={'3'}>
                <Box>
                  <FormControl display="flex" alignItems="center">
                    <Switch colorScheme="pink" id="email-alerts" />
                    <FormLabel
                      color={'#fff'}
                      pl={'4'}
                      htmlFor="email-alerts"
                      mb="0"
                    >
                      Send Free Ticket After First Visit
                    </FormLabel>
                  </FormControl>
                </Box>
                <Box>
                  <BorderButton Url={'./'} Btnctn={'Create Promopost'} />
                </Box>
              </Flex>
            </Box>
          </Stack>


          <Stack>
            <Stack flexWrap={'wrap'} direction={'row'} gap={'4'}>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>


          <Stack>
            <Box>
            <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Kentucky Bourbon
              </CustomHeading>
            </Box>
          <Stack flexWrap={'wrap'}  direction={'row'} gap={'4'}>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
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
