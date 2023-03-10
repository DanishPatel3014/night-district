import { React } from 'react';
import {
  Container,
  Img,
  Stack,
  UnorderedList,
  ListItem,
  Link,
  Box,
} from '@chakra-ui/react';
import { useState , useEffect } from 'react';
import { GET, POST} from '../../../utilities/ApiProvider.js';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import cat1 from '../../../assets/images/menu/c1.jpg';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../utilities/Config.js';

export default function ChooseCategory() {
  const location = useLocation();
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(state => state?.value);


  // useEffect(() => {
  //   console.log(user);
  //   getUserData();
  // }, [user]);

  const getUserData = async () => {
    setIsLoading(true);
    let response = await GET(`${baseUrl}admin/category`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });

    setCategory(response.data);
  };

  useEffect(() => {
    getUserData();
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
            <Stack w={'350px'}>
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
                Add Your Menu
                </CustomHeading>
                <CustomPara textAlign={'center'}>Select a menu category to get started</CustomPara>
              </Stack>
           <Stack gap={'8'}>  
           <Stack>
                <Box>
                  <CustomHeading
                    textAlign={'left'}
                    fontSize={'25px'}
                    color={'#fff'}
                  >
                    Spirits
                  </CustomHeading>
                </Box>
                <Stack direction={'row'} gap={'4'} flexWrap={'wrap'} spacing={'0'}>
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
              <Stack>
                <Box>
                  <CustomHeading
                    textAlign={'left'}
                    fontSize={'25px'}
                    color={'#fff'}
                  >
                    Cocktails
                  </CustomHeading>
                </Box>
                <Stack direction={'row'} gap={'4'} flexWrap={'wrap'} spacing={'0'}>
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
              <Stack>
                <Box>
                  <CustomHeading
                    textAlign={'left'}
                    fontSize={'25px'}
                    color={'#fff'}
                  >
                   Beer
                  </CustomHeading>
                </Box>
                <Stack direction={'row'} gap={'4'} flexWrap={'wrap'} spacing={'0'}>
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
              <Stack>
                <Box>
                  <CustomHeading
                    textAlign={'left'}
                    fontSize={'25px'}
                    color={'#fff'}
                  >
                   Wine
                  </CustomHeading>
                </Box>
                <Stack direction={'row'} gap={'4'} flexWrap={'wrap'} spacing={'0'}>
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
                  <Link marginLeft={'0'}>
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
                        bg: '#000',
                        right: '0',
                        left: '0',
                        zIndex: '-1',
                        borderRadius: '6px',
                        opacity: '0.6',
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
            </Stack>
            <Stack w={'350px'}></Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
