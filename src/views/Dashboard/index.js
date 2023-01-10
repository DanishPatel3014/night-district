import { Stack, Text } from "@chakra-ui/react";

export default function Home() {

  return (
    <Stack
      bgColor={'#1a1a1a'}
      w={'100%'}
      h={'100vh'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      color={'#fff'}  
      >
        <Text
          fontSize={38}
        >Let's Start Something Awesome!</Text>
    </Stack>
  );
}