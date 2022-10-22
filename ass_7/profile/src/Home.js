import db from "./fb";
import { get, ref, child, remove } from "firebase/database";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.shiksha.com/mediadata/images/1558338398phpVH5U8J_g.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Vivekanand Education Society's Institute of Technology
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.400'}
              
              color={'white'}
              _hover={{ bg: 'blue.200' }}
              onClick={() => {
                window.location.href = 'https://vesit.ves.ac.in/';
              }}
            >
              VESIT Main Site
            </Button>
            <Button
              bg={'whiteAlpha.400'}
              
              color={'white'}
              _hover={{ bg: 'blue.200' }}
            >
              <Link to="/profile">Profile</Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
