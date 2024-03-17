import {useQuery} from '@tanstack/react-query';
import {getChampions, getSynergyJobs, getSynergyOrigins} from '../api';
import {Container, VStack, Text, Grid, Box, Image, HStack, Tooltip} from '@chakra-ui/react';
import ISynergy from '../components/types';
import IChampionDetail from './../components/types.d';
import React from 'react';
import Champion from '../components/Champion';

const StackText = ({stackText}: {stackText: string}) => {
  const stacks = stackText.split('/'); // "/"를 기준으로 문자열을 분할
  return stacks;
};

export default function Synergies() {
  const {data: originData, isLoading: isOriginLoading} = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergyOrigins,
  });
  const {data: jobData, isLoading: isJobLoading} = useQuery<ISynergy[]>({
    queryKey: ['jobs'],
    queryFn: getSynergyJobs,
  });
  const {data: championsData, isLoading: isChampionsLoading} = useQuery<IChampionDetail[]>({
    queryKey: ['champions'],
    queryFn: getChampions,
  });

  if (isOriginLoading || isJobLoading || isChampionsLoading) return <div>Loading...</div>;
  if (!originData || !jobData || !championsData) return <div>Data not available</div>;

  return (
    <Container maxW={'container.xl'}>
      {/* 계열 시너지 */}
      <VStack mb={20} alignItems={'flex-start'}>
        <Text as={'b'} fontSize={'20px'} color={'#dca555'}>
          계열 시너지
        </Text>
        <Grid gap={5} templateColumns={'1fr 1fr'}>
          {originData.map((origin, index) => (
            <>
              <Box border={'1px solid gray'}>
                <Box textAlign={'center'} p={3} bg={'#27282e'}>
                  <Box display={'flex'} alignItems="center" justifyContent="center">
                    <HStack>
                      <Image p={1} rounded={'10px'} w={'30px'} bg={'#646464'} src={origin.photos[0].file} />
                      <Text as={'b'} color={'white'}>
                        {origin?.name}
                      </Text>
                    </HStack>
                  </Box>
                </Box>
                <Box pt={5}>
                  <HStack justifyContent={'center'}>
                    {championsData
                      .filter((champion) =>
                        champion.origin.some((championOrigin) => championOrigin.name === origin.name)
                      )
                      .map((champion, index) => (
                        <>
                          <HStack>
                            <Champion
                              pk={champion.id}
                              name={champion.name}
                              cost={champion.cost}
                              photos={champion.photos[0].file}
                              origin={champion.origin}
                              job={champion.job}
                              attack_range={champion.attack_range}
                              skill={champion.skill}
                            />
                          </HStack>
                        </>
                      ))}
                  </HStack>
                </Box>
                <Box p={5}>
                  {origin?.description.split('\n').map((splitedContext) => (
                    <Text mb={1} fontWeight={'500'} fontSize={'14px'} color={'white'}>
                      {splitedContext}
                    </Text>
                  ))}
                  {/* <Text>{origin?.description}</Text> */}
                  {/* {StackText({stackText: origin?.tier.name || ''}).map((stack, index) => (
                    <Text fontSize={'13px'} key={index} color={'#555864'}>
                      {stack.trim()}
                    </Text>
                  ))} */}
                  {StackText({stackText: origin?.stack.stack || ''}).map((stack, index) => (
                    <Text fontWeight={'500'} fontSize={'13px'} key={index} color={'#555864'}>
                      <Text fontSize={'13px'} color={'#555864'}>
                        ({stack.trim()}) {(origin as any)[`effect_${index + 1}`]}
                      </Text>
                    </Text>
                  ))}
                </Box>
              </Box>
            </>
          ))}
        </Grid>
      </VStack>
      {/* 직업 시너지 */}
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
                      <Image p={1} rounded={'10px'} w={'30px'} bg={'#646464'} src={job.photos[0].file} />
                      <Text color={'white'}>{job?.name}</Text>
                    </HStack>
                  </Box>
                </Box>
                <Box pt={5}>
                  <HStack justifyContent={'center'}>
                    {championsData
                      .filter((champion) => champion.job.some((championJob) => championJob.name === job.name))
                      .map((champion, index) => (
                        <>
                          <HStack>
                            <Champion
                              pk={champion.id}
                              name={champion.name}
                              cost={champion.cost}
                              photos={champion.photos[0].file}
                              origin={champion.origin}
                              job={champion.job}
                              attack_range={champion.attack_range}
                              skill={champion.skill}
                            />
                          </HStack>
                        </>
                      ))}
                  </HStack>
                </Box>
                <Box p={5}>
                  <Text mb={1} fontWeight={'500'} fontSize={'14px'} color={'white'}>
                    {job?.description}
                  </Text>
                  {/* {StackText({stackText: job?.tier.name || ''}).map((stack, index) => (
                    <Text fontSize={'13px'} key={index} color={'#555864'}>
                      {stack.trim()}
                    </Text>
                  ))} */}
                  {StackText({stackText: job?.stack.stack || ''}).map((stack, index) => (
                    <Text fontWeight={'500'} fontSize={'13px'} key={index} color={'#555864'}>
                      <Text fontSize={'13px'} color={'#555864'}>
                        ({stack.trim()}) {(job as any)[`effect_${index + 1}`]}
                      </Text>
                    </Text>
                  ))}
                </Box>
              </Box>
            </>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
}
