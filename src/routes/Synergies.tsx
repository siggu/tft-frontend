import {useQuery} from '@tanstack/react-query';
import {getChampions, getSynergyJobs, getSynergyOrigins} from '../api';
import {
  Container,
  VStack,
  Text,
  Grid,
  Box,
  Image,
  HStack,
  Tooltip,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
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
  championsData?.sort((a, b) => a.cost1 - b.cost1);

  if (isOriginLoading || isJobLoading || isChampionsLoading) return <div>Loading...</div>;
  if (!originData || !jobData || !championsData) return <div>Data not available</div>;

  return (
    <Container maxW={'container.xl'}>
      <VStack>
        <TableContainer>
          <Table border={'1px solid'} borderColor={'gray.500'} color={'white'} variant={'unstyled'} size={'lg'}>
            <Thead borderInline={'1px solid gray'}>
              <Tr>
                <Th></Th>
                <Th>거대괴수</Th>
                <Th>결투가</Th>
                <Th>귀인</Th>
                <Th>기원자</Th>
                <Th>난동꾼</Th>
                <Th>비전 마법사</Th>
                <Th>사신</Th>
                <Th>연인</Th>
                <Th>예술가</Th>
                <Th>이타심</Th>
                <Th>재주꾼</Th>
                <Th>저격수</Th>
                <Th>정령 주술사</Th>
                <Th>파수꾼</Th>
                <Th>현자</Th>
                <Th>호걸</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* 도자기 */}
              <Tr>
                <Td>도자기</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              {/* 먹그림자 */}
              <Tr>
                <Td>먹그림자</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              {/* 숲지기 */}
              <Tr>
                <Td textAlign={'center'}>
                  <HStack>
                    <Image width={'20px'} src={originData[0].photos[0].file} />
                    <Text fontSize={'13px'}>숲지기</Text>
                  </HStack>
                  <Text fontSize={'12px'} color={'gray'}>
                    2/4/6
                  </Text>
                </Td>
                {/* 거대괴수 */}
                <Td>
                  {
                    // <Champion
                    //   pk={championsData[0].pk}
                    //   name={'오른'}
                    //   cost={4}
                    //   photos={championsData[6].photos[0].file}
                    //   origin={championsData[6].origin}
                    //   job={championsData[6].job}
                    //   attack_range={1}
                    //   skill={championsData[6].skill}
                    // />
                  }
                </Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td textAlign={'center'}>
                  <HStack>
                    <Image width={'20px'} src={originData[3].photos[0].file} />
                    <Text fontSize={'13px'}>신화</Text>
                  </HStack>
                  <Text fontSize={'12px'} color={'gray'}>
                    3/5/7/10
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td textAlign={'center'}>
                  <HStack>
                    <Image width={'20px'} src={originData[3].photos[0].file} />
                    <Text fontSize={'13px'}>암영</Text>
                  </HStack>
                  <Text fontSize={'12px'} color={'gray'}>
                    2/4/6/8
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td textAlign={'center'}>
                  <HStack>
                    <Image width={'20px'} src={originData[3].photos[0].file} />
                    <Text fontSize={'13px'}>신화</Text>
                  </HStack>
                  <Text fontSize={'12px'} color={'gray'}>
                    3/5/7/10
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
      {/* 계열 시너지 */}
      <VStack mb={20} alignItems={'flex-start'}>
        <Text as={'b'} fontSize={'20px'} color={'#dca555'}>
          계열 시너지
        </Text>
        <Grid gap={5} templateColumns={{sm: '1fr', lg: '1fr 1fr'}}>
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
                      // .filter((champion) =>
                      //   champion.origin.some((championOrigin) => championOrigin.name === origin.name)
                      // )
                      .map((champion, index) => (
                        <>
                          <HStack>
                            <Champion
                              key={champion.key}
                              name={champion.name}
                              cost={champion.cost1}
                              photos={champion.photos[0].file}
                              traits1={champion.traits1}
                              traits2={champion.traits2}
                              attack_range={champion.attackRange}
                              skill={champion.skill_name}
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
                  {StackText({stackText: origin?.stack.stack || ''}).map((stack, index) => (
                    <Text fontWeight={'500'} fontSize={'13px'} key={index} color={'#555864'}>
                      <HStack gap={1}>
                        <Box>({stack.trim()})</Box>
                        <Text fontSize={'13px'} color={'#555864'}>
                          {(origin as any)[`effect_${index + 1}`]}
                        </Text>
                      </HStack>
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
                      // .filter((champion) => champion.job.some((championJob) => championJob.name === job.name))
                      .map((champion, index) => (
                        <>
                          <HStack>
                            <Champion
                              key={champion.key}
                              name={champion.name}
                              cost={champion.cost1}
                              photos={champion.photos[0].file}
                              traits1={champion.traits1}
                              traits2={champion.traits2}
                              attack_range={champion.attackRange}
                              skill={champion.skill_name}
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
