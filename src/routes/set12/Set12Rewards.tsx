import React from 'react';
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

export default function Set12Rewards() {
  const { rewardType } = useParams<{ rewardType: string }>();
  const location = useLocation();

  const getBoxStyle = (path: string) => ({
    p: 5,
    width: '25%',
    cursor: 'pointer',
    textAlign: 'center',
    bg: location.pathname.includes(path) ? '#6e43d9' : 'transparent',
    _hover: { bg: '#6e43d9' },
  });

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
          <VStack p={5} mx={20} mb={5} alignItems={'flex-start'}>
            <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
              황금빛 퀘스트
            </Text>
            <Text mt={5} color={'white'}>
              A Golden Quest rewards details go here.
            </Text>
          </VStack>
        );
      // 행운은 용감한 자의 편 보상
      case 'fortuneFavorstheBold':
        return (
          <VStack p={5} mx={20} mb={5} alignItems={'flex-start'}>
            <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
              행운은 용감한 자의 편
            </Text>
            <Text mt={5} color={'white'}>
              Fortune Favors the Bold rewards details go here.
            </Text>
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
