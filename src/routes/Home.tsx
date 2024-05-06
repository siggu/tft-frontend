import {Box, Container, HStack, Text, VStack, Image, Tooltip, Button} from '@chakra-ui/react';
import {useQuery} from '@tanstack/react-query';
import {getComps, getSynergies, getItems} from '../api';
import IComp from '../components/types';
import ISynergy from '../components/types';
import IItems from '../components/types';
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Champion from '../components/Champion';
import Item from '../components/Item';

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

  // 시너지 get
  const {data: synergiesData, isLoading: isSynergiesLoading} = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergies,
  });

  // 아이템 가져오기
  const {data: itemsDate} = useQuery<IItems>({
    queryKey: ['item'],
    queryFn: getItems,
  });
  const basicItemArr: IItems[] = [];
  const normalItemArr: IItems[] = [];
  const emblemItemArr: IItems[] = [];
  const supportItemArr: IItems[] = [];
  const artifactItemArr: IItems[] = [];
  const radiantItemArr: IItems[] = [];
  const etcItemArr: IItems[] = [];

  // itemsDate?.map((iele: IComp) => {
  //   iele.tags === 'basic'
  //     ? basicItemArr.push(iele)
  //     : iele.tags === 'normal'
  //     ? normalItemArr.push(iele)
  //     : iele.tags === 'emblem'
  //     ? emblemItemArr.push(iele)
  //     : iele.tags === 'support'
  //     ? supportItemArr.push(iele)
  //     : iele.tags === 'artifact'
  //     ? artifactItemArr.push(iele)
  //     : iele.tags === 'radiant'
  //     ? radiantItemArr.push(iele)
  //     : etcItemArr.push(iele);
  // });

  normalItemArr.forEach((normalItemArrEle) => {
    basicItemArr.forEach((basicItemArrEle) => {
      if (basicItemArrEle.key === normalItemArrEle.composition1) {
        normalItemArrEle.composition1 = basicItemArrEle.imageUrl;
      }
      if (basicItemArrEle.key === normalItemArrEle.composition2) {
        normalItemArrEle.composition2 = basicItemArrEle.imageUrl;
      }
    });
  });

  emblemItemArr.forEach((emblemItemArrEle) => {
    basicItemArr.forEach((basicItemArrEle) => {
      if (basicItemArrEle.key === emblemItemArrEle.composition1) {
        emblemItemArrEle.composition1 = basicItemArrEle.imageUrl;
      }
      if (basicItemArrEle.key === emblemItemArrEle.composition2) {
        emblemItemArrEle.composition2 = basicItemArrEle.imageUrl;
      }
    });
  });

  const itemsArrays: IItems[][] = [
    basicItemArr,
    normalItemArr,
    emblemItemArr,
    supportItemArr,
    artifactItemArr,
    radiantItemArr,
    etcItemArr,
  ];

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

    comp.elements.forEach((elementByComp) => {
      if (elementByComp.recommendedItem1 && elementByComp.recommendedItem1.tags === 'normal') {
        basicItemArr.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem1.composition1) {
            elementByComp.recommendedItem1.composition1 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem2 && elementByComp.recommendedItem2.tags === 'normal') {
        basicItemArr.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem2.composition1) {
            elementByComp.recommendedItem2.composition1 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem3 && elementByComp.recommendedItem3.tags === 'normal') {
        basicItemArr.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem3.composition1) {
            elementByComp.recommendedItem3.composition1 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem1 && elementByComp.recommendedItem1.tags === 'normal') {
        basicItemArr.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem1.composition2) {
            elementByComp.recommendedItem1.composition2 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem2 && elementByComp.recommendedItem2.tags === 'normal') {
        basicItemArr.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem2.composition2) {
            elementByComp.recommendedItem2.composition2 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem3 && elementByComp.recommendedItem3.tags === 'normal') {
        basicItemArr.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem3.composition2) {
            elementByComp.recommendedItem3.composition2 = basicItem.imageUrl;
          }
        });
      }
      elementByComp.champion.origin.forEach((originByChampion: {name: string}) => {
        if (counts[originByChampion.name]) {
          counts[originByChampion.name]++;
        } else {
          counts[originByChampion.name] = 1;
        }
      });
      elementByComp.champion.job.forEach((jobByChampion: {name: string}) => {
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
      };

      // originData?.forEach((origin_ele) => {
      //   if (origin_ele.name === name) {
      //     entry = {
      //       synergyName: name,
      //       frequency: count,
      //       description: origin_ele.description,
      //       effect_1: origin_ele.stats_1,
      //       effect_2: origin_ele.stats_2,
      //       effect_3: origin_ele.stats_3,
      //       effect_4: origin_ele.stats_4,
      //       effect_5: origin_ele.stats_5,
      //       effect_6: origin_ele.stats_6,
      //     };
      //   }
      // });
      // jobData?.forEach((job_ele) => {
      //   if (job_ele.name === name) {
      //     entry = {
      //       synergyName: name,
      //       frequency: count,
      //       description: job_ele.description,
      //       effect_1: job_ele.stats_1,
      //       effect_2: job_ele.stats_2,
      //       effect_3: job_ele.stats_3,
      //       effect_4: job_ele.stats_4,
      //       effect_5: job_ele.stats_5,
      //       effect_6: job_ele.stats_6,
      //     };
      //   }
      // });
      // compArray.push(entry);
    });
    synergiesArr.push(compArray);
  });

  return (
    <VStack gap={20}>
      <Container maxW={'container.xl'} minH={'500px'}>
        <Box mb={5}>
          <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
            추천 메타
          </Text>
        </Box>
        {compIsLoading ? (
          <Text>Loading...</Text>
        ) : (
          compData?.map((comp, comp_index) => (
            <HStack position={'relative'} bg={'#27282e'} p={5} pb={9} m={2} key={comp.pk} gap={10}>
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
                  {comp.elements?.map((compEle) => (
                    <Box>
                      <Champion
                        championKey={compEle.key}
                        name={compEle.name}
                        cost1={compEle.cost}
                        imageUrl={compEle.imageUrl}
                        attackRange={compEle.attack_range}
                        // skill_name={allChampionsData_ele.skill_name}
                        // skill_imageUrl={allChampionsData_ele.skill_imageUrl}
                        // skill_desc={allChampionsData_ele.skill_desc}
                        // skill_startingMana={allChampionsData_ele.skill_startingMana}
                        // skill_skillMana={allChampionsData_ele.skill_skillMana}
                        // skill_stats1={allChampionsData_ele.skill_stats1}
                        ingameKey={''}
                        splashUrl={''}
                        traits1={''}
                        traits2={''}
                        traits3={''}
                        traits4={''}
                        isHiddenGuide={false}
                        isHiddenLanding={false}
                        isHiddenTeamBuiler={false}
                        cost2={0}
                        cost3={0}
                        health1={0}
                        health2={0}
                        health3={0}
                        attackDamage1={0}
                        attackDamage2={0}
                        attackDamage3={0}
                        damagePerSecond1={0}
                        damagePerSecond2={0}
                        damagePerSecond3={0}
                        attackSpeed={''}
                        armor={0}
                        magicalResistance={0}
                        recommendItems1={''}
                        recommendItems2={''}
                        recommendItems3={''}
                        recommendItems4={''}
                        recommendItems5={''}
                        skill_stats2={''}
                        skill_stats3={''}
                        skill_stats4={''}
                        skill_stats5={''}
                        skill_name={''}
                        skill_imageUrl={''}
                        skill_desc={''}
                        skill_startingMana={0}
                        skill_skillMana={0}
                        skill_stats1={''}
                      />
                      {compEle.recommendedItem1 ? (
                        <HStack gap="3px" justifyContent="center" position="absolute">
                          <Box w="17px" h="17px">
                            <Item
                              pk={compEle.recommendedItem1.id}
                              name={compEle.recommendedItem1.name}
                              key={compEle.recommendedItem1.key}
                              inGameKey={compEle.recommendedItem1.inGameKey}
                              description={compEle.recommendedItem1.description}
                              effect={compEle.recommendedItem1.effect}
                              generableItem={compEle.recommendedItem1.generableItem}
                              composition1={compEle.recommendedItem1.composition1}
                              composition2={compEle.recommendedItem1.composition2}
                              tags={compEle.recommendedItem1.tags}
                              imageUrl={compEle.recommendedItem1.imageUrl}
                            />
                          </Box>
                          <Box w="17px" h="17px">
                            <Item
                              pk={compEle.recommendedItem2.id}
                              name={compEle.recommendedItem2.name}
                              key={compEle.recommendedItem2.key}
                              inGameKey={compEle.recommendedItem2.inGameKey}
                              description={compEle.recommendedItem2.description}
                              effect={compEle.recommendedItem2.effect}
                              generableItem={compEle.recommendedItem2.generableItem}
                              composition1={compEle.recommendedItem2.composition1}
                              composition2={compEle.recommendedItem2.composition2}
                              tags={compEle.recommendedItem2.tags}
                              imageUrl={compEle.recommendedItem2.imageUrl}
                            />
                          </Box>
                          <Box w="17px" h="17px">
                            <Item
                              pk={compEle.recommendedItem3.id}
                              name={compEle.recommendedItem3.name}
                              key={compEle.recommendedItem3.key}
                              inGameKey={compEle.recommendedItem3.inGameKey}
                              description={compEle.recommendedItem3.description}
                              effect={compEle.recommendedItem3.effect}
                              generableItem={compEle.recommendedItem3.generableItem}
                              composition1={compEle.recommendedItem3.composition1}
                              composition2={compEle.recommendedItem3.composition2}
                              tags={compEle.recommendedItem3.tags}
                              imageUrl={compEle.recommendedItem3.imageUrl}
                            />
                          </Box>
                        </HStack>
                      ) : null}
                    </Box>
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
