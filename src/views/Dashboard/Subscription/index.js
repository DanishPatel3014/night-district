import { Box, Flex, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import Planwarp from '../../../components/Dashboard/Plans/Planwarp';

export default function index() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
        <Stack>
              <CustomHeading
                textAlign={'left'}
                fontSize={'30px'}
                color={'#fff'}
              >
                Subscription Plans
              </CustomHeading>
            </Stack>
            <Stack direction={'row'} gap={'6'}>
            <Planwarp/>
            </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
