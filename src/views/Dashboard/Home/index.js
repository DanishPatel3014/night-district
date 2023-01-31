import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import OrderBox from '../../../components/Dashboard/Order/OrderBox';
import OrderSalesCharts from '../../../components/Dashboard/Order/OrderSalesCharts';
import NightlyReports from '../../../components/Dashboard/Order/NightlyReports';

export default function Index() {
  return (
    <>
      <MainDashboard title={'Home'}>
        <Stack p={'4'}>
          <Stack mb={'6'}>
            <CustomHeading textAlign={'left'} fontSize={'30px'} color={'#fff'}>
              Orders
            </CustomHeading>
          </Stack>
          <Stack pb={'20'} direction={'row'} gap={'6'}>
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
          </Stack>
          <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'}>
            <Box>
              <NightlyReports/>
            </Box>
            <Box w={'50%'}>
              <OrderSalesCharts />
            </Box>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
