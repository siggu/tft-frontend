import {useQuery} from '@tanstack/react-query';
import {getEncounters} from '../api';
import IEncounter from './../components/types.d';
import {Box, Grid, Text, VStack, Image, HStack, Container} from '@chakra-ui/react';

export default function Encounters() {
  const {data, isLoading} = useQuery<IEncounter[]>({
    queryKey: ['encounters'],
    queryFn: getEncounters,
  });

  return (
    <Container maxW={'container.xl'}>
      <Box mb={5}>
        <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
          조우자
        </Text>
      </Box>
      <VStack>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Box>
            <Grid gap={5} templateColumns={'2fr 2fr'}>
              {data &&
                data.map((encounter: IEncounter) => (
                  <VStack
                    alignItems={'flex-start'}
                    key={encounter.id}
                    bg="#27282e"
                    gap={5}
                    w={'100%'}
                    m={5}
                    border={'1px solid'}
                    p={5}
                  >
                    {encounter.description_1 && (
                      <Box mb={10}>
                        <Box>
                          <HStack>
                            <Image w={'50px'} h={'50px'} rounded={'10px'} src={encounter.photos[0].file} />
                            <Text as={'b'} color={'white'}>
                              {encounter.name}
                            </Text>
                          </HStack>
                        </Box>
                        <Box ml={14}>
                          <Text fontSize={'14px'} color={'gray.500'}>
                            {encounter.description_1}
                          </Text>
                        </Box>
                      </Box>
                    )}
                    {encounter.description_2 && (
                      <Box mb={10}>
                        <Box>
                          <HStack>
                            <Image w={'50px'} h={'50px'} rounded={'10px'} src={encounter.photos[0].file} />
                            <Text as={'b'} color={'white'}>
                              {encounter.name}
                            </Text>
                          </HStack>
                        </Box>
                        <Box ml={14}>
                          <Text fontSize={'14px'} color={'gray.500'}>
                            {encounter.description_2}
                          </Text>
                        </Box>
                      </Box>
                    )}
                    {encounter.description_3 && (
                      <Box mb={10}>
                        <Box>
                          <HStack>
                            <Image w={'50px'} h={'50px'} rounded={'10px'} src={encounter.photos[0].file} />
                            <Text as={'b'} color={'white'}>
                              {encounter.name}
                            </Text>
                          </HStack>
                        </Box>
                        <Box ml={14}>
                          <Text fontSize={'14px'} color={'gray.500'}>
                            {encounter.description_3}
                          </Text>
                        </Box>
                      </Box>
                    )}
                    {encounter.description_4 && (
                      <Box mb={10}>
                        <Box>
                          <HStack>
                            <Image w={'50px'} h={'50px'} rounded={'10px'} src={encounter.photos[0].file} />
                            <Text as={'b'} color={'white'}>
                              {encounter.name}
                            </Text>
                          </HStack>
                        </Box>
                        <Box ml={14}>
                          <Text fontSize={'14px'} color={'gray.500'}>
                            {encounter.description_4}
                          </Text>
                        </Box>
                      </Box>
                    )}
                  </VStack>
                ))}
            </Grid>
          </Box>
        )}
      </VStack>
    </Container>
  );
}
