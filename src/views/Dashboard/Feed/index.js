import {
  Box,
  Img,
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  Stack,
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
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Feed1 from '../../../assets/images/feed/f1.jpg';
import { Icon } from '@chakra-ui/icons';
import { POST, GET } from '../../../utilities/ApiProvider.js';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Post() {
  // setup up state Variables

  const [posts, setPost] = useState([]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  // Add Use Effects

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    var response = await GET('/post');
    setPost(response.data);
  };

  const [Fields, setFields] = useState({
    upload_document: {},
  });

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
                Add Feed
              </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
            <Stack gap={'4'}>
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
                      onChange={e => {
                        setFields({
                          ...Fields,
                          upload_document: e.target.value,
                        });
                      }}
                    />
                  </Box>
                  <Input
                    sx={signupstyle}
                    placeholder={'Enter Heading'}
                    type="Name"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.heading}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        heading: e.target.value,
                      });
                    }}
                  />
                  <Textarea
                    sx={signupstyle}
                    placeholder={'Enter Heading'}
                    type="Name"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.discrpition}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        discrpition: e.target.value,
                      });
                    }}
                  ></Textarea>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={'4'}
                  >
                    <CustomHeading
                      fontSize={'22px'}
                      color={'#fff'}
                      textAlign={'left'}
                    >
                      Hashtags
                    </CustomHeading>
                    <FormControl w={'40%'} position={'relative'}>
                      <Input
                        color={'#fff'}
                        border={'1px solid #fff !important'}
                        _placeholder={{ color: '#fff' }}
                        placeholder="Search"
                      />
                      <Button
                        bg={'transparent'}
                        right={'0'}
                        position={'absolute'}
                      >
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlineSearch}
                        />
                      </Button>
                    </FormControl>
                  </Box>
                  <Stack
                    direction={'row'}
                    gap={'3'}
                    spacing={'0'}
                    flexWrap={'wrap'}
                    color={'#fff'}
                  >
                    <Checkbox
                      border={'1px solid #fff'}
                      position={'relative'}
                      px={'4'}
                      py={'1'}
                      borderRadius={'6'}
                      className="chckbox"
                    >
                      <Stack direction={'row'}>
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlinePlusCircle}
                        />
                        <Text>Checkbox One</Text>
                      </Stack>
                    </Checkbox>
                    <Checkbox
                      border={'1px solid #fff'}
                      position={'relative'}
                      px={'4'}
                      py={'1'}
                      borderRadius={'6'}
                      className="chckbox"
                    >
                      <Stack direction={'row'}>
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlinePlusCircle}
                        />
                        <Text>Checkbox Two</Text>
                      </Stack>
                    </Checkbox>
                    <Checkbox
                      border={'1px solid #fff'}
                      position={'relative'}
                      px={'4'}
                      py={'1'}
                      borderRadius={'6'}
                      className="chckbox"
                    >
                      <Stack direction={'row'}>
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlinePlusCircle}
                        />
                        <Text>Checkbox</Text>
                      </Stack>
                    </Checkbox>
                    <Checkbox
                      border={'1px solid #fff'}
                      position={'relative'}
                      px={'4'}
                      py={'1'}
                      borderRadius={'6'}
                      className="chckbox"
                    >
                      <Stack direction={'row'}>
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlinePlusCircle}
                        />
                        <Text>Checkbox</Text>
                      </Stack>
                    </Checkbox>
                    <Checkbox
                      border={'1px solid #fff'}
                      position={'relative'}
                      px={'4'}
                      py={'1'}
                      borderRadius={'6'}
                      className="chckbox"
                    >
                      <Stack direction={'row'}>
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlinePlusCircle}
                        />
                        <Text>Checkbox</Text>
                      </Stack>
                    </Checkbox>
                  </Stack>
                </Stack>
            </ModalBody>
            <ModalFooter>
              <Stack direction={'row'} w={'full'} justifyContent={'center'}>
                <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                  Post
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
                All Feeds
              </CustomHeading>
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
                Add New Post
              </Button>
            </Box>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            {posts.map(e => {
              return (
                <Box w={'515px'} bg={'dashbg.100'}>
                  <Stack p={'4'}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          textAlign={'left'}
                          color={'#fff'}
                          fontSize={'25px'}
                          mb={'0'}
                        >
                          {e.title}
                        </CustomHeading>
                        <CustomPara color={'brand.800'} fontSize={'13px'}>
                          {e.createdAt}
                        </CustomPara>
                      </Box>
                      <Box>
                        <Icon
                          color={'white'}
                          fontSize={'30px'}
                          as={HiOutlineDotsHorizontal}
                        />
                      </Box>
                    </Stack>
                    <Stack>
                      <CustomPara fontSize={'14px'} color={'brand.800'}>
                        {e.description}
                      </CustomPara>
                    </Stack>
                  </Stack>
                  <Stack>
                    <Img src={Feed1} />
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
