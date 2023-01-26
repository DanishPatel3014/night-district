import React from 'react';
import CustomPara from '../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../components/Website/Headings/CustomHeading';
import { Icon } from '@chakra-ui/icons';
import { AiFillStar } from 'react-icons/ai';
import { Box, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

export default function OrderBox() {
  return (
    <>
      <Box w={'280px'} py={'4'} pl={'5'} pr={'8'} bg={'#212121'}>
        <CustomPara color={'primaryText.100'}>Average Drink Rating</CustomPara>
        <Stack direction={'row'} alignItems={'center'}>
          <Box>
            <CustomHeading textAlign={'left'} fontSize={'30px'} color={'#fff'}>
              $10
            </CustomHeading>
          </Box>
          <Box>
            <UnorderedList display={'flex'}>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'16px'} as={AiFillStar} />
              </ListItem>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'16px'} as={AiFillStar} />
              </ListItem>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'16px'} as={AiFillStar} />
              </ListItem>
              <ListItem>
                <Icon color={'#ffee37'} fontSize={'16px'} as={AiFillStar} />
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
