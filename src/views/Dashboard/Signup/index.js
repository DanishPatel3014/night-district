import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Img,
  Input,
  Link,
  ListItem,
  Stack,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import logo from '../../../assets/images/Banner/signlogo.png';
import { useEffect } from 'react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara.js';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { POST } from '../../../utilities/ApiProvider.js';
import { Icon } from '@chakra-ui/icons';
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

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
      let data = Fields;
      delete data?.confirmpassword
      let response = await POST('/', Fields);

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

  const socialink = {
    bg: '#fff',
    w: '50px',
    h: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
  };
  const socialicn = {
    fontSize: '20px',
    color: 'dashbg.100',
  };

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundImage={Signupimg}
        py={'48'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
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
              onChange={e => {
                setFields({
                  ...Fields,
                  name: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Email Address'}
              type="email"
              _placeholder={{ color: '#fff' }}
              value={Fields.email}
              onChange={e => {
                setFields({
                  ...Fields,
                  email: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Password'}
              type="Password"
              _placeholder={{ color: '#fff' }}
              value={Fields.password}
              onChange={e => {
                setFields({
                  ...Fields,
                  password: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Confirm Password'}
              type="ConfirmPassword"
              _placeholder={{ color: '#fff' }}
              value={Fields.confirmpassword}
              onChange={e => {
                setFields({
                  ...Fields,
                  confirmpassword: e.target.value,
                });
              }}
            />
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
          <Stack mb={'12'}>
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
          <Stack>
            <CustomPara textAlign={'center'}>Or continue with</CustomPara>
            <UnorderedList
              justifyContent={'center'}
              listStyleType={'none'}
              display={'flex'}
              gap={'4'}
            >
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiOutlineGoogle} />
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiFillFacebook} />
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiOutlineTwitter} />
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
