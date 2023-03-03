import React from 'react'
import { Box, Flex, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';

export default function Planwarp() {
  return (
    <>
      <Box
                justifyItems={'center'}
                py={'8'}
                border={'1px solid #fff'}
                borderRadius={'6'}
                justifyContent={'center'}
                textAlign={'center'}
                bg={'dashbg.100'}
              >
                <Stack pb={'14'} mb={'4'} borderBottom={'1px solid #fff'}>
                  <Box
                    mb={'5 !important'}
                    p={'2'}
                    borderRadius={'8'}
                    m={'auto'}
                    w={'100px'}
                    bg={'pHeading.100'}
                  >
                    <CustomPara marginBottom={'0'} textAlign={'center'}>
                      Yearly
                    </CustomPara>
                  </Box>
                  <CustomHeading color={'#fff'}>$99.00</CustomHeading>
                </Stack>
                <Stack pr={'6'}>
                  <UnorderedList listStyleType={'none'} spacing={'4'}>
                    <ListItem>
                      <Flex alignItems={'center'} gap={'2'}>
                        <Icon
                          color={'white'}
                          fontSize={'16px'}
                          as={AiOutlineCheck}
                        />
                        <CustomPara marginBottom={'0'}>
                          Consectetur adipiscing elit
                        </CustomPara>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                      >
                        <Icon
                          color={'white'}
                          fontSize={'16px'}
                          as={AiOutlineCheck}
                        />
                        <CustomPara marginBottom={'0'}>
                          Consectetur adipiscing elit adipcing litetunsec
                        </CustomPara>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                      >
                        <Icon
                          color={'white'}
                          fontSize={'16px'}
                          as={AiOutlineCheck}
                        />
                        <CustomPara marginBottom={'0'}>
                          Consectetur adipiscing elit adipcing litetunsec
                        </CustomPara>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                      >
                        <Icon
                          color={'white'}
                          fontSize={'16px'}
                          as={AiOutlineCheck}
                        />
                        <CustomPara marginBottom={'0'}>
                          Consectetur adipiscing elit adipcing litetunsec
                        </CustomPara>
                      </Flex>
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </Box>
    </>
  )
}
