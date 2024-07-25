import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
} from '@chakra-ui/react';
import IChampion from '../../components/types';
import Champion from '../../components/set12/Set12Champion';
import { getSet12Champions } from '../../set12api';
import GQ_rewardsData from '../../components/set12/Set12RewardsDatas_GQ.json';
import FFB_rewardsData from '../../components/set12/Set12RewardsDatas_FFB.json';
import { useQuery } from '@tanstack/react-query';
import IItems from '../../components/types';
import Set12Item from '../../components/set12/Set12Item';
import { getSet12Items } from '../../set12api';
import Set12ProfileChampion from '../../components/set12/Set12ProfileChampion';
import Set12RewardComponent from '../../components/set12/set12RewardComponent';

interface IGQ {
  champion_IngameKey: string;
  item1_IngameKey: string;
  item2_IngameKey: string;
  item3_IngameKey: string;
}
interface IReward {
  itemCount: number;
  itemName: string;
}
interface IProbability {
  probability: string;
  rewards: IReward[];
}
interface IFFB {
  lose: number;
  probabilities: IProbability[];
}

export default function Set12Rewards() {
  const { rewardType } = useParams<{ rewardType: string }>();
  const location = useLocation();
  const [GQData, setGQData] = useState<IGQ[]>([]);
  const [FFBData, setFFBData] = useState<IFFB[]>([]);
  // JSON 데이터를 상태로 설정
  useEffect(() => {
    setGQData(GQ_rewardsData);
    setFFBData(FFB_rewardsData);
  }, []);
  // 모든 챔피언 가져오기
  const { data: allChampionsData, isLoading: isAllChampionDataLoading } = useQuery<IChampion[]>({
    queryKey: ['champions'],
    queryFn: getSet12Champions,
  });
  const { data: allItemsData, isLoading: isItemLoading } = useQuery<IItems[]>({
    queryKey: ['item'],
    queryFn: getSet12Items,
  });
  const getBoxStyle = (path: string) => ({
    p: 5,
    width: '25%',
    cursor: 'pointer',
    textAlign: 'center',
    bg: location.pathname.includes(path) ? '#6e43d9' : 'transparent',
    _hover: { bg: '#6e43d9' },
  });
  const findChampionByIngameKey = (ingameKey: string) => {
    return allChampionsData?.find((champion) => champion.ingameKey === ingameKey);
  };
  const findItemByIngameKey = (ingameKey: string) => {
    return allItemsData?.find((item) => item.ingameKey === ingameKey);
  };
  // const AGoldQuest = () =>{
  //   const[GQ,setGQ] = useState([])
  //   useEffect(()=>{
  //     setGQ(rewardsData[0])
  //   })
  // }

  const renderRewardDetails = () => {
    switch (rewardType) {
      // 달콤술사 보상
      case 'sugarcraft':
        return (
          <VStack mt={20} color={'white'}>
            <Image mb={3} src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-sugarcraft.png" />
            <VStack gap={0}>
              <VStack mb={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text mb={3} fontWeight={'700'} fontSize={'23px'}>
                  달콤술사 보상
                </Text>
                <Text fontWeight={'600'} fontSize={'12px'} color={'gray'}>
                  달콤술사는 설탕으로 각 층의 케이크를 만들고, 플레이어 대상 전투 후 아군이 보유하고 있는 각 재료마다
                  설탕을 획득합니다.
                </Text>
                <Text fontWeight={'600'} fontSize={'12px'} color={'gray'}>
                  각 케이크 층마다 공격력과 주문력이 10%만큼 증가합니다. 케이크가 7층에 도달하면, 대신 간식을
                  획득합니다!
                </Text>
              </VStack>
              <VStack p={5} mx={20} alignItems={'flex-start'}>
                <Table size={'lg'} bgColor={'#27282e'}>
                  <Thead>
                    <Tr bgColor={'#363944'}>
                      <Th color={'#a5a8b4'}>스택</Th>
                      <Th color={'#a5a8b4'}>보상</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>600</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>10 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x10
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무작위 조합 아이템</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-random-loot.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                무작위 조합 아이템
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>950</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>15 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x15
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무작위 조합 아이템</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-random-loot.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                무작위 조합 아이템
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>황금 자석 제거기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-golden-item-remover.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                황금 자석 제거기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>1325</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>10 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x10
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무작위 조합 아이템</Text>}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image
                                  w={'30px'}
                                  src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-random-loot.png"
                                />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x2
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                무작위 조합 아이템
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>챔피언 복제기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-champion-duplicater.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                챔피언 복제기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>1750</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>20 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x20
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>걸작 업그레이드</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-masterwork-upgrade.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                걸작 업그레이드
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>2000</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>전략가의 왕관</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/ForceofNature_1640059110.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                전략가의 왕관
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>전투 참여: 케이크</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-cake-fight.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                전투 참여: 케이크
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </VStack>
          </VStack>
        );
      // 별이 수놓인 모험 보상
      case 'anUpgradedAdventure':
        return (
          <VStack mt={20} color={'white'}>
            <Image mb={3} src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-aug-star.png" />
            <VStack gap={0}>
              <VStack mb={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text mb={3} fontWeight={'700'} fontSize={'23px'}>
                  별이 수놓인 모험
                </Text>
                <Text fontWeight={'600'} fontSize={'12px'} color={'gray'}>
                  챔피언 4명을 3성으로 업그레이드하면 굉장한 보상을 획득합니다. 1단계 챔피언을 4명 획득합니다.
                </Text>
              </VStack>
              <VStack p={5} mx={20} alignItems={'flex-start'}>
                <Table size={'lg'} bgColor={'#27282e'}>
                  <Thead>
                    <Tr bgColor={'#363944'}>
                      <Th color={'#a5a8b4'}>확률</Th>
                      <Th color={'#a5a8b4'}>보상</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>14%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>8 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x8
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무작위 유물</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-artifact.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                무작위 유물
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무작위 찬란한 아이템</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-radiant-item.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                무작위 찬란한 아이템
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무작위 완성 아이템</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-random-completed-item.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                무작위 완성 아이템
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>재조합기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-reforger.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                재조합기
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>자석 제거기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-item-remover.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                자석 제거기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>13%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>5 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x5
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>도적의 장갑</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                도적의 장갑
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>장난꾸러기의 장갑</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/RadientThiefsGloves_1651210121.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                장난꾸러기의 장갑
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>대장장이의 장갑</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/BlacksmithsGloves_1710226718-tft9_ornnitem_blacksmithsgloves.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                대장장이의 장갑
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>자석 제거기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-item-remover.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                자석 제거기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>13%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>10 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x10
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>완성 아이템 모루</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-anvil-completed.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                완성 아이템 모루
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>걸작 업그레이드</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-masterwork-upgrade.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                걸작 업그레이드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip hasArrow placement="top" bg={'black'} rounded={'md'} p={3} label={<Text>구원</Text>}>
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/Redemption_1710227835-redemption.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                구원
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>워모그의 갑옷</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/WarmogsArmor_1710228144-warmogs_armor.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                워모그의 갑옷
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>12%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>완성 아이템 모루</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image
                                  w={'30px'}
                                  src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-anvil-completed.png"
                                />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x2
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                완성 아이템 모루
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>수상한 외투</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/SuspiciousTrenchCoat_1714027929-tft_item_artifact_suspicioustrenchcoat.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                수상한 외투
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>불안정한 보물 상자</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/UnstableTreasureChest_1714027854-unstable_treasure_chest.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                불안정한 보물 상자
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>12%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>5 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x5
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>공범의 장갑</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/AccomplicesGloves_1709501151-thieves_gloves.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                공범의 장갑
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>지크의 전령</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/ZekesHerald_1693365559-zekes_herald.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                지크의 전령
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>힘의 성배</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/Chalice_1693365587-chalice_of_power.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                힘의 성배
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>12%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>8 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x8
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>무한한 삼위일체</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/OrnnItemTrinityForce_1644815912.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                무한한 삼위일체
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>영혼의 형상</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/OrnnItemSpiritVisage_1644815896.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                영혼의 형상
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>생선대가리</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/Fishbones_1714028339-tft_item_artifact_fishbones.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                생선대가리
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>자석 제거기</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image
                                  w={'30px'}
                                  src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-item-remover.png"
                                />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x2
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                자석 제거기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>12%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>8 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x8
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>공범의 장갑</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/AccomplicesGloves_1709501151-thieves_gloves.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                공범의 장갑
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>승천의 부적</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/TalismanOfAscension_1714028034-tft_item_artifact_talismanofascension.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                승천의 부적
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>죽음의 저항</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/OrnnItemDeathsDance_1644815852.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                죽음의 저항
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>자석 제거기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-item-remover.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                자석 제거기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>12%</Td>
                      <Td>
                        <HStack>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>15 골드</Text>}
                            position={'relative'}
                          >
                            <VStack gap={0}>
                              <Box position={'relative'}>
                                <Image w={'30px'} src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png" />
                                <Text fontSize={'14px'} right={0} top={3} position={'absolute'}>
                                  x15
                                </Text>
                              </Box>
                              <Text color={'gray'} fontSize={'12px'}>
                                골드
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>장난꾸러기의 장갑</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/RadientThiefsGloves_1651210121.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                장난꾸러기의 장갑
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>전략가의 왕관</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.lolchess.gg/upload/images/items/ForceofNature_1640059110.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                전략가의 왕관
                              </Text>
                            </VStack>
                          </Tooltip>
                          <Tooltip
                            hasArrow
                            placement="top"
                            bg={'black'}
                            rounded={'md'}
                            p={3}
                            label={<Text>자석 제거기</Text>}
                          >
                            <VStack gap={0}>
                              <Image
                                w={'30px'}
                                src="https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-item-remover.png"
                              />
                              <Text color={'gray'} fontSize={'12px'}>
                                자석 제거기
                              </Text>
                            </VStack>
                          </Tooltip>
                        </HStack>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </VStack>
          </VStack>
        );
      // 황금빛 퀘스트 보상
      case 'aGoldenQuest':
        return (
          <VStack mt={20} color={'white'}>
            <Image mb={3} src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-aug-gold.png" />
            <VStack gap={0}>
              <VStack mb={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text mb={3} fontWeight={'700'} fontSize={'23px'}>
                  황금빛 퀘스트
                </Text>
                <Text fontWeight={'600'} fontSize={'12px'} color={'gray'}>
                  처음으로 161.8골드 이상 보유 시, 5단계 2성 챔피언 1명과 이 챔피언에 어울리는 아이템 3개를 획득합니다.
                </Text>
              </VStack>
              <VStack p={5} mx={20} alignItems={'flex-start'}>
                <Table minW={'620px'} size={'lg'} bgColor={'#27282e'}>
                  <Thead>
                    <Tr bgColor={'#363944'}>
                      <Th color={'#a5a8b4'}>확률</Th>
                      <Th color={'#a5a8b4'}>보상</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {GQData.map((GQ_ele) => {
                      let champion = findChampionByIngameKey(GQ_ele.champion_IngameKey);
                      let item1 = findItemByIngameKey(GQ_ele.item1_IngameKey);
                      let item2 = findItemByIngameKey(GQ_ele.item2_IngameKey);
                      let item3 = findItemByIngameKey(GQ_ele.item3_IngameKey);
                      if (champion && item1 && item2 && item3) {
                        return (
                          <Tr>
                            <Td padding={'5px'} textAlign={'center'}>
                              12.5%
                            </Td>
                            <Td
                              alignItems="flex-start"
                              padding={'5px'}
                              display={'flex'}
                              justifyContent={'space-evenly'}
                              flexWrap="wrap"
                            >
                              <HStack w={'25%'}>
                                <VStack alignItems={'flex-start'}>
                                  <Box w={'35px'} h={'35px'}>
                                    <Set12ProfileChampion
                                      key={champion.key}
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
                                      isHiddenGuide={champion.isHiddenGuide}
                                      isHiddenLanding={champion.isHiddenLanding}
                                      isHiddenTeamBuiler={champion.isHiddenTeamBuiler}
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
                                      magicalResistance={0}
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
                                  <Text fontSize={'12px'} color={'gray'}>
                                    {champion.name}
                                  </Text>
                                </VStack>
                              </HStack>
                              <HStack w={'25%'}>
                                <VStack alignItems={'flex-start'}>
                                  <Box w={'35px'} h={'35px'}>
                                    <Set12Item
                                      key={item1.key}
                                      ingameKey={item1.ingameKey}
                                      name={item1.name}
                                      description={item1.description}
                                      shortDesc={item1.shortDesc}
                                      imageUrl={item1.imageUrl}
                                      composition1={item1.composition1}
                                      composition2={item1.composition2}
                                      isFromItem={item1.isFromItem}
                                      isNormal={item1.isNormal}
                                      isEmblem={item1.isEmblem}
                                      isSupport={item1.isSupport}
                                      isArtifact={item1.isArtifact}
                                      isRadiant={item1.isRadiant}
                                      isUnique={item1.isUnique}
                                      isNew={item1.isNew}
                                      tag1={item1.tag1}
                                      tag2={item1.tag2}
                                      tag3={item1.tag3}
                                    />
                                  </Box>
                                  <Text fontSize={'12px'} color={'gray'}>
                                    {item1.name}
                                  </Text>
                                </VStack>
                              </HStack>
                              <HStack w={'25%'}>
                                <VStack alignItems={'flex-start'}>
                                  <Box w={'35px'} h={'35px'}>
                                    <Set12Item
                                      key={item2.key}
                                      ingameKey={item2.ingameKey}
                                      name={item2.name}
                                      description={item2.description}
                                      shortDesc={item2.shortDesc}
                                      imageUrl={item2.imageUrl}
                                      composition1={item2.composition1}
                                      composition2={item2.composition2}
                                      isFromItem={item2.isFromItem}
                                      isNormal={item2.isNormal}
                                      isEmblem={item2.isEmblem}
                                      isSupport={item2.isSupport}
                                      isArtifact={item2.isArtifact}
                                      isRadiant={item2.isRadiant}
                                      isUnique={item2.isUnique}
                                      isNew={item2.isNew}
                                      tag1={item2.tag1}
                                      tag2={item2.tag2}
                                      tag3={item2.tag3}
                                    />
                                  </Box>
                                  <Text fontSize={'12px'} color={'gray'}>
                                    {item2.name}
                                  </Text>
                                </VStack>
                              </HStack>
                              <HStack w={'25%'}>
                                <VStack alignItems={'flex-start'}>
                                  <Box w={'35px'} h={'35px'}>
                                    <Set12Item
                                      key={item3.key}
                                      ingameKey={item3.ingameKey}
                                      name={item3.name}
                                      description={item3.description}
                                      shortDesc={item3.shortDesc}
                                      imageUrl={item3.imageUrl}
                                      composition1={item3.composition1}
                                      composition2={item3.composition2}
                                      isFromItem={item3.isFromItem}
                                      isNormal={item3.isNormal}
                                      isEmblem={item3.isEmblem}
                                      isSupport={item3.isSupport}
                                      isArtifact={item3.isArtifact}
                                      isRadiant={item3.isRadiant}
                                      isUnique={item3.isUnique}
                                      isNew={item3.isNew}
                                      tag1={item3.tag1}
                                      tag2={item3.tag2}
                                      tag3={item3.tag3}
                                    />
                                  </Box>
                                  <Text fontSize={'12px'} color={'gray'}>
                                    {item3.name}
                                  </Text>
                                </VStack>
                              </HStack>
                            </Td>
                          </Tr>
                        );
                      }
                    })}
                  </Tbody>
                </Table>
              </VStack>
            </VStack>
          </VStack>
        );
      // 행운은 용감한 자의 편 보상
      case 'fortuneFavorstheBold':
        return (
          <VStack mt={20} color={'white'}>
            <Image mb={3} src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-aug-fortune.png" />
            <VStack gap={0}>
              <VStack mb={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text mb={3} fontWeight={'700'} fontSize={'23px'}>
                  행운은 용감한 자의 편
                </Text>
                <Text fontWeight={'600'} fontSize={'12px'} color={'gray'}>
                  플레이어 대상 전투에서 승리하면 추가 구를 획득합니다. 연속으로 패배할수록 더 큰 보상을 획득합니다.
                </Text>
              </VStack>
              <VStack p={5} mx={20} mb={5} alignItems={'flex-start'}>
                <HStack wrap={'wrap'}>
                  {FFB_rewardsData.map((FFB_ele) => {
                    let lose = FFB_ele.lose;
                    console.log(lose);
                    return (
                      <VStack color={'white'} w={'340px'} display={'flex'} gap={0}>
                        <Box
                          display={'flex'}
                          backgroundColor={'#363844'}
                          w={'100%'}
                          padding={'10px'}
                          h={'45px'}
                          pl={'16px'}
                        >
                          <Text as={'b'} fontSize={'16px'}>
                            {lose}패
                          </Text>
                        </Box>
                        <Box display={'flex'} backgroundColor={'#2c2f36'} w={'100%'} h={'32px'}>
                          <Text
                            display={'flex'}
                            w={'70px'}
                            color={'#a5a8b4'}
                            justifyContent={'center'}
                            alignItems={'center'}
                          >
                            확률
                          </Text>
                          <Text
                            display={'flex'}
                            w={'70px'}
                            color={'#a5a8b4'}
                            justifyContent={'center'}
                            alignItems={'center'}
                          >
                            보상
                          </Text>
                        </Box>
                        <Box backgroundColor={'#27282d'} w={'100%'} h={'272px'} gap={0}>
                          {FFB_ele.probabilities.map((reward_ele) => {
                            return (
                              <HStack
                                display={'flex'}
                                backgroundColor={'#27282d'}
                                w={'100%'}
                                h={reward_ele.rewards.length < 5 ? '68px' : '136px'}
                                borderTop={' solid 1px #2c2f36'}
                              >
                                <Box
                                  display={'flex'}
                                  w={'70px'}
                                  mr={'-10px'}
                                  justifyContent={'center'}
                                  alignItems={'center'}
                                >
                                  <Text>{reward_ele.probability}</Text>
                                </Box>
                                <Box display={'flex'} flexWrap={'wrap'}>
                                  {reward_ele.rewards.map((RDetails_ele) => (
                                    <Set12RewardComponent
                                      itemCount={RDetails_ele.itemCount}
                                      itemName={RDetails_ele.itemName}
                                    ></Set12RewardComponent>
                                  ))}
                                </Box>
                              </HStack>
                            );
                          })}
                        </Box>
                      </VStack>
                    );
                  })}
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        );
      default:
        return (
          <VStack p={5} mx={20} mb={5} alignItems={'flex-start'}>
            <Text mt={5} color={'white'}>
              Select a reward category.
            </Text>
          </VStack>
        );
    }
  };

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
          보상표
        </Text>
      </Box>
      <Box bg={'#27282e'} mx={20} display="flex" justifyContent="space-between">
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/rewards/sugarcraft'}>
            <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Image src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-sugarcraft.png" />
              <Text mt={2} fontWeight={'700'} fontSize={'12px'} color={'white'}>
                달콤술사 보상
              </Text>
            </VStack>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/rewards/anUpgradedAdventure'}>
            <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Image src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-aug-star.png" />
              <Text mt={2} fontWeight={'700'} fontSize={'12px'} color={'white'}>
                별이 수놓인 모험
              </Text>
            </VStack>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/rewards/aGoldenQuest'}>
            <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Image src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-aug-gold.png" />
              <Text mt={2} fontWeight={'700'} fontSize={'12px'} color={'white'}>
                황금빛 퀘스트
              </Text>
            </VStack>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/rewards/fortuneFavorstheBold'}>
            <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Image src="https://cdn.dak.gg/tft/images2/rewards/icons/ico-rewards-aug-fortune.png" />
              <Text mt={2} fontWeight={'700'} fontSize={'12px'} color={'white'}>
                행운은 용감한 자의 편
              </Text>
            </VStack>
          </Link>
        </Box>
      </Box>
      {renderRewardDetails()}
    </Container>
  );
}
