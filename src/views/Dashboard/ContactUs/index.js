import {
  Box,
  Button,
  ListItem,
  Stack,
  Text,
  Textarea,
  UnorderedList,
  useToast,
  
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { Icon } from '@chakra-ui/icons';
import { AiOutlineStar } from 'react-icons/ai';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';
import ContactFields from '../../../components/Website/Contact/ContactFields';
import { POST } from '../../../utilities/ApiProvider';

export default function Index() {

    const toast = useToast();
    const [isLoading, setisLoading] = useState(false);
    const [Fields, setFields] = useState({
      name: '',
      city: '',
      email: '',
      phone: '',
      message: '',
    });
  
    const submitForm = async () => {
      try {
        setisLoading(true);
        const formData = new FormData();
  
        if (
          Fields.name === '' &&
          Fields.city === '' &&
          Fields.email === '' &&
          Fields.phone === '' &&
          Fields.message === ''
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
        formData.append('city', Fields.city);
        formData.append('email', Fields.email);
        formData.append('phone', Fields.phone);
        formData.append('message', Fields.message);
  
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
          city: '',
          email: '',
          phone: '',
          message: '',
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
  

  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'4'}>
          <Stack bg={'dashbg.100'} p={'5'} gap={'4'}>
            <CustomHeading
              fontSize={'25px'}
              mb={'0'}
              color={'#fff'}
              textAlign={'left'}
            >
              Write Reviews
            </CustomHeading>
            <UnorderedList display={'flex'} gap={'2'}>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'25px'} as={AiOutlineStar} />
              </ListItem>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'25px'} as={AiOutlineStar} />
              </ListItem>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'25px'} as={AiOutlineStar} />
              </ListItem>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'25px'} as={AiOutlineStar} />
              </ListItem>
            </UnorderedList>
            <Textarea
              color={'#fff'}
              h={'250px'}
              size="sm"
              placeholder="Here is a sample placeholder"
            />
            <PrimaryBtn value={'Submit'} w={'150px'} />
          </Stack>
          <Stack bg={'dashbg.100'} p={'5'}>
            <CustomHeading
              fontSize={'25px'}
              mb={'0'}
              color={'#fff'}
              textAlign={'left'}
            >
              Message Us
            </CustomHeading>
            <Box
                display={'flex'}
                flexWrap={'wrap'}
                gap={5}
                justifyContent={'space-between'}
              >
                <ContactFields
                  type={'text'}
                  placeholder={'Name'}
                  name={'name'}
                  value={Fields.name}
                  setFields={name => setFields({ ...Fields, name })}
                />
                <ContactFields
                  type={'text'}
                  placeholder={'City'}
                  name={'city'}
                  value={Fields.city}
                  setFields={city => setFields({ ...Fields, city })}
                />
                <ContactFields
                  type={'text'}
                  placeholder={'email'}
                  name={'email'}
                  value={Fields.email}
                  setFields={email => setFields({ ...Fields, email })}
                />
                <ContactFields
                  type={'text'}
                  placeholder={'phone'}
                  name={'phone'}
                  value={Fields.phone}
                  setFields={phone => setFields({ ...Fields, phone })}
                />
                <Textarea
                  py={'4'}
                  height={'100px'}
                  placeholder={'Message'}
                  name={'message'}
                  value={Fields.message}
                  onChange={e =>
                    setFields({ ...Fields, message: e.target.value })
                  }
                  fontSize={'14px'}
                  border={'none'}
                  borderBottom={'2px solid #fff !important'}
                  fontWeight={500}
                  borderColor={'primaryBlue.100'}
                  resize={'none'}
                  borderRadius={'0'}
                  _focus={{
                    borderColor: 'primaryOrange.100',
                    outline: 'none',
                  }}
                  _placeholder={{ color: '#fff' }}
                ></Textarea>
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
              </Box>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
