import React, { useEffect, useState } from 'react';
import { Box, Flex, ListItem, Stack, UnorderedList, useToast } from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { GET } from '../../../utilities/ApiProvider';
import { baseUrl } from '../../../utilities/Config';

export default function Planwarp() {

  const toast= useToast()
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setIsLoading(true);
    let loginResponse = await GET(`${baseUrl}/membership/?limit=10&page=1`);
    console.log(loginResponse);
    toast({
      description: loginResponse?.message,
      status: loginResponse?.status,
      isClosable: true,
      duration: 2500,
      position: 'top-right',
    });
    if (loginResponse?.status === 'success') {
   
    }
    setIsLoading(false);
  };

  return (
    <>
      <Stack direction={'row'} gap={'4'}>
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
                  <Icon color={'white'} fontSize={'16px'} as={AiOutlineCheck} />
                  <CustomPara marginBottom={'0'}>
                    Consectetur adipiscing elit
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'2'}>
                  <Icon color={'white'} fontSize={'16px'} as={AiOutlineCheck} />
                  <CustomPara marginBottom={'0'}>
                    Consectetur adipiscing elit adipcing litetunsec
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'2'}>
                  <Icon color={'white'} fontSize={'16px'} as={AiOutlineCheck} />
                  <CustomPara marginBottom={'0'}>
                    Consectetur adipiscing elit adipcing litetunsec
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'2'}>
                  <Icon color={'white'} fontSize={'16px'} as={AiOutlineCheck} />
                  <CustomPara marginBottom={'0'}>
                    Consectetur adipiscing elit adipcing litetunsec
                  </CustomPara>
                </Flex>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
