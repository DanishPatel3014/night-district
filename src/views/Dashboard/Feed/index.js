import { Box, Img, Stack } from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Feed1 from '../../../assets/images/feed/f1.jpg';
import { Icon } from '@chakra-ui/icons';
import { POST , GET } from '../../../utilities/ApiProvider.js';
import { useEffect , useState } from 'react';

export default function Post() {

  // setup up state Variables

  const [posts, setPost] = useState([]);

  // Add Use Effects

  useEffect(() => {
    getPosts()
  }, [])


  const getPosts = async() =>
  {
    var response = await GET('/post');
    setPost(response.data)
  }

  





  return (
    <>
   
      <MainDashboard>
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
              <BorderButton Url={'./'} Btnctn={'Add New Post'} />
            </Box>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            {
              posts.map((e) => {
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
                )
              })
            }
           
           
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
