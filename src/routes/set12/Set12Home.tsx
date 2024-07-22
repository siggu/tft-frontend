import { Box, Container, Text, VStack } from '@chakra-ui/react';

export default function Set12Home() {
  return (
    <VStack>
      <Container maxW={'container.xl'} minH={'500px'}>
        <Box mb={5}>
          <Text as={'b'} color={'#6e43d9'} fontSize={'20px'}>
            추천 메타
          </Text>
        </Box>
      </Container>
    </VStack>
  );
}
