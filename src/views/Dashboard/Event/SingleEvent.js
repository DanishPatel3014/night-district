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
    Badge,
    Tag,
  } from '@chakra-ui/react';
  import React from 'react';
  import CustomHeading from '../../../components/Website/Headings/CustomHeading';
  import MainDashboard from '../MainDashboard';
  import Eventimg from '../../../assets/images/event/e1.jpg';
  import M1 from '../../../assets/images/menu/m1.jpg';
  import CustomPara from '../../../components/Website/Paragraph/CustomPara';
  import { AiFillStar, AiOutlineFieldTime,AiOutlineStar } from 'react-icons/ai';
  import {HiOutlineLocationMarker } from 'react-icons/hi';
  import { Icon } from '@chakra-ui/icons';

export default function SingleEvent() {

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
                      List Event Automatically Everay Week
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
                    Edit Event
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Stack>
          <Stack gap={'6'} direction={'row'}>
            <Stack max-width={'370px'}>
            <Img src={Eventimg} />
            </Stack>
            <Stack gap={'6'}>
              <CustomHeading
                textAlign={'left'}
                fontSize={'25px'}
                color={'#fff'}
                mb={'0'}
              >
                Tito’s Handmade Vodka  <Badge ml='1' bg={'red'} color={'white'} >
        live
      </Badge>
              </CustomHeading>
              <CustomPara color={'primaryText.200'}>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </CustomPara>
              <Box display={'flex'} alignItems={'center'} gap={'2'}>
              <Icon color={'primaryText.200'} fontSize={'20px'} as={AiOutlineFieldTime}/>
              <CustomPara color={'primaryText.200'} marginBottom={'0'}>
                 30 August, 2022 | 11:30 PM
              </CustomPara>
              </Box>
              
              <Box display={'flex'} alignItems={'center'} gap={'2'}>
              <Icon color={'primaryText.200'} fontSize={'20px'} as={HiOutlineLocationMarker}/>
              <CustomPara color={'primaryText.200'} marginBottom={'0'}>
              450 Highland Ave, Salem MA 1940
              </CustomPara>
              </Box>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                <CustomPara color={'primaryText.200'} marginBottom={0}>
                   $Price
                  </CustomPara>
                  <CustomHeading textAlign={'left'} fontSize={'25px'} mb={'0'}>
                    $49.00
                  </CustomHeading>
                </Box>
                <Box>
                <FormControl display="flex" alignItems="center">
                    <Switch colorScheme="pink" id="email-alerts" />
                    <FormLabel
                      color={'#fff'}
                      pl={'4'}
                      htmlFor="email-alerts"
                      mb="0"
                    >
                     Tickets Sold
                    </FormLabel>
                  </FormControl>
                </Box>
              </Stack>
              <HStack gap={'6'}>
              <Tag bg={'dashbg.100'} color={'pHeading.100'} p={'4'} borderRadius={'50px'}>Music</Tag>
                <Tag bg={'dashbg.100'} color={'pHeading.100'} p={'4'} borderRadius={'50px'}>Hi-tech</Tag>
                <Tag bg={'dashbg.100'} color={'pHeading.100'} p={'4'} borderRadius={'50px'}>Culture</Tag>
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
  )
}
