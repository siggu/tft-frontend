import {useQuery} from '@tanstack/react-query';
import {getSynergyJobs, getSynergyOrigins} from '../api';
import {Container, VStack, Text, Grid, Box, Image, HStack} from '@chakra-ui/react';
import ISynergy from '../components/types';

export default function Synergies() {
  const {data: originData, isLoading: isOriginLoading} = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergyOrigins,
  });
  const {data: jobData, isLoading: isJobLoading} = useQuery<ISynergy[]>({
    queryKey: ['jobs'],
    queryFn: getSynergyJobs,
  });

  if (isOriginLoading || isJobLoading) return <div>Loading...</div>;
  if (!originData || !jobData) return <div>Data not available</div>;

  return (
    <Container maxW={'container.xl'}>
      <VStack mb={20} alignItems={'flex-start'}>
        <Text as={'b'} fontSize={'20px'} color={'#dca555'}>
          계열 시너지
        </Text>
        <Grid gap={5} templateColumns={'2fr 2fr'}>
          {originData.map((origin, index) => (
            <>
              <Box border={'1px solid gray'}>
                <Box textAlign={'center'} p={3} bg={'#27282e'}>
                  <Box display={'flex'} alignItems="center" justifyContent="center">
                    <HStack>
                      <Image p={1} rounded={'10px'} w={'35px'} bg={'#646464'} src={origin.photos[0].file} />
                      <Text as={'b'} color={'white'}>
                        {origin?.name}
                      </Text>
                    </HStack>
                  </Box>
                </Box>
                <Box p={5}>
                  <Text fontWeight={'500'} fontSize={'14px'} color={'white'}>
                    {origin?.description}
                  </Text>
                </Box>
              </Box>
            </>
          ))}
        </Grid>
      </VStack>
      <VStack mb={20} alignItems={'flex-start'}>
        <Text as={'b'} fontSize={'20px'} color={'#dca555'}>
          직업 시너지
        </Text>
        <Grid gap={5} templateColumns={'2fr 2fr'}>
          {jobData.map((job, index) => (
            <>
              <Box border={'1px solid gray'}>
                <Box textAlign={'center'} p={3} bg={'#27282e'}>
                  <Box display={'flex'} alignItems="center" justifyContent="center">
                    <HStack>
                      <Image p={1} rounded={'10px'} w={'35px'} bg={'#646464'} src={job.photos[0].file} />
                      <Text color={'white'}>{job?.name}</Text>
                    </HStack>
                  </Box>
                </Box>
                <Box p={5}>
                  <Text color={'white'}>{job?.description}</Text>
                </Box>
              </Box>
            </>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
}
