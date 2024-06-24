import { Box, Container, HStack, Text, VStack, Image, Tooltip, Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getComps, getSynergies, getItems } from '../api';
import IComp from '../components/types';
import ISynergy from '../components/types';
import IItems from '../components/types';
import ICompElement from '../components/types';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
  const { data: compData, isLoading: compIsLoading } = useQuery<IComp[]>({
    queryKey: ['comps'],
    queryFn: getComps,
  });

  // 시너지 get
  const { data: synergiesData, isLoading: isSynergiesLoading } = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergies,
  });

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

  const synergiesArr: {
    tags: string;
    key: string;
    ingameKey: string;
    name: string;
    desc: string;
    imageUrl: string;
    blackImageUrl: string;
    whiteImageUrl: string;
    _type: string;
    style1: string;
    style1_min: number;
    style1_max: number;
    style2: string;
    style2_min: number;
    style2_max: number;
    style3: string;
    style3_min: number;
    style3_max: number;
    style4: string;
    style4_min: number;
    stats_1: string;
    stats_2: string;
    stats_3: string;
    stats_4: string;
    stats_5: string;
    stats_6: string;
  }[][] = [];

  compData?.forEach((comp) => {
    const compArray: {
      pk: number;
      name: string;
      elements: ICompElement[];
      isBlind: boolean;
    }[] = [];
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
                  <Box>
                    <></>
                  </Box>
                </HStack>

                {/* 챔피언 이미지 표시 */}
                <HStack>
                  {comp.elements?.map((compEle) => (
                    <Box>
                      <Champion
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
                        magicalResistance={compEle.champion}
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
          ))
        )}
      </Container>
    </VStack>
  );
