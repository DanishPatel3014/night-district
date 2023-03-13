import {
  Box,
  Button,
  Flex,
  Img,
  Link,
  Stack,
  Modal,
  ModalContent,
  ModalHeader,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Input,
  Textarea,
  FormControl,
  Checkbox,
  useToast,
  FormLabel,
  Select,
  Switch,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { GET, POST } from '../../../utilities/ApiProvider';

export default function Menu() {
  const [posts, setPost] = useState([]);
  const [Hashtags, setHashtags] = useState([]);
  const [hashtagData, sethashtagData] = useState([]);
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  useEffect(() => {
    getHastags();
    getPosts();
  }, []);

  const getPosts = async () => {
    var response = await GET('/post');
    setPost(response.data);
  };
  const getHastags = async () => {
    var response = await GET('/admin/hashtag');
    setHashtags(response.data);
  };

  const [Fields, setFields] = useState({
    upload_document: {},
  });
  let hastagArray = [];
  const submitForm = async () => {
    try {
      const formData = new FormData();

      if (Fields.title === '' && Fields.description === '') {
        toast({
          status: 'error',
          title: 'Please fill in all the fields to proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        return;
      }

      formData.append('title', Fields.heading);
      formData.append('description', Fields.description);
      formData.append('hastags', hashtagData);

      var response = await POST('/post', formData);

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      setFields({
        username: '',
        password: '',
      });

      setisLoading(false);
    } catch (err) {
      console.log(err);
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
    }
  };

  const signupstyle = {
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  return (
    <>
      <MainDashboard>
        <Modal size={'3xl'} isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent bg={'dashbg.100'}>
            <ModalHeader>
              <CustomPara marginBottom={'0'} fontSize={'20px'}>
                Enter Menu Details
              </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
              <Stack gap={'4'}>
                <Input
                  sx={signupstyle}
                  placeholder={'Title'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.title}
                />
                <Textarea
                  sx={signupstyle}
                  placeholder={'Description'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.description}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      discrpition: e.target.value,
                    });
                  }}
                ></Textarea>

                <Box w={'full'} position={'relative'}>
                  <Select
                    size="lg"
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder="Select option"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
                <Box w={'full'} position={'relative'}>
                  <Select
                    size="lg"
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder="Select option"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
                <Stack>
                  <CustomPara>$Price</CustomPara>
                  <Stack direction={'row'} justifyContent={'space-between'}>
                    <Box>
                      <FormControl>
                        <FormLabel color={'#fff'} fontSize={'12px'}>1.5oz</FormLabel>
                        <Input sx={signupstyle} type="price" placeholder='$Price' />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl>
                        <FormLabel color={'#fff'} fontSize={'12px'}>1.5oz</FormLabel>
                        <Input sx={signupstyle} type="price" placeholder='$Price' />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl>
                        <FormLabel color={'#fff'} fontSize={'12px'}>1.5oz</FormLabel>
                        <Input sx={signupstyle} type="price" placeholder='$Price' />
                      </FormControl>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Stack direction={'row'} w={'full'} justifyContent={'center'}>
                <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                  Add Menu
                </Button>
                <Button onClick={onClose}>Discard</Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Stack p={'4'} gap={'8'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Category
              </CustomHeading>
              <FormControl position={'relative'}>
                <Input
                  color={'#fff'}
                  border={'1px solid #fff !important'}
                  _placeholder={{ color: '#fff' }}
                  placeholder="Search"
                />
                <Button bg={'transparent'} right={'0'} position={'absolute'}>
                  <Icon
                    color={'white'}
                    fontSize={'20px'}
                    as={AiOutlineSearch}
                  />
                </Button>
              </FormControl>
            </Box>
            <Box>
              <Button
                bg={'transparent'}
                textAlign={'center'}
                margin={'auto'}
                py={'10px'}
                px={'8'}
                lineHeight={'inherit'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                _hover={{
                  color: 'primaryText.200',
                }}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              >
                Add Drinks
              </Button>
            </Box>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
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
          <Stack>
            <Box>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                All Menu
              </CustomHeading>
            </Box>
            <Stack direction={'row'} gap={'4'}>
              <Link as={ReactLink} to={'/dashboard/singlemenu'}>
              <Box w={'339px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    mb={'0'}
                    fontSize={'21px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>
                  <CustomPara color={'brand.800'} fontSize={'14px'}>
                    Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut...
                  </CustomPara>
                  <Box>
                    <Flex gap={'2'}>
                      <CustomHeading
                        mb={'0'}
                        color={'#fff'}
                        fontSize={'17px'}
                        textAlign={'left'}
                      >
                        Category:{' '}
                      </CustomHeading>
                      <CustomPara> Spirits</CustomPara>
                    </Flex>
                    <Flex gap={'2'}>
                      <CustomHeading
                        color={'#fff'}
                        fontSize={'17px'}
                        textAlign={'left'}
                      >
                        Subcategory:{' '}
                      </CustomHeading>
                      <CustomPara> Bourbon</CustomPara>
                    </Flex>
                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              </Link>
              <Link as={ReactLink} to={'/dashboard/singlemenu'}>
              <Box w={'339px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    mb={'0'}
                    fontSize={'21px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>
                  <CustomPara color={'brand.800'} fontSize={'14px'}>
                    Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut...
                  </CustomPara>
                  <Box>
                    <Flex gap={'2'}>
                      <CustomHeading
                        mb={'0'}
                        color={'#fff'}
                        fontSize={'17px'}
                        textAlign={'left'}
                      >
                        Category:{' '}
                      </CustomHeading>
                      <CustomPara> Spirits</CustomPara>
                    </Flex>
                    <Flex gap={'2'}>
                      <CustomHeading
                        color={'#fff'}
                        fontSize={'17px'}
                        textAlign={'left'}
                      >
                        Subcategory:{' '}
                      </CustomHeading>
                      <CustomPara> Bourbon</CustomPara>
                    </Flex>
                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              </Link>
              
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
