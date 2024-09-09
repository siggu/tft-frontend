import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  SkeletonText,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import {
  getSet12LeagueEntries,
  getSet12badMatchesByPuuid,
  getSet12SummonerData,
  getSet12Items,
  getSet12Champions,
  getSet12Augments,
  getSet12Synergies,
  putSet12BadMatchData,
} from '../../set12api';
import { useParams } from 'react-router-dom';
import IMatch from '../../components/types';
import ISynergy from '../../components/types';
import IAugments from '../../components/types';
import { useEffect, useState } from 'react';
import ILeagueEntryDTO from './../../components/types.d';

type TraitPlacement = Record<string, [number, number]>;
type UnitPlacement = Record<string, [number, number]>;
type AugmentUsage = Record<string, [number, number]>;
type ItemUsage = Record<string, [number, number]>;

const countTraits = (participants: any[], synergyMap: Record<string, string>): TraitPlacement => {
  const traitCount: TraitPlacement = {};

  participants.forEach((participant) => {
    participant.traits.forEach((trait: any) => {
      const traitName = synergyMap[trait.name] || trait.name;

      // 현재 특성의 횟수와 등수 합을 가져옴, 없으면 [0, 0] 기본값 사용
      const [count, placementSum] = traitCount[traitName] || [0, 0];

      // 횟수를 1 증가시키고, 등수 합에 참가자의 등수를 더함
      traitCount[traitName] = [count + 1, placementSum + participant.placement];
    });
  });

  return traitCount;
};

const countUnitsAndItems = (
  participants: any[],
  championMap: Record<string, string>,
  itemMap: Record<string, string>
): { unitCount: UnitPlacement; itemCount: ItemUsage } => {
  const unitCount: UnitPlacement = {};
  const itemCount: ItemUsage = {};

  participants.forEach((participant) => {
    participant.units.forEach((unit: any) => {
      const unitName = championMap[unit.character_id] || unit.character_id;

      // 현재 유닛의 횟수와 등수 합을 가져옴, 없으면 [0, 0] 기본값 사용
      const [unitCountValue, unitPlacementSum] = unitCount[unitName] || [0, 0];
      unitCount[unitName] = [unitCountValue + 1, unitPlacementSum + participant.placement];

      unit.itemNames.forEach((item: string) => {
        const itemName = itemMap[item] || item;

        // 현재 아이템의 횟수와 사용 빈도 합을 가져옴, 없으면 [0, 0] 기본값 사용
        const [itemCountValue, itemUsageSum] = itemCount[itemName] || [0, 0];
        itemCount[itemName] = [itemCountValue + 1, itemUsageSum + participant.placement];
      });
    });
  });

  return { unitCount, itemCount };
};

const countAugments = (participants: any[], augmentMap: Record<string, string>): AugmentUsage => {
  const augmentCount: AugmentUsage = {};

  participants.forEach((participant) => {
    participant.augments.forEach((augment: string) => {
      const augmentName = augmentMap[augment] || augment;

      // 현재 오그멘트의 횟수와 등수 합을 가져옴, 없으면 [0, 0] 기본값 사용
      const [augmentCountValue, augmentPlacementSum] = augmentCount[augmentName] || [0, 0];

      // 횟수를 1 증가시키고, 등수 합에 참가자의 등수를 더함
      augmentCount[augmentName] = [augmentCountValue + 1, augmentPlacementSum + participant.placement];
    });
  });

  return augmentCount;
};

export default function Set12ProfileDetail() {
  const { gameName, tagLine } = useParams();

  const {
    data: summonerData,
    isLoading: isSummonerDataLoading,
    refetch: refetchSummonerData,
  } = useQuery({
    queryKey: ['', gameName, tagLine],
    queryFn: getSet12SummonerData,
    enabled: false,
  });

  const summonerId = summonerData?.summonerId || '';
  const puuid = summonerData?.puuid || '';

  const {
    data: leagueEntryData,
    isLoading: isLeagueEntryDataLoading,
    refetch: refetchLeagueEntries,
  } = useQuery<ILeagueEntryDTO>({
    queryKey: ['', summonerId],
    queryFn: getSet12LeagueEntries,
    enabled: false,
  });
  const {
    data: badMatchesByPuuidData,
    isLoading: isBadMatchesByPuuidData,
    refetch: refetchBadMatchesByPuuid,
  } = useQuery<IMatch[]>({
    queryKey: ['badMatchesByPuuidData', puuid],
    queryFn: getSet12badMatchesByPuuid,
    enabled: false,
  });

  const {
    data: synergiesData,
    isLoading: isSynergiesDataLoading,
    refetch: refetchSynergiesData,
  } = useQuery<ISynergy[]>({
    queryKey: ['synergy'],
    queryFn: getSet12Synergies,
    enabled: false,
  });
  const {
    data: augmentsData,
    isLoading: isAugmentsDataLoading,
    refetch: refetchAugmentsData,
  } = useQuery<IAugments[]>({
    queryKey: ['augment'],
    queryFn: getSet12Augments,
    enabled: false,
  });
  const {
    data: chamiponsData,
    isLoading: isChampionsDataLoading,
    refetch: refetchChampionsData,
  } = useQuery({
    queryKey: ['champions'],
    queryFn: getSet12Champions,
    enabled: false,
  });
  const {
    data: itemsData,
    isLoading: isItemsDataLoading,
    refetch: refetchItemsData,
  } = useQuery({
    queryKey: ['items'],
    queryFn: getSet12Items,
    enabled: false,
  });

  const [matchData, setMatchData] = useState<IMatch[]>([]);

  const getTierImageSrc = (tier: string) => {
    const baseUrl = 'https://cdn.metatft.com/file/metatft/ranks/wings_';
    const validTiers = [
      'bronze',
      'silver',
      'gold',
      'platinum',
      'emerald',
      'diamond',
      'master',
      'grandmaster',
      'challenger',
    ];

    const lowerCaseTier = tier?.toLowerCase();
    return validTiers.includes(lowerCaseTier) ? `${baseUrl}${lowerCaseTier}.png` : '';
  };

  const championMap =
    chamiponsData?.reduce((map: Record<string, string>, champion: any) => {
      map[champion.ingameKey] = champion.name;
      return map;
    }, {} as Record<string, string>) || {};

  const itemMap =
    itemsData?.reduce((map: Record<string, string>, item: any) => {
      map[item.ingameKey] = item.name;
      return map;
    }, {} as Record<string, string>) || {};

  const synergyMap =
    synergiesData?.reduce((map: Record<string, string>, synergy: any) => {
      map[synergy.ingameKey] = synergy.name;
      return map;
    }, {} as Record<string, string>) || {};

  const augmentMap =
    augmentsData?.reduce((map: Record<string, string>, augment: any) => {
      map[augment.ingameKey] = augment.name;
      return map;
    }, {} as Record<string, string>) || {};

  const allParticipants = badMatchesByPuuidData?.flatMap((match) => match.match_detail.info.participants) || [];
  const traitCounts = countTraits(allParticipants, synergyMap);
  const augmentCounts = countAugments(allParticipants, augmentMap);
  const { unitCount, itemCount } = countUnitsAndItems(allParticipants, championMap, itemMap);

  const renderTable = (
    data: Record<string, [number, number]>,
    title: string,
    type: string,
    mapData: any[],
    countThreshold: number // 추가된 인자
  ) => (
    <Box color={'white'}>
      <Text mb={'20px'} color={'white'}>
        {title}
      </Text>
      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>{type}</Th>
            <Th>게임 수</Th>
            <Th>평균 등수</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(data)
            .filter(([, [count]]) => count > countThreshold) // countThreshold를 이용하여 필터링
            .sort(
              ([, [countA, placementSumA]], [, [countB, placementSumB]]) =>
                placementSumB / countB - placementSumA / countA
            )
            .map(([name, [count, placementSum]]) => {
              const mappedItem = mapData.find((item: any) => item.name === name);

              return (
                <Tr key={name}>
                  <Td>
                    <HStack>
                      <Image
                        rounded={'20px'}
                        w={'30px'}
                        src={mappedItem?.whiteImageUrl || mappedItem?.imageUrl || ''}
                      />
                      <Text>{name}</Text>
                    </HStack>
                  </Td>
                  <Td>{count}</Td>
                  <Td>{(placementSum / count).toFixed(1)}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );

  const toast = useToast();

  // PUT 요청 쿼리
  const {
    refetch: refetchPutSet12BadMatchData,
    isSuccess: isPostSuccess,
    isError: isPostError,
  } = useQuery({
    queryKey: ['puuid', puuid],
    queryFn: putSet12BadMatchData,
    enabled: false,
  });

  const handleUpdateClick = async () => {
    // Toast를 처음에 로딩 상태로 설정
    const updateToastId = toast({
      title: '매치 데이터 업데이트 중...',
      description: '처음에는 시간이 많이 소요될 수 있습니다...',
      status: 'loading',
      position: 'top',
      duration: 100000,
    });

    try {
      const putResult = await refetchPutSet12BadMatchData();
      const BadMatchesByPuuidResult = await refetchBadMatchesByPuuid();
      const summonerDataResult = await refetchSummonerData();
      const leagueEntriesResult = await refetchLeagueEntries();
      const synergiesDataResult = await refetchSynergiesData();
      const augmentsDataResult = await refetchAugmentsData();
      const championsDataResult = await refetchChampionsData();
      const itemsDataResult = await refetchItemsData();

      if (
        putResult.isSuccess &&
        BadMatchesByPuuidResult.isSuccess &&
        summonerDataResult.isSuccess &&
        leagueEntriesResult.isSuccess &&
        synergiesDataResult.isSuccess &&
        augmentsDataResult.isSuccess &&
        championsDataResult.isSuccess &&
        itemsDataResult.isSuccess
      ) {
        // POST 쿼리 성공 시 페이지 새로 고침 및 성공 메시지 표시를 위한 flag 설정
        localStorage.setItem('updateSuccessToast', 'true');
        toast.update(updateToastId, {
          title: '매치 데이터 업데이트 완료!',
          status: 'success',
          duration: 1000,
        });
        setMatchData(BadMatchesByPuuidResult.data || []);
      } else {
        // POST 쿼리 실패 시 오류 메시지 표시
        toast.update(updateToastId, {
          title: '매치 데이터 업데이트 중 오류 발생',
          status: 'error',
          duration: 1000,
        });
      }
    } catch (error) {
      // 예외 발생 시 오류 메시지 표시
      toast.update(updateToastId, {
        title: '매치 데이터 업데이트 중 오류 발생',
        status: 'error',
        duration: 1000,
      });
    }
  };

  return (
    <VStack display={'flex'} alignItems={'center'}>
      {/* Existing profile and league info */}
      <HStack display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} textColor={'white'}>
        <Box
          mt={20}
          mb={20}
          w="300px"
          position={'relative'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {/* Tier Image */}
          <Image
            top={-180}
            position={'absolute'}
            w={'300px'}
            src={getTierImageSrc(String(leagueEntryData?.tier || ''))}
          />
          {/* Summoner Profile Icon */}
          <Image
            borderRadius="full"
            w="100px"
            h="100px"
            src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/profileicon/${summonerData?.profileIconId}.png`}
            alt="Profile Icon"
          />
        </Box>
        <VStack alignItems="flex-start">
          <HStack>
            <Text>{summonerData?.gameName}</Text>
            <Text>{summonerData?.tagLine}</Text>
          </HStack>
          {isLeagueEntryDataLoading && !leagueEntryData ? (
            <HStack>
              <SkeletonText fontSize="24px"></SkeletonText>
              <SkeletonText fontSize="24px"></SkeletonText>
            </HStack>
          ) : (
            <>
              {leagueEntryData?.rank ? (
                <>
                  <HStack>
                    <Text>{leagueEntryData?.tier}</Text>
                    <Text>{leagueEntryData?.rank}</Text>
                    <Text>{leagueEntryData?.leaguePoints} p</Text>
                  </HStack>
                  <HStack>
                    <Text>승 - {leagueEntryData?.wins}</Text>
                    <Text>패 - {leagueEntryData?.losses}</Text>
                  </HStack>
                </>
              ) : (
                <HStack>
                  <Text>UnRanked</Text>
                </HStack>
              )}
            </>
          )}
        </VStack>
      </HStack>
      <Box onClick={handleUpdateClick}>
        <Button colorScheme="green">최신화 버튼</Button>
      </Box>
      <HStack
        gap={'50px'}
        padding={'50px 20px 100px 0px'}
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'center'} // 중앙 정렬
        flexWrap={'wrap'} // 줄바꿈
      >
        {renderTable(traitCounts, '시너지', '시너지', synergiesData || [], 4)}
        {renderTable(augmentCounts, '증강체', '증강체', augmentsData || [], 1)}
        {renderTable(unitCount, '챔피언', '챔피언', chamiponsData || [], 3)}
        {renderTable(itemCount, '아이템', '아이템', itemsData || [], 5)}
      </HStack>
    </VStack>
  );
}
