import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  useNumberInput,
  Input,
  HStack,
  Divider,
  Center,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import M1 from '../../../assets/images/menu/m1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';

export default function SingleMenu() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 1,
      min: 1,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

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
                Tito’s Handmade Vodka
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
                      Out Of Stock
                    </FormLabel>
                  </FormControl>
                </Box>
                <Box>
                  <Button
                    bg={'transparent'}
                    textAlign={'center'}
                    margin={'auto'}
                    py={'10px'}
                    px={'8'}
                    lineHeight={'inherit'}
                    border={'1px solid #fff'}
                    borderRadius={'6px'}
                    color={'#fff'}
                    _hover={{
                      color: 'primaryText.200',
                    }}
                  >
                    Edit Menu
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Stack>
          <Stack gap={'6'} direction={'row'}>
            <Stack max-width={'370px'}>
              <Tabs colorScheme={'pink'}>
                <TabPanels>
                  <TabPanel>
                    <Box>
                      <Img src={menu1} />
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <Img src={menu1} />
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <Img src={menu1} />
                    </Box>
                  </TabPanel>
                </TabPanels>
                <TabList>
                  <Tab>
                    <Box>
                      <Img src={M1} />
                    </Box>
                  </Tab>
                  <Tab>
                    <Box>
                      <Img src={M1} />
                    </Box>
                  </Tab>
                  <Tab>
                    <Box>
                      <Img src={M1} />
                    </Box>
                  </Tab>
                </TabList>
              </Tabs>
            </Stack>
            <Stack gap={'6'}>
              <CustomHeading
                textAlign={'left'}
                fontSize={'25px'}
                color={'#fff'}
                mb={'0'}
              >
                Tito’s Handmade Vodka
              </CustomHeading>
              <CustomPara color={'primaryText.200'}>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </CustomPara>
              <Stack direction={'row'} gap={'6'} alignItems={'center'}>
                <Box>
                  <CustomHeading textAlign={'left'} fontSize={'25px'} mb={'0'}>
                    $49.00
                  </CustomHeading>
                </Box>
                <Box>
                  <HStack maxW="220px">
                    <Button {...inc}>+</Button>
                    <Input
                      color={'#fff'}
                      outline={'1px solid #fff'}
                      {...input}
                    />
                    <Button {...dec}>-</Button>
                  </HStack>
                </Box>
              </Stack>
              <HStack gap={'6'}>
                <Box>
                  <CustomPara color={'primaryText.200'} marginBottom={0}>
                    Category:
                  </CustomPara>
                  <CustomPara>Spirits</CustomPara>
                </Box>
                <Center height="50px">
                  <Divider orientation="vertical" />
                </Center>
                <Box>
                  <CustomPara color={'primaryText.200'} marginBottom={0}>
                    Subcategory:
                  </CustomPara>
                  <CustomPara>Bourbon:</CustomPara>
                </Box>
              </HStack>
            </Stack>
          </Stack>
          <Stack
            gap={'16'}
            direction={'row'}
            pt={'14'}
            borderTop={'1px solid #717171'}
          >
            <Stack w={'50%'}>
              <CustomHeading textAlign={'left'} fontSize={'20px'}>
                Customer Review:
              </CustomHeading>
              <Stack gap={'6'} direction={'row'}>
                <Avatar
                  size="lg"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Stack gap={'4'}>
                  <Stack>
                    <CustomHeading
                      color={'white'}
                      textAlign={'left'}
                      mb={'0'}
                      fontSize={'22px'}
                    >
                      Micheal Farwada
                    </CustomHeading>
                    <CustomPara color={'primaryText.200'}>
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CustomPara>
                    <Wrap>
                      <WrapItem>
                        <Icon color={'#ff9000'} as={AiFillStar} />
                      </WrapItem>
                      <WrapItem>
                        <Icon color={'#ff9000'} as={AiFillStar} />
                      </WrapItem>
                      <WrapItem>
                        <Icon color={'#ff9000'} as={AiFillStar} />
                      </WrapItem>
                      <WrapItem>
                        <Icon color={'#ff9000'} as={AiOutlineStar} />
                      </WrapItem>
                      <WrapItem>
                        <Icon color={'#ff9000'} as={AiOutlineStar} />
                      </WrapItem>
                    </Wrap>
                  </Stack>
                  <Stack direction={'row'} gap={'4'}>
                    <Avatar
                      size="lg"
                      borderRadius={'0'}
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Box>
                      <CustomHeading
                        color={'white'}
                        textAlign={'left'}
                        mb={'0'}
                        fontSize={'22px'}
                      >
                        Micheal Farwada
                      </CustomHeading>
                      <CustomPara color={'primaryText.200'}>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </CustomPara>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Center height="200px">
              <Divider orientation="vertical" />
            </Center>
            <Stack w={'50%'}>
              <CustomHeading textAlign={'left'} fontSize={'20px'}>
                Bartender
              </CustomHeading>
              <Stack gap={'4'}>
              <Stack direction={'row'} gap={'4'}>
                    <Avatar
                      size="lg"
                      borderRadius={'0'}
                      name="Alexa Lee"
                      src="https://bit.ly/code-beast"
                    />
                    <Box>
                      <CustomHeading
                        color={'white'}
                        textAlign={'left'}
                        mb={'0'}
                        fontSize={'22px'}
                      >
                      Alexa Lee
                      </CustomHeading>
                      <CustomPara color={'primaryText.200'}>
                      Et dolore magna aliqua.
                      </CustomPara>
                    </Box>
                  </Stack>
                  <Stack>
                  <CustomPara mb={0} color={'primaryText.200'} marginBottom={0}>
                    Tip Earned:
                  </CustomPara>
                  <CustomPara >$10.00</CustomPara>
                  </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
