import {Box, Text, VStack, Image, HStack, Tooltip} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import ISynergy from './types.d';
import ISkill from './types.d';
import {FaCoins} from 'react-icons/fa';

interface IMiniChampionPortrait {
  key: string;
  ingameKey: string;
  name: string;
  imageUrl: string;
  splashUrl: string;
  traits1: string;
  traits2: string;
  traits3: string;
  traits4: string;
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
  attackSpeed: number;
  armor: number;
  magicalResistance: number;
  recommendItems1: string;
  recommendItems2: string;
  recommendItems3: string;
  recommendItems4: string;
  recommendItems5: string;
  skill_name: string;
  skill_imageUrl: string;
  skill_desc: string;
  skill_startingMana: number;
  skill_skillMana: number;
  skill_stats1: string;
  skill_stats2: string;
  skill_stats3: string;
  skill_stats4: string;
  skill_stats5: string;
}

export default function Champion({
  key,
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
}: IMiniChampionPortrait) {
  const championRootLink = 'http://localhost:3000/champions/';
  return (
    <VStack>
      <Tooltip
        hasArrow
        label={
          <VStack as={'b'} gap={3} alignItems={'flex-start'} w={'300px'}>
            <HStack>
              <Text>{name}</Text>
              <HStack>
                <Box color={'yellow.400'}>
                  <FaCoins />
                </Box>
                <Text>{cost1}</Text>
              </HStack>
            </HStack>
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
            <VStack>
              <Text color={'gray'}>{skill_desc}</Text>
            </VStack>
            <VStack>
              <Text>{skill_stats1}</Text>
            </VStack>
          </VStack>
        }
        bg={'black'}
        rounded={'md'}
        p={3}
      >
        <Link to={`${championRootLink}${key}`}>
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
