import { Icon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Image,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Checkbox,
  Textarea,
  Img,
  Select
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { AiOutlineCopy } from 'react-icons/ai';
import profileimg from '../../../assets/images/other/profile.png';
import { useEffect , useState } from 'react';
import { POST , GET } from '../../../utilities/ApiProvider.js';
import Team from '../../../components/Dashboard/Team/index'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';

export default function TeamMember() {


  const profileImageRef = useRef(null);
  const [images, setImages] = useState({});
  const [theImage, setTheImage] = useState(null);


  
  const imageConverter = (file) => {
    setImages(file)
    setTheImage(URL.createObjectURL(new Blob(file)));
  }

  const defaultSrc = profileimg;
 // setup up state Variables

  const [members, setMembers] = useState([]);
  const [roles, setRoles] = useState([]);

  // get use from App Storage 

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
      getEmployee()
      getTeamMembers()
    }, [])

    const [Fields, setFields] = useState({
      upload_document: {},
    });
  
    const getTeamMembers = async() =>
    {
      var response = await GET(`/teammember/63ff22721917e3b2783a90ca`);
      setMembers(response.data)
    }
    // get Employeed

    const getEmployee = async() =>
    {
      var response = await GET(`/api/roles`);
      console.log(roles)
      setRoles(response.data)
    } 

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
                Add Team Member
              </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
            <Stack>
                  <Img
                    cursor={'pointer'}
                   
                    w={'120px'}
                    h={'120px'}
                    objectFit={'cover'}
                    m={'auto'}
                    borderRadius={'50%'}
                    src={theImage ?? defaultSrc}
                    alt="preview"
                  />
                  <Input type={'file'} display={'none'} ref={profileImageRef}  onChange={(e)=>imageConverter(e.target.files)}  />
                  <Button
                    bg={'transparent'}
                    color={'#fff'}
                    _hover={{
                      bg: 'transparent',
                      color: 'primaryText.200',
                    }}
                    onClick={()=> profileImageRef?.current.click()}
                   
                    
                  >
                    Upload Avatar
                  </Button>
                </Stack>
            <Stack gap={'4'}>
            
                  <Input
                    sx={signupstyle}
                    placeholder={'Name'}
                    type="text"
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
                    placeholder={'username'}
                    type="username"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.username}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        username: e.target.value,
                      });
                    }}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'password'}
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
                  <Select sx={signupstyle} placeholder='Select option' _placeholder={{ color: '#fff' }}>
    
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </Stack>
            </ModalBody>
            <ModalFooter>
              <Stack direction={'row'} w={'full'} justifyContent={'center'}>
                <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                  Save Changes
                </Button>
                <Button onClick={onClose}>Discard</Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Stack p={'4'} gap={'6'}>
          <Stack mb={'2'} direction={'row'} justifyContent={'space-between'}>
            <Box alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'20px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Bartenders/Bouncers
              </CustomHeading>
              <FormControl w={'350px'} position={'relative'}>
                <Input
                  color={'#fff'}
                  border={'1px solid #fff !important'}
                  _placeholder={{ color: '#fff' }}
                  placeholder="Search"
                />
                <Button bg={'transparent'} right={'0'} position={'absolute'}>
                  <Icon
                    color={'pHeading.100'}
                    fontSize={'20px'}
                    as={AiOutlineCopy}
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
                Create New Profile
              </Button>
            </Box>
          </Stack>
         <Team/>
        </Stack>
      </MainDashboard>
    </>
  );
}
