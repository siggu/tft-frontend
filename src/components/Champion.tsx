import {Box, Text, VStack, Image, HStack, Tooltip} from '@chakra-ui/react';
import {Link, useParams} from 'react-router-dom';
import {FaCoins} from 'react-icons/fa';
import {useQuery} from '@tanstack/react-query';
import {getChampion, getChampions, getSynergies} from '../api';
import IChampion from '../components/types';

interface IChampionData {
  championKey: string;
  ingameKey: string | null;
  name: string;
  imageUrl: string;
  splashUrl: string;
  traits1: string | null;
  traits2: string | null;
  traits3: string | null;
  traits4: string | null;
  isHiddenGuide: boolean;
  isHiddenLanding: boolean;
  isHiddenTeamBuiler: boolean;
  cost1: number;
  cost2: number;
  cost3: number;
  health1: number;
  health2: number;
  health3: number;
  attackDamage1: number;
  attackDamage2: number;
  attackDamage3: number;
  damagePerSecond1: number;
  damagePerSecond2: number;
  damagePerSecond3: number;
  attackRange: number;
  attackSpeed: string | number;
  armor: number;
  magicalResistance: number;
  recommendItems1: string | null;
  recommendItems2: string | null;
  recommendItems3: string | null;
  recommendItems4: string | null;
  recommendItems5: string | null;
  skill_name: string;
  skill_imageUrl: string;
  skill_desc: string;
  skill_startingMana: number;
  skill_skillMana: number;
  skill_stats1: string | null;
  skill_stats2: string | null;
  skill_stats3: string | null;
  skill_stats4: string | null;
  skill_stats5: string | null;
}

export default function Champion({
  championKey,
  ingameKey,
  name,
  imageUrl,
  splashUrl,
  traits1,
  traits2,
  traits3,
  traits4,
  isHiddenGuide,
  isHiddenLanding,
  isHiddenTeamBuiler,
  cost1,
  cost2,
  cost3,
  health1,
  health2,
  health3,
  attackDamage1,
  attackDamage2,
  attackDamage3,
  damagePerSecond1,
  damagePerSecond2,
  damagePerSecond3,
  attackRange,
  attackSpeed,
  armor,
  magicalResistance,
  recommendItems1,
  recommendItems2,
  recommendItems3,
  recommendItems4,
  recommendItems5,
  skill_name,
  skill_imageUrl,
  skill_desc,
  skill_startingMana,
  skill_skillMana,
  skill_stats1,
  skill_stats2,
  skill_stats3,
  skill_stats4,
  skill_stats5,
}: IChampionData) {
  // 시너지 가져오기
  const {data: synergiesData} = useQuery({
    queryKey: ['synergy'],
    queryFn: getSynergies,
  });

  // 시너지 데이터로부터 계열 또는 직업의 이름과 이미지 URL을 가져오는 함수
  const getTraitNamesAndImages = (
    traits: (string | null)[]
  ): {classList: {name: string; whiteImageUrl: string}[]; jobsList: {name: string; whiteImageUrl: string}[]} => {
    const classList: {name: string; whiteImageUrl: string}[] = [];
    const jobsList: {name: string; whiteImageUrl: string}[] = [];

    if (!synergiesData || synergiesData.length === 0) {
      return {classList, jobsList};
    }

    traits.forEach((trait) => {
      if (trait) {
        const synergy = synergiesData.find((syn: {key: any}) => syn.key === trait);
        if (synergy) {
          if (synergy._type === 'CLASS') {
            classList.push({name: synergy.name, whiteImageUrl: synergy.whiteImageUrl || ''});
          } else {
            jobsList.push({name: synergy.name, whiteImageUrl: synergy.whiteImageUrl || ''});
          }
        }
      }
    });

    return {classList, jobsList};
  };

  // 시너지 데이터로부터 계열 또는 직업의 이름과 이미지 URL을 가져옴
  const {classList, jobsList} = getTraitNamesAndImages([traits1, traits2, traits3, traits4]);

  return (
    <VStack>
      <Tooltip
        hasArrow
        label={
          <VStack key={championKey} as={'b'} gap={5} alignItems={'flex-start'} w={'300px'}>
            <HStack>
              <Text>{name}</Text>
              <HStack>
                <Box color={'yellow.400'}>
                  <FaCoins />
                </Box>
                <Text>{cost1}</Text>
              </HStack>
            </HStack>
            <VStack alignItems={'left'}>
              {/* 계열 */}
              {classList.length > 0 && (
                <HStack>
                  <Text mr={1}>계열</Text>
                  {classList.map((trait, index) => (
                    <HStack key={index}>
                      <Image src={trait.whiteImageUrl} alt={trait.name} boxSize="20px" />
                      <Text ml={1}>{trait.name}</Text>
                      {index !== classList.length - 1 ? ',' : ''}
                    </HStack>
                  ))}
                </HStack>
              )}
              {/* 직업 */}
              {jobsList.length > 0 && (
                <HStack>
                  <Text mr={1}>직업</Text>
                  {jobsList.map((trait, index) => (
                    <HStack key={index}>
                      <Image src={trait.whiteImageUrl} alt={trait.name} boxSize="20px" />
                      <Text ml={1}>{trait.name}</Text>
                      {index !== jobsList.length - 1 ? ',' : ''}
                    </HStack>
                  ))}
                </HStack>
              )}
            </VStack>
            <HStack alignItems={'flex-start'}>
              <Text>공격 사거리: {attackRange}</Text>
            </HStack>
            <HStack>
              <Image w={'40px'} src={skill_imageUrl} />
              <VStack gap={0} alignItems={'flex-start'}>
                <Text color={'orange'}>{skill_name}</Text>
                <Text>
                  마나: {skill_startingMana}/{skill_skillMana}
                </Text>
              </VStack>
            </HStack>
            <VStack spacing={0}>
              <Text color={'gray'} dangerouslySetInnerHTML={{__html: skill_desc.replace(/<br>/g, '<br />')}} />
            </VStack>
            <VStack alignItems={'left'} spacing={0}>
              <>
                {skill_stats1 ? <Text>{skill_stats1}</Text> : null}
                {skill_stats2 ? <Text>{skill_stats2}</Text> : null}
                {skill_stats3 ? <Text>{skill_stats3}</Text> : null}
                {skill_stats4 ? <Text>{skill_stats4}</Text> : null}
              </>
            </VStack>
            <VStack>
              <Text>추천 아이템</Text>
            </VStack>
          </VStack>
        }
        bg={'black'}
        rounded={'md'}
        p={3}
      >
        <Link to={`/champions/${championKey}`}>
          <Box
            w={'60px'}
            h={'60px'}
            border={
              cost1 === 1
                ? '3px solid gray'
                : cost1 === 2
                ? '3px solid green'
                : cost1 === 3
                ? '3px solid blue'
                : cost1 === 4
                ? '3px solid purple'
                : cost1 === 5
                ? '3px solid gold'
                : '3px solid black'
            }
            borderRadius={'2xl'}
            position={'relative'}
          >
            <Image w={'full'} h={'full'} rounded={'13px'} src={imageUrl} />

            <Box
              position={'absolute'} // 부모 요소를 기준으로 절대적으로 위치
              top={0} // 부모 요소의 위쪽에 배치
              right={0} // 부모 요소의 오른쪽에 배치
              bg={
                cost1 === 1
                  ? 'gray'
                  : cost1 === 2
                  ? 'green'
                  : cost1 === 3
                  ? 'blue'
                  : cost1 === 4
                  ? 'purple'
                  : cost1 === 5
                  ? 'gold'
                  : undefined
              } // 배경색 지정
              pl={1}
              pr={1}
              roundedTopRight={'10px'} // 라운드 처리
            >
              <Text
                display={'flex'}
                textAlign={'end'}
                as={'b'}
                textShadow="1px 0px 2px black"
                fontSize={'13px'}
                color={'white'}
              >
                ${cost1}
              </Text>
            </Box>
            <HStack justifyContent={'center'}>
              <Text
                as={'b'}
                textShadow="1px 0px 4px black"
                position={'relative'}
                bottom={'20px'}
                fontSize={'13px'}
                color={'white'}
              >
                {name}
              </Text>
            </HStack>
          </Box>
        </Link>
      </Tooltip>
    </VStack>
  );
}
