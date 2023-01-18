import { Stack, Text } from '@chakra-ui/react';
import HomeBanner from '../../components/Website/Banners/HomeBanner';
import About from '../../components/Website/About';
import AppCta from '../../components/Website/Appcta/AppCta';
import Subscribe from '../../components/Website/Subscribe/Subscribe';
import Contact from '../../components/Website/Contact/Contact';
import Featured from '../../components/Website/Featured/Featured';
import Testimonail from '../../components/Website/Testimonail/Testimonail';
export default function Home() {
  return (
    <Stack>
      <HomeBanner />
      <About/>
      <AppCta/>
      <Subscribe/>
      <Contact/>
      <Featured/>
      <Testimonail/>
    </Stack>
  );
}
