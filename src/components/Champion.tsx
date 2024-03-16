import {Box, Text, VStack, Image, HStack, Tooltip} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import IChampionDetail from './types.d';
import ISynergy from './types.d';
import ISkill from './types.d';
import {FaCoins} from 'react-icons/fa';

interface IMiniChampionPortrait {
  pk: number;
  name: string;
  cost: number;
  photos: string;
  origin: ISynergy[];
  job: ISynergy[];
  attack_range: number;
  skill: ISkill;
}

export default function Champion({pk, name, cost, photos, origin, job, attack_range, skill}: IMiniChampionPortrait) {
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
                <Text>{cost}</Text>
              </HStack>
            </HStack>
            <VStack alignItems={'flex-start'}>
              <HStack>
                <Image width={'25px'} src={origin[0].photos[0].file} />
                <Text>{origin[0].name}</Text>
              </HStack>
              <HStack>
                <Image width={'25px'} src={job[0].photos[0].file} />
                <Text>{job[0].name}</Text>
              </HStack>
            </VStack>
            <HStack alignItems={'flex-start'}>
              <Text>공격 사거리: {attack_range}</Text>
            </HStack>
            <HStack>
              <Image w={'40px'} src={skill.photos[0].file} />
              <VStack gap={0} alignItems={'flex-start'}>
                <Text color={'orange'}>{skill.name}</Text>
                <Text>
                  마나: {skill.start_mana}/{skill.max_mana}
                </Text>
              </VStack>
            </HStack>
            <VStack>
              <Text color={'gray'}>{skill.description}</Text>
            </VStack>
            <VStack>
              <Text>{skill.effect}</Text>
            </VStack>
          </VStack>
        }
        bg={'black'}
        rounded={'md'}
        p={3}
      >
        <Link to={`${championRootLink}${pk}`}>
          <Box
            w={'60px'}
            h={'60px'}
            border={
              cost === 1
                ? '3px solid gray'
                : cost === 2
                ? '3px solid green'
                : cost === 3
                ? '3px solid blue'
                : cost === 4
                ? '3px solid purple'
                : cost === 5
                ? '3px solid gold'
                : '3px solid black'
            }
            borderRadius={'2xl'}
            position={'relative'}
          >
            <Image w={'full'} h={'full'} rounded={'12px'} src={photos} />

            <Box
              position={'absolute'} // 부모 요소를 기준으로 절대적으로 위치
              top={0} // 부모 요소의 위쪽에 배치
              right={0} // 부모 요소의 오른쪽에 배치
              bg={
                cost === 1
                  ? 'gray'
                  : cost === 2
                  ? 'green'
                  : cost === 3
                  ? 'blue'
                  : cost === 4
                  ? 'purple'
                  : cost === 5
                  ? 'gold'
                  : undefined
              } // 배경색 지정
              pl={1}
              pr={1}
              roundedTopRight={'10px'} // 라운드 처리
            >
              <Text as={'b'} textShadow="1px 0px 2px black" fontSize={'13px'} color={'white'}>
                ${cost}
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
