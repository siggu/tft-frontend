import {useQuery} from '@tanstack/react-query';
import {getChampion, getChampions, getSynergies} from '../api';
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

  // 시너지 가져오기
  const {data: synergiesData, isLoading: isSynergiesLoading} = useQuery({
    queryKey: ['synergy'],
    queryFn: getSynergies,
  });

  const [mediaSize] = useMediaQuery('(min-width: 1200px)');
  allChampionsData?.sort((a, b) => a.cost - b.cost);

  // 시너지 데이터로부터 이름 가져오는 함수
  const getTraitName = (key: string): string => {
    const synergy = synergiesData.find((syn: {key: string}) => syn.key === key);
    return synergy ? synergy.name : '';
  };

  // 계열과 직업 리스트 초기화
  const traitsList: string[] = [];
  const jobsList: string[] = [];

  // 챔피언 데이터가 있고, 시너지 데이터가 있는 경우에만 처리
  if (championData && synergiesData) {
    for (let i = 1; i <= 4; i++) {
      const traitKey = `traits${i}` as keyof IChampion;
      if (championData[traitKey]) {
        const traitKeys = championData[traitKey]?.split(',');
        // 각 계열 또는 직업을 적절한 리스트에 추가
        traitKeys?.forEach((trait: string) => {
          const synergy = synergiesData.find((syn: {key: any}) => syn.key === trait);
          if (synergy) {
            if (synergy._type === 'CLASS') {
              jobsList.push(getTraitName(trait));
            } else {
              traitsList.push(getTraitName(trait));
            }
          }
        });
      }
    }
  }

  return (
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
          {allChampionsData?.map(
            (allChampionsData_ele, index) =>
              index > 1 && (
                <Champion
                  key={allChampionsData_ele.key}
                  championKey={allChampionsData_ele.key}
                  name={allChampionsData_ele.name}
                  cost1={allChampionsData_ele.cost1}
                  imageUrl={allChampionsData_ele.imageUrl}
                  attackRange={allChampionsData_ele.attackRange}
                  ingameKey={allChampionsData_ele.ingameKey}
                  splashUrl={allChampionsData_ele.splashUrl}
                  traits1={allChampionsData_ele.traits1}
                  traits2={allChampionsData_ele.traits2}
                  traits3={allChampionsData_ele.traits3}
                  traits4={allChampionsData_ele.traits4}
                  isHiddenGuide={allChampionsData_ele.isHiddenGuide}
                  isHiddenLanding={allChampionsData_ele.isHiddenLanding}
                  isHiddenTeamBuiler={allChampionsData_ele.isHiddenTeamBuiler}
                  cost2={allChampionsData_ele.cost2}
                  cost3={allChampionsData_ele.cost3}
                  health1={allChampionsData_ele.health1}
                  health2={allChampionsData_ele.health2}
                  health3={allChampionsData_ele.health3}
                  attackDamage1={allChampionsData_ele.attackDamage1}
                  attackDamage2={allChampionsData_ele.attackDamage2}
                  attackDamage3={allChampionsData_ele.attackDamage3}
                  damagePerSecond1={allChampionsData_ele.damagePerSecond1}
                  damagePerSecond2={allChampionsData_ele.damagePerSecond2}
                  damagePerSecond3={allChampionsData_ele.damagePerSecond3}
                  attackSpeed={allChampionsData_ele.attackSpeed}
                  armor={allChampionsData_ele.armor}
                  magicalResistance={0}
                  recommendItems1={allChampionsData_ele.recommendItems1}
                  recommendItems2={allChampionsData_ele.recommendItems2}
                  recommendItems3={allChampionsData_ele.recommendItems3}
                  recommendItems4={allChampionsData_ele.recommendItems4}
                  recommendItems5={allChampionsData_ele.recommendItems5}
                  skill_stats1={allChampionsData_ele.skill_stats1}
                  skill_stats2={allChampionsData_ele.skill_stats2}
                  skill_stats3={allChampionsData_ele.skill_stats3}
                  skill_stats4={allChampionsData_ele.skill_stats4}
                  skill_stats5={allChampionsData_ele.skill_stats5}
                  skill_name={allChampionsData_ele.skill_name}
                  skill_imageUrl={allChampionsData_ele.skill_imageUrl}
                  skill_desc={allChampionsData_ele.skill_desc}
                  skill_startingMana={allChampionsData_ele.skill_startingMana}
                  skill_skillMana={allChampionsData_ele.skill_skillMana}
                />
              )
          )}
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
              bgImage={championData?.splashUrl}
              bgPos={mediaSize ? 'left' : 'center'}
              color="white"
            >
              <HStack p={5}>
                <Text p={5} fontSize={'2xl'} as={'b'}>
                  {championData?.name}
                </Text>
              </HStack>
              <VStack p={5} alignItems={'flex-start'} bgColor={'#2b2e37'}>
                <HStack>
                  <Text mr={5}>비용</Text>
                  <FaCoins color="#ffb42c" />
                  <Text>{championData?.cost1}</Text>
                </HStack>
                {/* 계열 출력 */}
                {traitsList.length > 0 && (
                  <HStack>
                    <Text mr={5}>계열</Text>
                    {traitsList.map((trait, index) => (
                      <Text key={index}>
                        {trait}
                        {index !== traitsList.length - 1 ? ',' : ''}
                      </Text>
                    ))}
                  </HStack>
                )}
                {/* 직업 출력 */}
                {jobsList.length > 0 && (
                  <HStack>
                    <Text mr={5}>직업</Text>
                    {jobsList.map((job, index) => (
                      <Text key={index}>
                        {job}
                        {index !== jobsList.length - 1 ? ',' : ''}
                      </Text>
                    ))}
                  </HStack>
                )}
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
                <Text as={'b'}>{championData?.health1}</Text>
              </VStack>
              <VStack>
                <Text>공격력</Text>
                <Text as={'b'}>{championData?.attackDamage1}</Text>
              </VStack>
              <VStack>
                <Text>DPS</Text>
                <Text as={'b'}>{championData?.damagePerSecond1}</Text>
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
              {/* <Image src={championData?.skill.photos[0].file} /> */}

              {/* <VStack alignItems={'flex-start'}>
                <Text as={'b'} fontSize="lg">
                  {championData?.skill.name}
                </Text>
                <HStack>
                  <Text>{championData?.skill.skill_type}</Text>
                  <Text>|</Text>
                  <FaFlask color="#217ac7" />
                  <Text>
                    {championData?.skill.start_mana}/{championData?.skill.max_mana}
                  </Text>
                </HStack>
                <Text>{championData?.skill.description}</Text>
                <Text color="#ca9372">{championData?.skill.effect}</Text>
              </VStack> */}
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

            {/* 직업 */}
          </VStack>
        </VStack>
        ) : (<Text>Loading...</Text>)
      </Container>
    </VStack>
  );
}
