import {Box, Container, HStack, Text, VStack, Image, Tooltip, Button} from '@chakra-ui/react';
import {useQuery} from '@tanstack/react-query';
import {getComps, getSynergyJobs, getSynergyOrigins} from '../api';
import IComp from '../components/types';
import ISynergy from '../components/types';
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Champion from '../components/Champion';

const b = 'bronze';
const s = 'silver';
const g = 'gold';
const p = 'prism';

const tierColors: Record<string, string> = {
  [b]: '#dca555', // bronze
  [s]: 'gray.500', // silver
  [g]: '#ffd700', // gold
  [p]: '#9932CC', // prism
};

export default function Home() {
  // synergy origins api - get
  const {data: compData, isLoading: compIsLoading} = useQuery<IComp[]>({
    queryKey: ['comps'],
    queryFn: getComps,
  });
  // synergy origins api - get
  const {data: originData, isLoading: originIsLoading} = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergyOrigins,
  });
  // synergy jobs api - get
  const {data: jobData, isLoading: jobIsLoading} = useQuery<ISynergy[]>({
    queryKey: ['jobs'],
    queryFn: getSynergyJobs,
  });

  const synergiesArr: {
    synergyName: string;
    frequency: number;
    description: string;
    effect_1: string;
    effect_2: string;
    effect_3: string;
    effect_4: string;
    effect_5: string;
    effect_6: string;
    photo: string;
    stack: string;
    tier: string;
  }[][] = [];

  compData?.forEach((comp) => {
    const compArray: {
      synergyName: string;
      frequency: number;
      description: string;
      effect_1: string;
      effect_2: string;
      effect_3: string;
      effect_4: string;
      effect_5: string;
      effect_6: string;
      photo: string;
      stack: string;
      tier: string;
    }[] = [];
    const counts: {[key: string]: number} = {};

    comp.champions.forEach((championByComp) => {
      championByComp.origin.forEach((originByChampion: {name: string}) => {
        if (counts[originByChampion.name]) {
          counts[originByChampion.name]++;
        } else {
          counts[originByChampion.name] = 1;
        }
      });
      championByComp.job.forEach((jobByChampion: {name: string}) => {
        if (counts[jobByChampion.name]) {
          counts[jobByChampion.name]++;
        } else {
          counts[jobByChampion.name] = 1;
        }
      });
    });

    const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    sortedEntries.forEach(([name, count]) => {
      let entry = {
        synergyName: name,
        frequency: count,
        description: '',
        effect_1: '',
        effect_2: '',
        effect_3: '',
        effect_4: '',
        effect_5: '',
        effect_6: '',
        photo: '',
        stack: '',
        tier: '',
      };

      originData?.forEach((origin_ele) => {
        if (origin_ele.name === name) {
          entry = {
            synergyName: name,
            frequency: count,
            description: origin_ele.description,
            effect_1: origin_ele.effect_1,
            effect_2: origin_ele.effect_2,
            effect_3: origin_ele.effect_3,
            effect_4: origin_ele.effect_4,
            effect_5: origin_ele.effect_5,
            effect_6: origin_ele.effect_6,
            photo: origin_ele.photos[1]?.file,
            stack: origin_ele.stack.stack,
            tier: origin_ele.tier.name,
          };
        }
      });
      jobData?.forEach((job_ele) => {
        if (job_ele.name === name) {
          entry = {
            synergyName: name,
            frequency: count,
            description: job_ele.description,
            effect_1: job_ele.effect_1,
            effect_2: job_ele.effect_2,
            effect_3: job_ele.effect_3,
            effect_4: job_ele.effect_4,
            effect_5: job_ele.effect_5,
            effect_6: job_ele.effect_6,
            photo: job_ele.photos[1]?.file,
            stack: job_ele.stack.stack,
            tier: job_ele.tier.name,
          };
        }
      });
      compArray.push(entry);
    });
    synergiesArr.push(compArray);
  });

  console.log('내가 정리한 시너지', synergiesArr);

  return (
    <VStack gap={20}>
      <Container maxW={'container.xl'}>
        <Box mb={5}>
          <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
            추천 메타
          </Text>
        </Box>
        {compIsLoading ? (
          <Text>Loading...</Text>
        ) : (
          compData?.map((comp, comp_index) => (
            <HStack position={'relative'} bg={'#27282e'} p={5} m={2} key={comp.pk} gap={10}>
              {/* # 1. 추천메타 명 */}
              <Box w={'150px'}>
                <Text color={'white'} fontSize={'15px'}>
                  {comp.name}
                </Text>
              </Box>
              {/* # 2. 시너지와 챔피언 초상화 표시 */}
              <VStack gap={3} alignItems={'flex-start'}>
                {/* # 2.1 시너지 표시 */}
                <HStack>
                  {synergiesArr[comp_index].map((compSynergies_ele) => (
                    <>
                      <Tooltip
                        hasArrow
                        w={'300px'}
                        label={
                          <VStack gap={3} alignItems={'flex-start'} w={'280px'}>
                            <HStack>
                              <Text as={'b'}>{compSynergies_ele.synergyName}</Text>
                            </HStack>
                            <VStack>
                              <Text>{compSynergies_ele.description}</Text>
                            </VStack>
                            {/* 시너지 effect */}
                            <VStack alignItems={'flex-start'}>
                              {compSynergies_ele.effect_1 ? (
                                <Text color={tierColors[b]}>
                                  ({compSynergies_ele.stack[0]}) {compSynergies_ele.effect_1}
                                </Text>
                              ) : null}
                              {compSynergies_ele.effect_2 ? (
                                <Text color={tierColors[s]}>
                                  ({compSynergies_ele.stack[2]}) {compSynergies_ele.effect_2}
                                </Text>
                              ) : null}
                              {compSynergies_ele.effect_3 ? (
                                <Text color={tierColors[g]}>
                                  ({compSynergies_ele.stack[4]}) {compSynergies_ele.effect_3}
                                </Text>
                              ) : null}
                              {compSynergies_ele.effect_4 ? (
                                <Text color={tierColors[p]}>
                                  ({compSynergies_ele.stack[6]}
                                  {compSynergies_ele.stack[7]}) {compSynergies_ele.effect_4}
                                </Text>
                              ) : null}
                              {compSynergies_ele.effect_5 ? (
                                <Text color={tierColors[compSynergies_ele.tier[8]]}>
                                  ({compSynergies_ele.stack[8]}) {compSynergies_ele.effect_5}
                                </Text>
                              ) : null}
                              {compSynergies_ele.effect_6 ? (
                                <Text color={tierColors[compSynergies_ele.tier[10]]}>
                                  ({compSynergies_ele.stack[10]}) {compSynergies_ele.effect_6}
                                </Text>
                              ) : null}
                            </VStack>
                          </VStack>
                        }
                        bg={'black'}
                        rounded={'md'}
                        p={3}
                      >
                        <HStack>
                          <Image
                            p={1}
                            w={'30px'}
                            rounded={'10px'}
                            bgGradient={
                              compSynergies_ele.frequency >= 6
                                ? 'linear(#d1bc69, #f6da75, #a58735)'
                                : compSynergies_ele.frequency >= 4
                                ? 'linear(#9ab3b9, #b3ced2, #8aa1a4)'
                                : compSynergies_ele.frequency >= 2
                                ? 'linear(#c77743, #d97e40, #9b561d)'
                                : 'linear(#646464,#646464)'
                            }
                            position={'relative'}
                            src={compSynergies_ele.photo}
                          />
                          <Box
                            left={-3}
                            h={'20px'}
                            pr={1}
                            pl={1}
                            pb={6}
                            mr={-3}
                            roundedRight={'5px'}
                            position={'relative'}
                            bgGradient={
                              compSynergies_ele.frequency >= 6
                                ? 'linear(#d1bc69, #f6da75, #a58735)'
                                : compSynergies_ele.frequency >= 4
                                ? 'linear(#9ab3b9, #b3ced2, #8aa1a4)'
                                : compSynergies_ele.frequency >= 2
                                ? 'linear(#c77743, #d97e40, #9b561d)'
                                : 'linear(#646464,#646464)'
                            }
                          >
                            <Text display={'flex'} textAlign={'end'} fontSize={'13px'} as={'b'}>
                              {compSynergies_ele.frequency}
                            </Text>
                          </Box>
                        </HStack>
                      </Tooltip>
                    </>
                  ))}
                </HStack>

                {/* 챔피언 이미지 표시 */}
                <HStack>
                  {comp.champions
                    .slice()
                    .sort((a, b) => a.cost - b.cost)
                    .map((champion) => (
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
                    ))}
                </HStack>
              </VStack>
              <Box position={'absolute'} right={5} p={3} border={'1px solid white'}>
                <Link to={'/comps/1'}>
                  <Text _hover={{textDecoration: 'underline'}} color={'white'} fontSize={'13px'}>
                    공략 더 보기
                  </Text>
                </Link>
              </Box>
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
