import React, { useState } from 'react';
import {
  Container,
  Checkbox,
  Img,
  Button,
  Stack,
  Box,
  UnorderedList,
  ListItem,
  Link,
  Input,
  useToast,
} from '@chakra-ui/react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import { useEffect } from 'react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { POST } from '../../../utilities/ApiProvider';

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  const tblist = {
    color: '#fff',
  };
  const signupstyle = {
    w: '48%',
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [Fields, setFields] = useState({
    name: '',
    city: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (
        Fields.name === '' &&
        Fields.email === '' &&
        Fields.password === '' &&
        Fields.confirmpassword === ''
      ) {
        toast({
          status: 'error',
          title: 'Please fill in all the fields to proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        setisLoading(false);
        return;
      }

      formData.append('action', 'CONTACT');
      formData.append('name', Fields.name);
      formData.append('email', Fields.email);
      formData.append('password', Fields.password);
      formData.append('confirmpassword', Fields.confirmpassword);

      let response = await POST('/mailtest/emailer.php', formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      setFields({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
      });

      setisLoading(false);
    } catch (err) {
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
    }
  };

  const lnk = {
    color: 'pHeading.100',
  };

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'full'} px={'14'}>
          <Stack direction={'row'} gap={'8'}>
            <Stack w={'30%'}>
              <CustomHeading
                color={'white'}
                textAlign={'left'}
                fontSize={'25px'}
              >
                Complete the following steps
              </CustomHeading>
              <UnorderedList listStyleType={'none'} spacing={'3'}>
                <ListItem>
                  <Link sx={tblist} as={ReactLink} to={'/'}>
                    Customize Your Profile
                  </Link>
                </ListItem>
                <ListItem>
                  <Link sx={tblist} as={ReactLink} to={'/'}>
                    Add Your Bar’s Information
                  </Link>
                </ListItem>
                <ListItem>
                  <Link sx={tblist} as={ReactLink} to={'/'}>
                    Add Your Menu
                  </Link>
                </ListItem>
                <ListItem>
                  <Link sx={tblist} as={ReactLink} to={'/'}>
                    Add Your Events
                  </Link>
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack w={'70%'} gap={'8'}>
              <Stack>
                <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
                <CustomHeading color={'#fff'}>
                  Welcome to Night District
                </CustomHeading>
                <CustomPara textAlign={'center'}>Enter your details</CustomPara>
              </Stack>
              <Stack
                mb={'8'}
                flexWrap={'wrap'}
                spacing={'0'}
                direction={'row'}
                gap={'6'}
                justifyContent={'space-between'}
              >
                <Input
                  sx={signupstyle}
                  placeholder={'Name'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.name}
                  setFields={name => setFields({ ...Fields, name })}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Email Address'}
                  type="email"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.email}
                  setFields={email => setFields({ ...Fields, email })}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Password'}
                  type="Password"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.password}
                  setFields={password => setFields({ ...Fields, password })}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Confirm Password'}
                  type="ConfirmPassword"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.confirmpassword}
                  setFields={confirmpassword =>
                    setFields({ ...Fields, confirmpassword })
                  }
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Password'}
                  type="Password"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.password}
                  setFields={password => setFields({ ...Fields, password })}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Confirm Password'}
                  type="ConfirmPassword"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.confirmpassword}
                  setFields={confirmpassword =>
                    setFields({ ...Fields, confirmpassword })
                  }
                />
                <Box 
                position={'relative'} 
                overflow={'hidden'}
                w={'full'}
                border={'1px dashed #fff'}
                py={'8'}
                textAlign={'center'}
                borderRadius={'6'}
                >
                  <Button>Upload a file</Button>
                  <Input
                    position={'absolute'}
                    left={'0'}
                    right={'0'}
                    bottom={'0'}
                    top={'0'}
                    h={'100%'}
                    cursor={'pointer'}
                   color={'white'}
                   py={'34px'}
                    type={'file'}
                    name={'file'}
                  />
                </Box>
                <Checkbox color={'#fff'} colorScheme="green">
                  I agree to the{' '}
                  <Link sx={lnk} as={ReactLink} to={'./'}>
                    Terms of Service
                  </Link>{' '}
                  &{' '}
                  <Link sx={lnk} as={ReactLink} to={'./'}>
                    Privacy Policy{' '}
                  </Link>
                  of Night District.
                </Checkbox>
              </Stack>
              <Stack>
                <Button
                  onClick={() => submitForm()}
                  bgColor={'#dc0b9b'}
                  color={'#fff'}
                  borderRadius={6}
                  fontWeight={'600'}
                  px={'50px'}
                  py={6}
                  fontSize={'17px'}
                  border={'2px solid #fff'}
                  borderColor={'#dc0b9b'}
                  _hover={{
                    bgColor: 'transparent',
                    color: '#fff',
                  }}
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
            <Stack w={'30%'}></Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
