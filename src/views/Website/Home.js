import { Stack, Text } from '@chakra-ui/react';
import Header from '../../components/Website/Header';
import HomeBanner from '../../components/Website/Banners/HomeBanner';
import About from '../../components/Website/About';
export default function Home() {
  return (
    <Stack>
      <HomeBanner />
      <About/>
    </Stack>
  );
}
