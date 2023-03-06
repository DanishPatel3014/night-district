import { Container, Img, Button, Stack, Box, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import { useState, React } from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import profileimg from '../../../assets/images/other/profile.png';
import { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { CirclePicker, SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn.js';

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  const defaultSrc = profileimg;
  

  const [blockPickerColor, setBlockPickerColor] = useState('#37d67a');
  const [displayColorPicker, setdisplayColorPicker] = useState(false);
  const handleClick = () => {
    setdisplayColorPicker(true);
  };
  const handleClose = () => {
    setdisplayColorPicker(false);
  };
  const handleChange = color => {
    this.setState({ color: color.rgb });
  };
  const popover = {
    position: 'absolute',
    zIndex: '2',
    bottom: '50px',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const tblist = 
  {
    color : '#fff',
  }

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
                <ListItem><Link sx={tblist} as={ReactLink} to={'/'}>Customize Your Profile</Link></ListItem>
                <ListItem><Link sx={tblist} as={ReactLink} to={'/'}>Add Your Bar’s Information</Link></ListItem>
                <ListItem><Link sx={tblist} as={ReactLink} to={'/'}>Add Your Menu</Link></ListItem>
                <ListItem><Link sx={tblist} as={ReactLink} to={'/'}>Add Your Events</Link></ListItem>
              </UnorderedList>
            </Stack>
            <Stack w={'70%'}>
              <Stack gap={'20'}>
                <Stack>
                  <Img margin={'auto'} w={'150px'} src={logo} />
                </Stack>

                <Stack>
                  {/* <Img
                    w={'120px'}
                    h={'120px'}
                    objectFit={'cover'}
                    m={'auto'}
                    borderRadius={'50%'}
                    src={files?.source || defaultSrc}
                    alt="preview"
                  /> */}
                  {/* <Button
                    bg={'transparent'}
                    color={'#fff'}
                    _hover={{
                      bg: 'transparent',
                      color: 'primaryText.200',
                    }}
                    onClick={() =>
                      selectFiles(
                        { accept: 'image/*' },
                        ({ name, size, source, file }) => {
                          console.log('Files Selected', {
                            name,
                            size,
                            source,
                            file,
                          });
                        }
                      )
                    }
                  >
                    Upload Avatar
                  </Button> */}
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems={'flex-end'}
                  justifyContent={'space-between'}
                >
                  <Box>
                    <CustomHeading
                      color={'white'}
                      fontSize={'20px'}
                      textAlign={'left'}
                    >
                      Choose Your Color Preference
                    </CustomHeading>
                    <CirclePicker width={'60%'} />
                  </Box>
                  <Box position={'relative'}>
                    <Button onClick={() => handleClick()}>
                      Custom Color Picker
                    </Button>
                    {displayColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={() => handleClose()} />
                        <SketchPicker
                          color={blockPickerColor}
                          onChange={color => {
                            setBlockPickerColor(color.hex);
                          }}
                        />
                      </div>
                    ) : null}
                  </Box>
                </Stack>
                <Stack>
                  <PrimaryBtn
                    px={'20'}
                    m={'auto'}
                    w={'fit-content'}
                    value={'Next'}
                  />
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
