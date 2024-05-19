import {useQuery} from '@tanstack/react-query';
import {getEncounters} from '../api';
import IEncounter from './../components/types.d';
import {Box, Grid, Text, VStack, Image, HStack, Container} from '@chakra-ui/react';

export default function Encounters() {
  const {data, isLoading} = useQuery<IEncounter[]>({
    queryKey: ['encounters'],
    queryFn: getEncounters,
  });
  const sortedData = data ? [...data].sort((a, b) => a.ingameKey.localeCompare(b.ingameKey)) : [];

  return (
    <Container maxW={'container.xl'} minH={'500px'}>
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
              {sortedData &&
                sortedData.map((encounter: IEncounter) => (
                  <VStack
                    alignItems={'flex-start'}
                    key={encounter.ingameKey}
                    bg="#27282e"
                    color={'white'}
                    gap={5}
                    w={'100%'}
                    m={5}
                    border={'1px solid'}
                    p={5}
                  >
                    <HStack>
                      <Image w="15%" src={encounter.tileImageUrl} />
                      <Text w="100px" fontSize={'20px'}>
                        {encounter.name}
                      </Text>
                      <Text w="70%" fontSize={'16px'}>
                        {encounter.encounterDesc}
                      </Text>
                    </HStack>
                  </VStack>
                ))}
            </Grid>
          </Box>
        )}
      </VStack>
    </Container>
  );
}
