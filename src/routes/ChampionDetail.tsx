import {useQuery} from '@tanstack/react-query';
import {getChampion, getChampions} from '../api';
import {useParams} from 'react-router-dom';
import {FaFlask, FaCoins} from 'react-icons/fa';
import {Box, Container, HStack, Image, Text, VStack, Grid, useMediaQuery} from '@chakra-ui/react';
import IChampion from '../components/types';
import Champion from '../components/Champion';

export default function ChampionDetail() {
  // 특정 챔피언 1개만 가져오기 (url)
  const {championPk} = useParams();
  const {data: championData, isLoading: isChampionDataLoading} = useQuery<IChampion>({
    queryKey: ['champion', championPk],
    queryFn: getChampion,
  });

  // 모든 챔피언 가져오기

  const {data: allChampionsData, isLoading: isAllChampionDataLoading} = useQuery<IChampion[]>({
    queryKey: ['champions'],
    queryFn: getChampions,
  });

  const [mediaSize] = useMediaQuery('(min-width: 1200px)');
  allChampionsData?.sort((a, b) => a.cost1 - b.cost1);
  console.log('allChampionsData : ', allChampionsData);

  return (
    <Container maxW={'container.xl'} minH={'500px'}>
      {!isChampionDataLoading && !isAllChampionDataLoading ? (
        <VStack flexDir={mediaSize ? 'row' : 'column'} gap={'0px'}>
          {/* # 1. 전체 챔피언 보여주기 */}
          <Container
            maxW={mediaSize ? '300px' : '1120px'}
            mt="20px"
            mr={'0px'}
            minW={mediaSize ? '300px' : '700px'}
            position={mediaSize ? 'relative' : 'static'}
            top={mediaSize ? '-320px' : '0px'}
          >
            <HStack gap={'5px'} flexWrap="wrap" p={mediaSize ? '0px' : '20px'}>
              {allChampionsData?.map((allChampionsData_ele) => (
                <Champion
                  key={allChampionsData_ele.key}
                  name={allChampionsData_ele.name}
                  cost={allChampionsData_ele.cost1}
                  photos={allChampionsData_ele.imageUrl}
                  traits1={allChampionsData_ele.traits1}
                  traits2={allChampionsData_ele.traits2}
                  attack_range={allChampionsData_ele.attackRange}
                  skill={allChampionsData_ele.skill_name}
                />
              ))}
            </HStack>
          </Container>
          {/* # 2-1. 챔피언 세부정보 박스 */}
          <Container maxW="1120px" minW="700px" ml={'0px'}>
            <VStack maxW="1120px" p="20px" minW="700px">
              <VStack gap={0} justifyContent={'center'} fontSize={'sm'} w={'100%'}>
                {/* 이름, 초상화, 비용, 계열, 직업 */}
                <HStack
                  minW="100%"
                  justifyContent={'space-between'}
                  border={'solid'}
                  borderColor="gray.800"
                  borderWidth={1}
                  gap={5}
                  borderBottom={0}
                  backgroundColor="black"
                  color="white"
                >
                  <HStack p={5}>
                    <Image src={championData?.imageUrl} borderRadius={'20'} />
                    <Text p={5} fontSize={'2xl'} as={'b'}>
                      {championData?.champion_name}
                    </Text>
                  </HStack>
                  <VStack p={5} alignItems={'flex-start'} bgColor={'#2b2e37'}>
                    <HStack>
                      <Text mr={5}>비용</Text>
                      <FaCoins color="#ffb42c" />
                      <Text>{championData?.cost1}</Text>
                    </HStack>
                    <HStack>
                      {/* <Text mr={5}>계열</Text>
                      {championData?.origin.map((value) => (
                        <>
                          <Image p={1} w="35px" h="35px" rounded={'2xl'} bgColor={'gray'} src={value.photos[0].file} />
                          <Text>{value.name}</Text>
                        </>
                      ))}
                    </HStack>
                    <HStack>
                      <Text mr={5}>직업</Text>
                      {championData?.job.map((value) => (
                        <>
                          <Image p={1} w="35px" h="35px" rounded={'2xl'} bgColor={'gray'} src={value.photos[0].file} />
                          <Text>{value.name}</Text>
                        </>
                      ))} */}
                    </HStack>
                  </VStack>
                </HStack>

                {/* 체력, 공격력, DPS, 공격사거리, 공격속도, 방어력, 마법저항력 */}
                <HStack
                  minW="100%"
                  bg="#fafafa"
                  alignItems={'flex-start'}
                  border={'solid'}
                  borderColor="gray.300"
                  borderWidth={1}
                  p={5}
                  gap={5}
                  borderBottom={0}
                  justifyContent={'space-evenly'}
                >
                  <VStack>
                    <Text>체력</Text>
                    <Text as={'b'}>
                      {championData?.health1} / {championData?.health2} / {championData?.health3}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text>공격력</Text>
                    <Text as={'b'}>
                      {championData?.attackDamage1} / {championData?.attackDamage2} / {championData?.attackDamage3}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text>DPS</Text>
                    <Text as={'b'}>
                      {championData?.damagePerSecond1} / {championData?.damagePerSecond2} /{' '}
                      {championData?.damagePerSecond3}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text>공격사거리</Text>
                    <Text as={'b'}>{championData?.attackRange}</Text>
                  </VStack>
                  <VStack>
                    <Text>공격속도</Text>
                    <Text as={'b'}>{championData?.attackSpeed}</Text>
                  </VStack>
                  <VStack>
                    <Text>방어력</Text>
                    <Text as={'b'}>{championData?.armor}</Text>
                  </VStack>
                  <VStack>
                    <Text>마법저항력</Text>
                    <Text as={'b'}>{championData?.magicalResistance}</Text>
                  </VStack>
                </HStack>

                {/* 스킬 초상화, 스킬명, 스킬유형, 마나, 스킬 내용, 스킬효과 */}
                <HStack
                  minW="100%"
                  alignItems={'flex-start'}
                  border={'solid'}
                  borderColor="gray.300"
                  borderWidth={1}
                  p={5}
                  gap={5}
                  bgColor={'#fffffe'}
                >
                  <Image src={championData?.skill_imageUrl} />

                  <VStack alignItems={'flex-start'}>
                    <Text as={'b'} fontSize="lg">
                      {championData?.skill_name}
                    </Text>
                    <HStack>
                      <Text>{championData?.skill_type}</Text>
                      <Text>|</Text>
                      <FaFlask color="#217ac7" />
                      <Text>
                        {championData?.skill_startingMana}/{championData?.skill_skillMana}
                      </Text>
                    </HStack>
                    <Text>{championData?.skill_desc}</Text>
                    <Text color="#ca9372">
                      {championData?.skill_stats1} <br />
                      {championData?.skill_stats2} <br />
                      {championData?.skill_stats3} <br />
                      {championData?.skill_stats4} <br />
                      {championData?.skill_stats5}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              {/*# 2-2. 챔피언의 해당 시너지 세부정보 */}
              <VStack gap={0} justifyContent={'center'} fontSize={'sm'} w={'100%'}>
                <HStack
                  as="b"
                  fontSize="lg"
                  h="60px"
                  bgColor="#ca9372"
                  color={'white'}
                  textAlign={'center'}
                  w="100%"
                  pl="16px"
                >
                  <Text>시너지</Text>
                </HStack>
                {/* 계열 */}

                {/* {championData?.origin.map((origin_obj) => (
                  <HStack
                    w="100%"
                    h="100%"
                    bgColor={'#fffffe'}
                    justifyContent={'center'}
                    minW={'120px'}
                    minH={'200px'}
                    borderLeft={'1px'}
                    borderRight={'1px'}
                    borderBottom={'1px'}
                    borderColor={'gray.300'}
                  >
                    <HStack backgroundColor={'#fff7ec'} justifyContent={'center'} minW={'120px'} minH={'200px'}>
                      <Image w="35px" h="35px" rounded={'5'} bgColor={'gray'} src={origin_obj.photos[0].file} />
                      <Text as={'b'}>{origin_obj.name}</Text>
                    </HStack>
                    <VStack p={'16px'} w={'100%'} h={'100%'}>
                      <HStack>
                        {allChampionsData?.map((allChampions_item) =>
                          allChampions_item.origin.map((allChampions_item_origin_obj) => {
                            if (allChampions_item_origin_obj.name === origin_obj.name) {
                              return (
                                <>
                                  <Champion
                                    pk={allChampions_item.id}
                                    name={allChampions_item.name}
                                    cost={allChampions_item.cost}
                                    photos={allChampions_item.photos[0].file}
                                    origin={allChampions_item.origin}
                                    job={allChampions_item.job}
                                    attack_range={allChampions_item.attack_range}
                                    skill={allChampions_item.skill}
                                  />
                                </>
                              );
                            }
                          })
                        )}
                      </HStack>
                      <Text as={'b'}>{origin_obj.description}</Text>
                    </VStack>
                  </HStack>
                ))} */}

                {/* 직업 */}
                {/* {championData?.job.map((job_obj) => (
                  <HStack
                    w="100%"
                    h="100%"
                    bgColor={'#fffffe'}
                    justifyContent={'center'}
                    minW={'120px'}
                    minH={'200px'}
                    borderLeft={'1px'}
                    borderRight={'1px'}
                    borderBottom={'1px'}
                    borderColor={'gray.300'}
                  >
                    <HStack backgroundColor={'#fff7ec'} justifyContent={'center'} minW={'120px'} minH={'200px'}>
                      <Image w="35px" h="35px" rounded={'5'} bgColor={'gray'} src={job_obj.photos[0].file} />
                      <Text as={'b'}>{job_obj.name}</Text>
                    </HStack>
                    <VStack p={'16px'} w={'100%'} h={'100%'}>
                      <HStack>
                        {allChampionsData?.map((allChampions_item) =>
                          allChampions_item.job.map((allChampions_item_job_obj) => {
                            if (allChampions_item_job_obj.name === job_obj.name) {
                              return (
                                <>
                                  <Champion
                                    pk={allChampions_item.id}
                                    name={allChampions_item.name}
                                    cost={allChampions_item.cost}
                                    photos={allChampions_item.photos[0].file}
                                    origin={allChampions_item.origin}
                                    job={allChampions_item.job}
                                    attack_range={allChampions_item.attack_range}
                                    skill={allChampions_item.skill}
                                  />
                                </>
                              );
                            }
                          })
                        )}
                      </HStack>
                      <Text as={'b'}>{job_obj.description}</Text>
                    </VStack>
                  </HStack>
                ))} */}
              </VStack>
            </VStack>
          </Container>
        </VStack>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
}
