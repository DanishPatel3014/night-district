import { React, useEffect } from 'react';
import {
  Container,
  Img,
  Stack,
  UnorderedList,
  ListItem,
  Link,
  Box,
} from '@chakra-ui/react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import cat1 from '../../../assets/images/menu/c1.jpg';

export default function ChooseCategory() {
  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  const tblist = {
    color: '#fff',
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
              <Stack>
                <Box>
                  <CustomHeading textAlign={'left'} fontSize={'25px'} color={'#fff'}>
                    Spirits
                  </CustomHeading>
                </Box>
                <Stack>
                <Link>
              <Box
                position={'relative'}
                pr={'4'}
                display={'flex'}
                justifyContent={'right'}
                alignItems={'flex-end'}
                borderRadius={'8px'}
                h={'125px'}
                w={'198px'}
                zIndex={'1'}
                backgroundImage={cat1}
                _before={{
                  content: "''",
                  w: '100%',
                  h: '100%',
                  position: 'absolute',
                  bg: '#0000007a',
                  right: '0',
                  left: '0',
                  zIndex: '-1',
                }}
              >
                <CustomHeading
                  fontSize={'25px'}
                  fontWeight={'700'}
                  color={'#fff'}
                >
                  Spirits
                </CustomHeading>
              </Box>
            </Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack w={'30%'}></Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
