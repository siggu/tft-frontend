import { Box, Container, HStack, Text, VStack, Image } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getSet11Comps, getSet11Synergies, getSet11Items, getSet11MetaDecks, getSet11Champions } from '../../set11api';
import IComp from '../../components/types';
import ISynergy from '../../components/types';
import IItems from '../../components/types';
import ICompElement from '../../components/types';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileChampion from '../../components/set11/Set11ProfileChampion';
import Item from '../../components/set11/Set11Item';
import IChampion from '../../components/types';
import Profile from './Set11Profile';

interface IProfileMiniBox {
  puuid: string | undefined;
  gameName: string | undefined;
  tagLine: string | undefined;
  accountId: string | undefined;
  profileIconId: number | undefined;
  summonerId: string | undefined;
  summonerLevel: number | undefined;
}

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
interface IChampionDeck {
  0: string | any;
  1: string[];
}
interface IMetaDeck {
  id: number;
  name: string;
  decks: IChampionDeck[];
}

export default function Set11MetaHome() {
  // 모든 챔피언 가져오기
  const { data: allChampionsData, isLoading: isAllChampionDataLoading } = useQuery<IChampion[]>({
    queryKey: ['champions'],
    queryFn: getSet11Champions,
  });
  // synergy origins api - get
  const { data: compData, isLoading: compIsLoading } = useQuery<IComp[]>({
    queryKey: ['comps'],
    queryFn: getSet11Comps,
  });

  // 시너지 get
  const { data: synergiesData, isLoading: isSynergiesLoading } = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSet11Synergies,
  });

  const { data: metaDecksData, isLoading: isMetaDecksLoading } = useQuery<IMetaDeck[]>({
    queryKey: ['metaDecks'],
    queryFn: getSet11MetaDecks,
  });
  // 아이템 가져오기
  const { data: allItemsData, isLoading: isItemsLoading } = useQuery<IItems[]>({
    queryKey: ['item'],
    queryFn: getSet11Items,
  });

  const findChampionByIngameKey = (ingameKey: string) => {
    return allChampionsData?.find((champion) => champion.ingameKey === ingameKey);
  };
  const findItemByIngameKey = (ingameKey: string) => {
    return allItemsData?.find((item) => item.ingameKey === ingameKey);
  };
  compData?.forEach((comp) => {
    const counts: { [key: string]: number } = {};

    comp.elements?.forEach((elementByComp) => {
      elementByComp.champion.origin?.forEach((originByChampion: { name: string }) => {
        if (counts[originByChampion.name]) {
          counts[originByChampion.name]++;
        } else {
          counts[originByChampion.name] = 1;
        }
      });
      elementByComp.champion.job?.forEach((jobByChampion: { name: string }) => {
        if (counts[jobByChampion.name]) {
          counts[jobByChampion.name]++;
        } else {
          counts[jobByChampion.name] = 1;
        }
      });
    });

    const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  });

  const processedComps = compData?.map((comp) => {
    const counts: { [key: string]: number } = {};

    comp.elements?.forEach((elementByComp) => {
      const traits = [
        elementByComp.champion.traits1,
        elementByComp.champion.traits2,
        elementByComp.champion.traits3,
        elementByComp.champion.traits4,
      ].filter((trait) => trait); // Filter out null values

      traits.forEach((trait) => {
        if (counts[trait]) {
          counts[trait]++;
        } else {
          counts[trait] = 1;
        }
      });
    });

    const sortedTraits = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    return {
      ...comp,
      sortedTraits,
    };
  });
  processedComps?.map((comp) => {
    console.log('comp', comp.name);
  });
  return (
    <VStack gap={20}>
      <Container maxW={'container.xl'} minH={'500px'}>
        <Box mb={5}>
          <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
            추천 메타
          </Text>
        </Box>
        {metaDecksData?.map((deck_ele, deck_idx) => (
          <HStack key={deck_idx} position={'relative'} bg={'#27282e'} p={5} pb={9} m={2} gap={10}>
            {/* # 1. 추천메타 명 */}
            <Box w={'150px'}>
              <Text color={'white'} fontSize={'15px'}>
                {deck_ele.name}
              </Text>
            </Box>
            <VStack gap={3} alignItems={'flex-start'}>
              {/* 챔피언 이미지 표시 */}
              <HStack>
                {deck_ele.decks.map((unit_ele, unit_idx) => {
                  const champion = findChampionByIngameKey(unit_ele[0]);
                  let items = unit_ele[1].map((each_item_ele) => findItemByIngameKey(each_item_ele));

                  return (
                    <>
                      <VStack>
                        {champion ? (
                          <Box key={unit_idx} zIndex={0}>
                            <ProfileChampion
                              championKey={champion.key}
                              name={champion.name}
                              cost1={champion.cost1}
                              imageUrl={champion.imageUrl}
                              attackRange={champion.attackRange}
                              ingameKey={champion.ingameKey}
                              splashUrl={champion.splashUrl}
                              traits1={champion.traits1}
                              traits2={champion.traits2}
                              traits3={champion.traits3}
                              traits4={champion.traits4}
                              isHiddenGuide={false}
                              isHiddenLanding={false}
                              isHiddenTeamBuiler={false}
                              cost2={champion.cost2}
                              cost3={champion.cost3}
                              health1={champion.health1}
                              health2={champion.health2}
                              health3={champion.health3}
                              attackDamage1={champion.attackDamage1}
                              attackDamage2={champion.attackDamage2}
                              attackDamage3={champion.attackDamage3}
                              damagePerSecond1={champion.damagePerSecond1}
                              damagePerSecond2={champion.damagePerSecond2}
                              damagePerSecond3={champion.damagePerSecond3}
                              attackSpeed={champion.attackSpeed}
                              armor={champion.armor}
                              magicalResistance={champion.magicalResistance}
                              recommendItems1={champion.recommendItems1}
                              recommendItems2={champion.recommendItems2}
                              recommendItems3={champion.recommendItems3}
                              recommendItems4={champion.recommendItems4}
                              recommendItems5={champion.recommendItems5}
                              skill_stats1={champion.skill_stats1}
                              skill_stats2={champion.skill_stats2}
                              skill_stats3={champion.skill_stats3}
                              skill_stats4={champion.skill_stats4}
                              skill_stats5={champion.skill_stats5}
                              skill_name={champion.skill_name}
                              skill_imageUrl={champion.skill_imageUrl}
                              skill_desc={champion.skill_desc}
                              skill_startingMana={champion.skill_startingMana}
                              skill_skillMana={champion.skill_skillMana}
                            />
                          </Box>
                        ) : null}
                        <HStack mt={-1} zIndex={1} gap={0.5}>
                          {items.length > 0 ? (
                            <>
                              {items.map((item_ele) => (
                                <HStack key={unit_idx}>
                                  {item_ele ? (
                                    <Box w="17px" h="17px">
                                      <Item
                                        imageUrl={item_ele.imageUrl}
                                        key={item_ele.key}
                                        ingameKey={item_ele.ingameKey}
                                        name={item_ele.name}
                                        description={item_ele.description}
                                        shortDesc={item_ele.shortDesc}
                                        composition1={item_ele.composition1}
                                        composition2={item_ele.composition2}
                                        isFromItem={item_ele.isFromItem}
                                        isNormal={item_ele.isNormal}
                                        isEmblem={item_ele.isEmblem}
                                        isSupport={item_ele.isSupport}
                                        isArtifact={item_ele.isArtifact}
                                        isRadiant={item_ele.isRadiant}
                                        isUnique={item_ele.isUnique}
                                        isNew={item_ele.isNew}
                                        tag1={item_ele.tag1}
                                        tag2={item_ele.tag2}
                                        tag3={item_ele.tag3}
                                      />
                                    </Box>
                                  ) : null}
                                </HStack>
                              ))}
                            </>
                          ) : (
                            <Box w={'17px'} h={'17px'}></Box>
                          )}
                        </HStack>
                      </VStack>
                    </>
                  );
                })}
              </HStack>
            </VStack>
          </HStack>
        ))}
      </Container>
    </VStack>
  );
}
