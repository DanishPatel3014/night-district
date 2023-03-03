import { Box, Flex, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import Planwarp from '../../../components/Dashboard/Plans/Planwarp';

export default function index() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
          <Stack>
            <Stack>
              <CustomHeading
                textAlign={'left'}
                fontSize={'30px'}
                color={'#fff'}
              >
                Subscription Plans
              </CustomHeading>
            </Stack>
            <Stack direction={'row'} gap={'6'}>
              <Box
                justifyItems={'center'}
                py={'8'}
                justifyContent={'center'}
                textAlign={'center'}
                w={'500px'}
                borderRadius={'6'}
                bg={'pHeading.100'}
              >
                <Stack pb={'14'} mb={'4'} borderBottom={'1px solid #fff'}>
                  <Box
                    mb={'5 !important'}
                    p={'2'}
                    borderRadius={'8'}
                    m={'auto'}
                    w={'100px'}
                    bg={'#000'}
                  >
                    <CustomPara marginBottom={'0'} textAlign={'center'}>
                      Free Trial
                    </CustomPara>
                  </Box>
                  <CustomHeading color={'#fff'}>1 Month</CustomHeading>
                </Stack>
                <Stack>
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
                      <Flex alignItems={'center'} gap={'2'}>
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
                      <Flex alignItems={'center'} gap={'2'}>
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
                      <Flex alignItems={'center'} gap={'2'}>
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
              <Planwarp/>
            <Planwarp/>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
