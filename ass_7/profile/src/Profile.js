import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Profile() {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={'https://avatars.githubusercontent.com/u/67310562?v=4'}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Ishika Devare
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @ishikadevare13
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Web Developer{' '}
            &
          {' '}
          a Passionate Dancer
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
<Link href={'https://github.com/ishikadevare13'} >
            Follow
</Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
