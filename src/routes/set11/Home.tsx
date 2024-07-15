import { Box, Container, HStack, Text, VStack, Image } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getComps, getSynergies, getItems, getMetaDecks } from '../../set11api';
import IComp from '../../components/types';
import ISynergy from '../../components/types';
import IItems from '../../components/types';
import ICompElement from '../../components/types';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileChampion from '../../components/set11/ProfileChampion';
import Item from '../../components/set11/Item';
import Profile from './Profile';

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

export default function Home() {
  // synergy origins api - get
  const { data: compData, isLoading: compIsLoading } = useQuery<IComp[]>({
    queryKey: ['comps'],
    queryFn: getComps,
  });

  // 시너지 get
  const { data: synergiesData, isLoading: isSynergiesLoading } = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergies,
  });
  interface IChampionDeck {
    champion: string;
    items: string[];
  }
  interface IMetaDeck {
    id: number;
    name: string;
    decks: IChampionDeck[];
  }

  const { data: metaDecksData, isLoading: isMetaDecksLoading } = useQuery<IMetaDeck[]>({
    queryKey: ['metaDecks'],
    queryFn: getMetaDecks,
  });
  console.log('metaDecksData', metaDecksData);
  // 아이템 가져오기
  const { data: itemsDate } = useQuery<IItems>({
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

  normalItemArr?.forEach((normalItemArrEle) => {
    basicItemArr?.forEach((basicItemArrEle) => {
      if (basicItemArrEle.key === normalItemArrEle.composition1) {
        normalItemArrEle.composition1 = basicItemArrEle.imageUrl;
      }
      if (basicItemArrEle.key === normalItemArrEle.composition2) {
        normalItemArrEle.composition2 = basicItemArrEle.imageUrl;
      }
    });
  });

  emblemItemArr?.forEach((emblemItemArrEle) => {
    basicItemArr?.forEach((basicItemArrEle) => {
      if (basicItemArrEle.key === emblemItemArrEle.composition1) {
        emblemItemArrEle.composition1 = basicItemArrEle.imageUrl;
      }
      if (basicItemArrEle.key === emblemItemArrEle.composition2) {
        emblemItemArrEle.composition2 = basicItemArrEle.imageUrl;
      }
    });
  });

  compData?.forEach((comp) => {
    const counts: { [key: string]: number } = {};

    comp.elements?.forEach((elementByComp) => {
      if (elementByComp.recommendedItem1 && elementByComp.recommendedItem1.tags === 'normal') {
        basicItemArr?.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem1.composition1) {
            elementByComp.recommendedItem1.composition1 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem2 && elementByComp.recommendedItem2.tags === 'normal') {
        basicItemArr?.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem2.composition1) {
            elementByComp.recommendedItem2.composition1 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem3 && elementByComp.recommendedItem3.tags === 'normal') {
        basicItemArr?.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem3.composition1) {
            elementByComp.recommendedItem3.composition1 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem1 && elementByComp.recommendedItem1.tags === 'normal') {
        basicItemArr?.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem1.composition2) {
            elementByComp.recommendedItem1.composition2 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem2 && elementByComp.recommendedItem2.tags === 'normal') {
        basicItemArr?.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem2.composition2) {
            elementByComp.recommendedItem2.composition2 = basicItem.imageUrl;
          }
        });
      }
      if (elementByComp.recommendedItem3 && elementByComp.recommendedItem3.tags === 'normal') {
        basicItemArr?.forEach((basicItem) => {
          if (basicItem.key === elementByComp.recommendedItem3.composition2) {
            elementByComp.recommendedItem3.composition2 = basicItem.imageUrl;
          }
        });
      }
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

  return (
    <VStack gap={20}>
      <Container maxW={'container.xl'} minH={'500px'}>
        <Box mb={5}>
          <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
            추천 메타
          </Text>
        </Box>
        {processedComps?.map((comp, comp_index) => (
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
                {comp.sortedTraits.map(([trait, count]) => {
                  const synergy = synergiesData?.find((synergy) => synergy.key === trait);
                  return synergy && count > 0 ? (
                    <HStack gap={0} key={synergy.key} textAlign="center">
                      <Image w={'30px'} src={synergy.whiteImageUrl} alt={synergy.name} />
                      <Text color={'white'}>{count}</Text>
                    </HStack>
                  ) : null;
                })}
              </HStack>

              {/* 챔피언 이미지 표시 */}
              <HStack>
                {comp.elements?.map((compEle) => (
                  <>
                    <VStack>
                      <Box key={compEle.champion.key} zIndex={0}>
                        <ProfileChampion
                          championKey={compEle.champion.key}
                          name={compEle.champion.name}
                          cost1={compEle.champion.cost1}
                          imageUrl={compEle.champion.imageUrl}
                          attackRange={compEle.champion.attack_range}
                          ingameKey={compEle.champion.ingameKey}
                          splashUrl={compEle.champion.splashUrl}
                          traits1={compEle.champion.traits1}
                          traits2={compEle.champion.traits2}
                          traits3={compEle.champion.traits3}
                          traits4={compEle.champion.traits4}
                          isHiddenGuide={false}
                          isHiddenLanding={false}
                          isHiddenTeamBuiler={false}
                          cost2={compEle.champion.cost2}
                          cost3={compEle.champion.cost3}
                          health1={compEle.champion.health1}
                          health2={compEle.champion.health2}
                          health3={compEle.champion.health3}
                          attackDamage1={compEle.champion.attackDamage1}
                          attackDamage2={compEle.champion.attackDamage2}
                          attackDamage3={compEle.champion.attackDamage3}
                          damagePerSecond1={compEle.champion.damagePerSecond1}
                          damagePerSecond2={compEle.champion.damagePerSecond2}
                          damagePerSecond3={compEle.champion.damagePerSecond3}
                          attackSpeed={compEle.champion.attackSpeed}
                          armor={compEle.champion.armor}
                          magicalResistance={compEle.champion.magicalResistance}
                          recommendItems1={compEle.champion.recommendItems1}
                          recommendItems2={compEle.champion.recommendItems2}
                          recommendItems3={compEle.champion.recommendItems3}
                          recommendItems4={compEle.champion.recommendItems4}
                          recommendItems5={compEle.champion.recommendItems5}
                          skill_stats1={compEle.champion.skill_stats1}
                          skill_stats2={compEle.champion.skill_stats2}
                          skill_stats3={compEle.champion.skill_stats3}
                          skill_stats4={compEle.champion.skill_stats4}
                          skill_stats5={compEle.champion.skill_stats5}
                          skill_name={compEle.champion.skill_name}
                          skill_imageUrl={compEle.champion.skill_imageUrl}
                          skill_desc={compEle.champion.skill_desc}
                          skill_startingMana={compEle.champion.skill_startingMana}
                          skill_skillMana={compEle.champion.skill_skillMana}
                        />
                      </Box>
                      {/* 추천 아이템 */}
                      <HStack mt={-1} zIndex={1} gap={0.5}>
                        {compEle.recommendedItem2 ? (
                          <Box gap="3px">
                            <Box w="17px" h="17px">
                              <Item
                                imageUrl={compEle.recommendedItem2.imageUrl}
                                key={compEle.recommendedItem2.key}
                                ingameKey={compEle.recommendedItem2.ingameKey}
                                name={compEle.recommendedItem2.name}
                                description={compEle.recommendedItem2.description}
                                shortDesc={compEle.recommendedItem2.shortDesc}
                                composition1={compEle.recommendedItem2.composition1}
                                composition2={compEle.recommendedItem2.composition2}
                                isFromItem={compEle.recommendedItem2.isFromItem}
                                isNormal={compEle.recommendedItem2.isNormal}
                                isEmblem={compEle.recommendedItem2.isEmblem}
                                isSupport={compEle.recommendedItem2.isSupport}
                                isArtifact={compEle.recommendedItem2.isArtifact}
                                isRadiant={compEle.recommendedItem2.isRadiant}
                                isUnique={compEle.recommendedItem2.isUnique}
                                isNew={compEle.recommendedItem2.isNew}
                                tag1={compEle.recommendedItem2.tag1}
                                tag2={compEle.recommendedItem2.tag2}
                                tag3={compEle.recommendedItem2.tag3}
                              />
                            </Box>
                          </Box>
                        ) : null}
                        {compEle.recommendedItem1 ? (
                          <Box gap="3px">
                            <Box w="17px" h="17px">
                              <Item
                                imageUrl={compEle.recommendedItem1.imageUrl}
                                key={compEle.recommendedItem1.key}
                                ingameKey={compEle.recommendedItem1.ingameKey}
                                name={compEle.recommendedItem1.name}
                                description={compEle.recommendedItem1.description}
                                shortDesc={compEle.recommendedItem1.shortDesc}
                                composition1={compEle.recommendedItem1.composition1}
                                composition2={compEle.recommendedItem1.composition2}
                                isFromItem={compEle.recommendedItem1.isFromItem}
                                isNormal={compEle.recommendedItem1.isNormal}
                                isEmblem={compEle.recommendedItem1.isEmblem}
                                isSupport={compEle.recommendedItem1.isSupport}
                                isArtifact={compEle.recommendedItem1.isArtifact}
                                isRadiant={compEle.recommendedItem1.isRadiant}
                                isUnique={compEle.recommendedItem1.isUnique}
                                isNew={compEle.recommendedItem1.isNew}
                                tag1={compEle.recommendedItem1.tag1}
                                tag2={compEle.recommendedItem1.tag2}
                                tag3={compEle.recommendedItem1.tag3}
                              />
                            </Box>
                          </Box>
                        ) : null}
                        {compEle.recommendedItem3 ? (
                          <Box gap="3px">
                            <Box w="17px" h="17px">
                              <Item
                                imageUrl={compEle.recommendedItem3.imageUrl}
                                key={compEle.recommendedItem3.key}
                                ingameKey={compEle.recommendedItem3.ingameKey}
                                name={compEle.recommendedItem3.name}
                                description={compEle.recommendedItem3.description}
                                shortDesc={compEle.recommendedItem3.shortDesc}
                                composition1={compEle.recommendedItem3.composition1}
                                composition2={compEle.recommendedItem3.composition2}
                                isFromItem={compEle.recommendedItem3.isFromItem}
                                isNormal={compEle.recommendedItem3.isNormal}
                                isEmblem={compEle.recommendedItem3.isEmblem}
                                isSupport={compEle.recommendedItem3.isSupport}
                                isArtifact={compEle.recommendedItem3.isArtifact}
                                isRadiant={compEle.recommendedItem3.isRadiant}
                                isUnique={compEle.recommendedItem3.isUnique}
                                isNew={compEle.recommendedItem3.isNew}
                                tag1={compEle.recommendedItem3.tag1}
                                tag2={compEle.recommendedItem3.tag2}
                                tag3={compEle.recommendedItem3.tag3}
                              />
                            </Box>
                          </Box>
                        ) : null}
                        {compEle.recommendedItem1 == null &&
                        compEle.recommendedItem2 == null &&
                        compEle.recommendItems3 == null ? (
                          <Box w={'17px'} h={'17px'}></Box>
                        ) : null}
                      </HStack>
                    </VStack>
                  </>
                ))}
              </HStack>
            </VStack>
            <Box position={'absolute'} right={5} p={3} border={'1px solid white'}>
              <Link to={'/comps/1'}>
                <Text _hover={{ textDecoration: 'underline' }} color={'white'} fontSize={'13px'}>
                  공략 더 보기
                </Text>
              </Link>
            </Box>
          </HStack>
        ))}
      </Container>
    </VStack>
  );
}
