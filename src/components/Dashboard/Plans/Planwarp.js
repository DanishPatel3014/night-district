import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  ListItem,
  Stack,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import { baseUrl } from '../../../utilities/Config';
import PrimaryBtn from '../../Website/Buttons/PrimaryBtn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBarInfo } from '../../../reducers/useReducers';

export default function Planwarp() {
  const toast = useToast();
  const user = useSelector(state => state?.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    console.log(user);
    getUserData();
  }, [user]);

  const getUserData = async () => {
    setIsLoading(true);
    let response = await GET(`${baseUrl}membership/?limit=10&page=1`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });
    console.log(response);
    setpackages(response.data);
  };

  const Selectmambership = async id => {
    let response = await POST(
      `${baseUrl}users/selectMembership`,
      {
        membership: id,
      },
      { authorization: `Bearer ${user?.verificationToken}` }
    );
    toast({
      description: response.message,
      status: response.status,
      isClosable: true,
      position: 'bottom-left',
      duration: 2500,
    });
    if (response.status === 'success') {
      dispatch(updateBarInfo(response.data.barInfo))
      navigate('/dashboard/equipment');
    } else {
      navigate('/dashboard/Plan');
    }
  };

  return (
    <>
      <Stack direction={'row'} gap={'4'} w={'full'}>
        {packages?.length > 0 &&
          packages.map((v, i) => {
            return (
              <Box
                key={i}
                justifyItems={'center'}
                py={'8'}
                w={'31%'}
                border={'1px solid #fff'}
                borderRadius={'6'}
                justifyContent={'center'}
                textAlign={'center'}
                bg={'dashbg.100'}
              >
                <Stack pb={'6'} mb={'4'} borderBottom={'1px solid #fff'}>
                  <Box
                    mt={'-50px !important'}
                    mb={'5 !important'}
                    p={'2'}
                    borderRadius={'8'}
                    m={'auto'}
                    w={'100px'}
                    bg={'pHeading.100'}
                  >
                    <CustomPara marginBottom={'0'} textAlign={'center'}>
                      {v.name}
                    </CustomPara>
                  </Box>
                  <CustomPara textAlign={'center'}>{v.type}</CustomPara>
                  <CustomHeading color={'#fff'}>${v.price}</CustomHeading>
                </Stack>
                <Stack mb={6} pr={'6'}>
                  <UnorderedList listStyleType={'none'} spacing={'4'}>
                    {v.description.map((v, i) => {
                      return (
                        <ListItem key={i}>
                          <Flex alignItems={'center'} gap={'2'}>
                            <Icon
                              color={'white'}
                              fontSize={'16px'}
                              as={AiOutlineCheck}
                            />
                            <CustomPara marginBottom={'0'}>{v}</CustomPara>
                          </Flex>
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </Stack>
                <Stack>
                  <Button
                    bg={'#D6009A'}
                    margin={'auto'}
                    px={'12'}
                    color={'#fff'}
                    py={'6'}
                    _hover={{
                      bg: '#000',
                    }}
                    onClick={() => {
                      Selectmambership(v._id);
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </Box>
            );
          })}
      </Stack>
    </>
  );
}
