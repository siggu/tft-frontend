import { Box, Container, HStack, Text, VStack, Image, Grid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getSet11Comps, getSet11Synergies, getSet11Items, getSet11MetaDecks, getSet11Champions } from '../../set11api';
import IComp from '../../components/types';
import ISynergy from '../../components/types';
import IItems from '../../components/types';
import IChampionDetail from '../../components/types';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileChampion from '../../components/set11/Set11ProfileChampion';
import Item from '../../components/set11/Set11Item';
import Synergy from '../../components/set11/Set11Synergy';
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
interface SynergyProps {
  trait: {
    name: string;
    num_units: number;
  };
  synergy: ISynergy | undefined;
}
interface IMetaDeckElement {
  id: number;
  champion: IChampionDetail;
  items: string[] | null;
}
interface IProcessedMetaDeck {
  id: number;
  name: string;
  decks: IMetaDeckElement[];
  Synergies: SynergyProps[];
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
  const processedMetaDecks: IProcessedMetaDeck[] = [];
  metaDecksData?.map((MD_ele, MD_key) => {
    let id = MD_key;
    let name = MD_ele.name;
    let decks: IMetaDeckElement[] = [];
    let Synergies: SynergyProps[] = [];
    // console.log(MD_ele);

    let champions: { champion: any; D_key: number; items: string[] | null }[] = [];

    MD_ele.decks.map((D_ele, D_key) => {
      const champion = findChampionByIngameKey(D_ele[0]);

      let items: string[] | null = D_ele[1].length !== 0 ? [...D_ele[1]] : null;
      if (champion) {
        champions.push({ champion, D_key, items });
      }
    });

    // cost 속성 기준으로 챔피언을 내림차순 정렬
    champions.sort((a, b) => b.champion.cost1 - a.champion.cost1);

    champions.forEach(({ champion, D_key, items }) => {
      const traits = [champion?.traits1, champion?.traits2, champion?.traits3, champion?.traits4];
      traits.forEach((trait) => {
        if (trait) {
          const synergy = synergiesData?.find((synergy) => synergy.key === trait);
          if (synergy) {
            let existingSynergy = Synergies.find((prop_synergy) => prop_synergy.synergy === synergy);
            if (existingSynergy) {
              existingSynergy.trait.num_units++;
            } else {
              Synergies.push({ trait: { name: synergy.ingameKey, num_units: 1 }, synergy: synergy });
            }
          }
        }
      });

      decks.push({ id: D_key, champion, items });
    });

    Synergies.sort((a, b) => b.trait.num_units - a.trait.num_units);
    processedMetaDecks.push({ id, name, decks, Synergies });
  });

  return (
    <VStack gap={20}>
      <Container maxW={'1000px'} minH={'500px'}>
        <Box mb={5}>
          <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
            추천 메타
          </Text>
        </Box>
        {metaDecksData?.map((deck_ele, deck_idx) => (
          <HStack key={deck_idx} position={'relative'} bg={'#27282e'} p={8} m={2} gap={10}>
            {/* # 1. 추천메타 명 */}
            <Box minW={'120px'}>
              <Text color={'white'} fontSize={'15px'}>
                {deck_ele.name}
              </Text>
              {/* <>{console.log(deck_ele.name)}</> */}
            </Box>
            <HStack display={'flex'} minW={'170px'} maxW={'150px'} flexWrap={'wrap'} gap={'1'}>
              {processedMetaDecks[deck_idx].Synergies.map((MDS_ele, MDS_key) => (
                <>
                  {/* {console.log('MDS_ele.trait.name : ', MDS_ele.trait.name)}
                  {console.log('MDS_ele.trait : ', MDS_ele.trait)} */}
                  <Synergy key={MDS_ele.trait.name} trait={MDS_ele.trait} synergy={MDS_ele.synergy} />
                </>
              ))}
            </HStack>

            <VStack alignItems={'flex-start'}>
              {/* 챔피언 이미지 표시 */}
              <HStack mt={2} wrap={'wrap'}>
                {processedMetaDecks[deck_idx].decks.map((MDC_ele, MDC_key) => {
                  const champion = MDC_ele.champion;
                  let items = MDC_ele.items?.map((each_item_ele) => findItemByIngameKey(each_item_ele));
                  return (
                    <VStack>
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
                      <HStack mt={-1} zIndex={1} gap={0}>
                        {items && items.length > 0 ? (
                          <>
                            {items.map((item_ele) => (
                              <HStack key={MDC_key}>
                                {item_ele ? (
                                  <Box w="15px" h="15px">
                                    <Item
                                      key={item_ele.key}
                                      ingameKey={item_ele.ingameKey}
                                      ingameIcon={item_ele.ingameIcon}
                                      name={item_ele.name}
                                      desc={item_ele.desc}
                                      shortDesc={item_ele.shortDesc}
                                      fromDesc={item_ele.fromDesc}
                                      imageUrl={item_ele.imageUrl}
                                      composition1={item_ele.composition1}
                                      composition2={item_ele.composition2}
                                      affectedTraitKey={item_ele.affectedTraitKey}
                                      isFromItem={item_ele.isFromItem}
                                      isNormal={item_ele.isNormal}
                                      isEmblem={item_ele.isEmblem}
                                      isSupport={item_ele.isSupport}
                                      isArtifact={item_ele.isArtifact}
                                      isRadiant={item_ele.isRadiant}
                                      isUnique={item_ele.isUnique}
                                      isNew={item_ele.isNew}
                                    />
                                  </Box>
                                ) : null}
                              </HStack>
                            ))}
                          </>
                        ) : (
                          <Box w="15px" h="15px"></Box>
                        )}
                      </HStack>
                    </VStack>
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
