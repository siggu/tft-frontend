import { Box, Container, HStack, Image, Text, VStack, SkeletonText, Button, Tooltip, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { FaSearch, FaStar } from 'react-icons/fa';
import ILeagueEntryDTO from '../../components/types';
import IProfileMiniBox from '../../components/types';
import IMatch from '../../components/types';
import {
  deleteSet11MatchData,
  getSet11Augments,
  getSet11Champions,
  getSet11Items,
  getSet11LeagueEntries,
  getSet11MatchesByPuuid,
  getSet11SummonerData,
  getSet11Synergies,
  postSet11MatchData,
} from '../../set11api';
import ISynergy from '../../components/types';
import IAugments from '../../components/types';
// import { getTraitBackgroundImageUrl } from '../../traitColors/set11/Set11TraitColors';/
import ProfileChampion from '../../components/set11/Set11ProfileChampion';
import Item from '../../components/set11/Set11Item';
import Augment from '../../components/set11/Set11Augment';
import Synergy from '../../components/set11/Set11Synergy';
import axios from 'axios';

const calculateAveragePlacement = (matches: any[] | undefined, puuid: string | undefined) => {
  if (!matches || matches.length === 0) return 0;
  const totalPlacement = matches.reduce((sum: any, match: { match_detail: { info: { participants: any[] } } }) => {
    const participant = match.match_detail.info.participants.find((p: { puuid: any }) => p.puuid === puuid);
    return sum + (participant?.placement || 0);
  }, 0);
  return totalPlacement / matches.length;
};

const calculateTopFourRate = (matches: any[] | undefined, puuid: string | undefined) => {
  if (!matches || matches.length === 0) return 0;
  const topFourCount = matches.reduce(
    (sum: any, match: { match_detail: { info: { participants: any[]; queueId: number } } }) => {
      const participant = match.match_detail.info.participants.find((p: { puuid: any }) => p.puuid === puuid);
      if (!participant) return sum;

      if (match.match_detail.info.queueId === 1160) {
        return sum + (Math.trunc((participant.placement + 1) / 2) <= 4 ? 1 : 0);
      } else {
        return sum + (participant.placement <= 4 ? 1 : 0);
      }
    },
    0
  );
  return ((topFourCount / matches.length) * 100).toFixed(2);
};

const calculateFirstPlaceCount = (matches: any[] | undefined, puuid: string | undefined) => {
  if (!matches || matches.length === 0) return 0;
  return matches.reduce((sum: any, match: { match_detail: { info: { participants: any[]; queueId: number } } }) => {
    const participant = match.match_detail.info.participants.find((p: { puuid: any }) => p.puuid === puuid);
    if (!participant) return sum;

    if (match.match_detail.info.queueId === 1160) {
      return sum + (Math.trunc((participant.placement + 1) / 2) === 1 ? 1 : 0);
    } else {
      return sum + (participant.placement === 1 ? 1 : 0);
    }
  }, 0);
};

export default function Set11Profile() {
  const { gameName, tagLine } = useParams();
  const {
    data: summonerData,
    isLoading: isSummonerDataLoading,
    refetch: refetchSummonerData,
  } = useQuery<IProfileMiniBox>({
    queryKey: ['', gameName, tagLine],
    queryFn: getSet11SummonerData,
  });
  const summonerId = summonerData?.summonerId;
  const puuid = summonerData?.puuid;
  const {
    data: leagueEntryData,
    isLoading: isLeagueEntryDataLoading,
    refetch: refetchLeagueEntries,
  } = useQuery<ILeagueEntryDTO>({
    queryKey: ['', summonerId],
    queryFn: getSet11LeagueEntries,
  });
  const {
    data: matchesByPuuidData,
    isLoading: ismatchByPuuidDataLoading,
    refetch: refetchMatchesByPuuid,
  } = useQuery<IMatch[]>({
    queryKey: ['', puuid],
    queryFn: getSet11MatchesByPuuid,
  });
  const { data: synergiesData, isLoading: isSynergiesDataLoading } = useQuery<ISynergy[]>({
    queryKey: ['synergy'],
    queryFn: getSet11Synergies,
  });
  const { data: augmentsData, isLoading: isAugmentsDataLoading } = useQuery<IAugments[]>({
    queryKey: ['augment'],
    queryFn: getSet11Augments,
  });
  const { data: chamiponsData, isLoading: isChampionsDataLoading } = useQuery({
    queryKey: ['champions'],
    queryFn: getSet11Champions,
  });
  const { data: itemsData, isLoading: isItemsDataLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getSet11Items,
  });

  const location = useLocation();
  const { name, matches } = location.state || {}; // 기본값 설정

  // console.log('Name:', name);
  // console.log('Matches:', matches);
  const [matchData, setMatchData] = useState<IMatch[]>([]);

  const convertRawTimeToMinutesSeconds = (rawTime: number): string => {
    const totalSeconds = Math.floor(rawTime); // 주어진 시간을 초 단위로 변환
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0'); // 분 단위로 변환 후 2자리로 포맷팅
    const seconds = String(totalSeconds % 60).padStart(2, '0'); // 초 단위로 변환 후 2자리로 포맷팅
    return `${minutes}:${seconds}`; // "분:초" 형식의 문자열 반환
  };

  const generateStars = (tier: number) => {
    return Array.from({ length: tier }, (_, index) => <FaStar key={index} />);
  };

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

    if (tier) {
      const lowerCaseTier = tier.toLowerCase();
      if (validTiers.includes(lowerCaseTier)) {
        return `${baseUrl}${lowerCaseTier}.png`;
      }
    }
    return '';
  };

  const toast = useToast();

  // DELETE 요청 쿼리
  const {
    refetch: refetchDeleteSet11MatchData,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useQuery({
    queryKey: ['puuid', puuid],
    queryFn: deleteSet11MatchData,
    enabled: false, // 클릭 시에만 실행
  });

  // POST 요청 쿼리
  const {
    refetch: refetchPostSet11MatchData,
    isSuccess: isPostSuccess,
    isError: isPostError,
  } = useQuery({
    queryKey: ['puuid', puuid],
    queryFn: postSet11MatchData,
    enabled: false,
  });

  const handleUpdateClick = async () => {
    // Toast를 처음에 로딩 상태로 설정
    const deleteLoadingToastId = toast({
      title: '매치 데이터 업데이트 중...',
      status: 'loading',
      position: 'top',
      duration: 100000,
    });

    try {
      // DELETE 쿼리 실행
      const deleteResult = await refetchDeleteSet11MatchData();

      if (deleteResult.isSuccess) {
        // DELETE 성공 시 POST 쿼리 실행
        const postResult = await refetchPostSet11MatchData();

        if (postResult.isSuccess) {
          // POST 쿼리 성공 시 페이지 새로 고침 및 성공 메시지 표시를 위한 flag 설정
          localStorage.setItem('updateSuccessToast', 'true');
          window.location.reload();
        } else {
          // POST 쿼리 실패 시 오류 메시지 표시
          toast.update(deleteLoadingToastId, {
            title: '매치 데이터 업데이트 중 오류 발생',
            status: 'error',
          });
        }
      } else {
        // DELETE 쿼리 실패 시 오류 메시지 표시
        toast.update(deleteLoadingToastId, {
          title: '매치 데이터 업데이트 중 오류 발생',
          status: 'error',
        });
      }
    } catch (error) {
      // 예외 발생 시 오류 메시지 표시
      toast.update(deleteLoadingToastId, {
        title: '매치 데이터 업데이트 중 오류 발생',
        status: 'error',
      });
    }
  };

  // 페이지 로드 후 toast를 표시하는 함수
  const showToastAfterReload = () => {
    if (localStorage.getItem('updateSuccessToast') === 'true') {
      setTimeout(() => {
        toast({
          title: '매치 데이터 업데이트 완료!',
          status: 'success',
          position: 'top',
          duration: 2000,
        });
        localStorage.removeItem('updateSuccessToast'); // 토스트를 표시한 후 flag 제거
      }, 500);
    }
  };

  // 페이지 로드 시 toast를 확인
  useEffect(() => {
    showToastAfterReload();
  }, []);

  const formatTimestampKST = (timestamp: number): string => {
    const date = new Date(timestamp);
    const kstOffset = 0 * 60 * 60 * 1000; // 한국 시간대는 UTC+9
    const kstDate = new Date(date.getTime() + kstOffset);

    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const month = months[kstDate.getMonth()];
    const day = kstDate.getDate();

    let hours = kstDate.getHours();
    const minutes = kstDate.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // 시간 '0'을 '12'로 변환
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${month} ${day}일 ${ampm} ${hours}시 ${formattedMinutes}분`;
  };

  const averagePlacement = calculateAveragePlacement(matchesByPuuidData, puuid);
  const topFourRate = calculateTopFourRate(matchesByPuuidData, puuid);
  const firstPlaceCount = calculateFirstPlaceCount(matchesByPuuidData, puuid);

  return (
    <VStack>
      <Container maxW="1000px">
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
            {/* 티어 사진 */}
            <Image
              top={-180}
              position={'absolute'}
              w={'300px'}
              src={getTierImageSrc(String(leagueEntryData?.tier || ''))}
            />
            {/* 유저 프로필 사진 */}
            <Image
              // border="10px black solid"
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
                  <>
                    <HStack>
                      <Text>UnRanked</Text>
                    </HStack>
                  </>
                )}
              </>
            )}
          </VStack>
        </HStack>
        <VStack gap={0} p={3} m={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Text fontWeight={'700'} fontSize={'20px'} color={'white'}>
            최근 게임 전적
          </Text>
          <Text color={'gray'} mb={5}>
            (일반, 랭크, 초고속, 더블업, 펭구의 파티)
          </Text>
          <HStack>
            <HStack mr={5} w={'290px'} flexWrap={'wrap'}>
              {matchesByPuuidData
                ?.filter((match) => match.match_detail.metadata.participants)
                .sort((a, b) => b.match_detail.info.game_datetime - a.match_detail.info.game_datetime)
                .map((match: IMatch) => {
                  const participant = match.match_detail.info.participants.find(
                    (participant) => participant.puuid === puuid
                  );
                  if (!participant) return null;
                  return (
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      w={'20px'}
                      h={'30px'}
                      fontSize={'20px'}
                      gap={0}
                      color={'black'}
                      borderRadius={3}
                      bgColor={
                        match.match_detail.info.queueId === 1160 && Math.trunc((participant.placement + 1) / 2) <= 1
                          ? 'gold'
                          : participant.placement <= 1
                          ? 'gold'
                          : participant.placement <= 4
                          ? 'white'
                          : 'gray.600'
                      }
                    >
                      <Text fontSize={'15px'} fontWeight={700}>
                        {match.match_detail.info.queueId === 1160
                          ? Math.trunc((participant.placement + 1) / 2)
                          : participant.placement}
                      </Text>
                    </Box>
                  );
                })}
            </HStack>
            <HStack gap={3}>
              <VStack gap={1}>
                <Text fontSize={'17px'} color={'white'}>
                  평균 순위
                </Text>
                <Text fontSize="15px" color="white">
                  {averagePlacement.toFixed(2)}위
                </Text>
              </VStack>
              <VStack gap={1}>
                <Tooltip
                  fontSize={'13px'}
                  hasArrow
                  bg={'black'}
                  rounded={'md'}
                  p={3}
                  label="상위 4등 안에 든 비율"
                  placement="top"
                >
                  <Text fontSize={'17px'} color="white">
                    순방률
                  </Text>
                </Tooltip>
                <Text fontSize="15px" color="white">
                  {topFourRate}%
                </Text>
              </VStack>
              <VStack gap={1}>
                <Text fontSize={'17px'} color={'white'}>
                  1등 횟수
                </Text>
                <Text fontSize={'15px'} color={'white'}>
                  {firstPlaceCount}회
                </Text>
              </VStack>
              <VStack>
                <Text color={'white'}></Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
        <Box mb={5}>
          <Button colorScheme="green" onClick={handleUpdateClick}>
            전적 업데이트
          </Button>
        </Box>
        <Box textColor={'white'}>
          {matchesByPuuidData
            ?.filter((match) => match.match_detail.metadata.participants)
            .sort((a, b) => b.match_detail.info.game_datetime - a.match_detail.info.game_datetime) // 최신 매치부터 정렬
            .map((match: IMatch) => {
              if (match.match_detail.info.tft_set_core_name === 'TFTSet11') {
                const participant = match.match_detail.info.participants.find(
                  (participant) => participant.puuid === puuid
                );

                if (!participant) return null;

                return (
                  <Box
                    bgColor={'#27282e'}
                    key={match.match_id}
                    p={4}
                    borderWidth={1}
                    borderRadius={8}
                    borderColor="gray.700"
                    mb={4}
                  >
                    <VStack alignItems="flex-start">
                      {/* 등수 */}
                      <HStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <HStack
                          fontSize={'20px'}
                          gap={0}
                          color={
                            match.match_detail.info.queueId === 1160 && Math.trunc((participant.placement + 1) / 2) <= 1
                              ? 'gold'
                              : participant.placement <= 1
                              ? 'gold'
                              : participant.placement <= 4
                              ? 'white'
                              : 'gray.600'
                          }
                        >
                          {/* <Text>#</Text> */}
                          <Text>
                            {match.match_detail.info.queueId === 1160
                              ? Math.trunc((participant.placement + 1) / 2)
                              : participant.placement}
                          </Text>
                          <Text>위</Text>
                        </HStack>
                        <Text>
                          {match.match_detail.info.queueId === 6120
                            ? '펭구의 파티'
                            : match.match_detail.info.queueId === 1160
                            ? '더블업'
                            : match.match_detail.info.queueId === 1130
                            ? '초고속 모드'
                            : match.match_detail.info.queueId === 1100
                            ? '랭크'
                            : '일반'}
                        </Text>
                        {/* <Text>{match.match_id}</Text> */}
                        <Text fontSize={'14px'}>{convertRawTimeToMinutesSeconds(participant.time_eliminated)}</Text>
                        <Text>{formatTimestampKST(match.match_detail.info.game_datetime)}</Text>
                      </HStack>
                      {/* 전설이 */}
                      <HStack>
                        <Box width={'70px'} display={'flex'} position={'relative'} mr={5}>
                          <Image
                            border="5px gray solid"
                            borderRadius="full"
                            minW={'70px'}
                            maxW={'70px'}
                            src={`https://cdn.metatft.com/file/metatft/tacticians/${participant.companion.content_ID}.png`}
                            alt="Profile Icon"
                          />
                          <Box
                            position={'absolute'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderRadius={50}
                            border={'3px solid gray'}
                            w={'22px'}
                            h={'22px'}
                            background={'black'}
                            right={2}
                            bottom={0}
                          >
                            <Text as={'b'} fontSize={12} color="gray">
                              {participant.level}
                            </Text>
                          </Box>
                        </Box>

                        {/* 시너지 */}
                        <HStack display={'flex'} minW={'150px'} maxW={'150px'} flexWrap={'wrap'} gap={'1'} mr={3}>
                          {participant.traits
                            .sort((a, b) => b.num_units - a.num_units)
                            .map((trait) => {
                              const synergy = synergiesData?.find((synergy) => synergy.ingameKey === trait.name);

                              return (
                                <>
                                  {/* {console.log('trait.name', trait.name)}
                                  {console.log('trait', trait)} */}
                                  <Synergy key={trait.name} trait={trait} synergy={synergy} />
                                </>
                              );
                            })}
                        </HStack>

                        {/* 증강 */}
                        <Box minW={'30px'} ml={3} mr={7}>
                          {participant.augments.map((augment) => {
                            const findAugment = augmentsData?.find(
                              (findAugment: { ingameKey: string }) => findAugment.ingameKey === augment
                            );

                            return findAugment ? (
                              <Augment
                                key={findAugment.ingameKey}
                                ingameKey={findAugment.ingameKey}
                                name={findAugment.name}
                                desc={findAugment.desc}
                                imageUrl={findAugment.imageUrl}
                              />
                            ) : null;
                          })}
                        </Box>

                        {/* 챔피언 */}
                        <HStack flexWrap={'wrap'}>
                          {participant.units.map((unit) => {
                            const champion = chamiponsData?.find(
                              (champion: { ingameKey: string }) => champion.ingameKey === unit.character_id
                            );

                            return champion ? (
                              <VStack
                                key={unit.character_id}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                gap={1}
                              >
                                <HStack
                                  fontSize={'13px'}
                                  spacing={0}
                                  color={
                                    unit.rarity === 0
                                      ? 'gray'
                                      : unit.rarity === 1
                                      ? 'green'
                                      : unit.rarity === 2
                                      ? 'blue'
                                      : unit.rarity === 4
                                      ? 'purple'
                                      : unit.rarity === 6
                                      ? 'gold'
                                      : 'gray'
                                  }
                                >
                                  {generateStars(unit.tier)}
                                </HStack>
                                <ProfileChampion
                                  championKey={champion.championKey}
                                  ingameKey={champion.ingameKey}
                                  name={champion.name}
                                  imageUrl={champion.imageUrl}
                                  splashUrl={champion.splashUrl}
                                  traits1={champion.traits1}
                                  traits2={champion.traits2}
                                  traits3={champion.traits3}
                                  traits4={champion.traits4}
                                  isHiddenGuide={champion.isHiddenGuide}
                                  isHiddenLanding={champion.isHiddenLanding}
                                  isHiddenTeamBuiler={champion.isHiddenTeamBuiler}
                                  cost1={champion.cost1}
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
                                  attackRange={champion.attackRange}
                                  attackSpeed={champion.attackSpeed}
                                  armor={champion.armor}
                                  magicalResistance={champion.magicalResistance}
                                  recommendItems1={champion.recommendItems1}
                                  recommendItems2={champion.recommendItems2}
                                  recommendItems3={champion.recommendItems3}
                                  recommendItems4={champion.recommendItems4}
                                  recommendItems5={champion.recommendItems5}
                                  skill_name={champion.skill_name}
                                  skill_imageUrl={champion.skill_imageUrl}
                                  skill_desc={champion.skill_desc}
                                  skill_startingMana={champion.skill_startingMana}
                                  skill_skillMana={champion.skill_skillMana}
                                  skill_stats1={champion.skill_stats1}
                                  skill_stats2={champion.skill_stats2}
                                  skill_stats3={champion.skill_stats3}
                                  skill_stats4={champion.skill_stats4}
                                  skill_stats5={champion.skill_stats5}
                                />
                                {/* 유닛 착용 아이템 */}
                                <HStack gap={0}>
                                  {unit.itemNames.length > 0 ? (
                                    unit.itemNames?.map((items: string) => {
                                      const item = itemsData?.find(
                                        (item: { ingameKey: string }) => item.ingameKey === items
                                      );

                                      if (item) {
                                        return (
                                          <Box w={'15px'}>
                                            <Item
                                              key={item.key}
                                              ingameKey={item.ingameKey}
                                              ingameIcon={item.ingameIcon}
                                              name={item.name}
                                              desc={item.desc}
                                              shortDesc={item.shortDesc}
                                              fromDesc={item.fromDesc}
                                              imageUrl={item.imageUrl}
                                              composition1={item.composition1}
                                              composition2={item.composition2}
                                              affectedTraitKey={item.affectedTraitKey}
                                              isFromItem={item.isFromItem}
                                              isNormal={item.isNormal}
                                              isEmblem={item.isEmblem}
                                              isSupport={item.isSupport}
                                              isArtifact={item.isArtifact}
                                              isRadiant={item.isRadiant}
                                              isUnique={item.isUnique}
                                              isNew={item.isNew}
                                            />
                                          </Box>
                                        );
                                      }
                                    })
                                  ) : (
                                    <Box width={'15px'} height={'15px'} />
                                  )}
                                </HStack>
                              </VStack>
                            ) : null;
                          })}
                        </HStack>
                      </HStack>
                    </VStack>
                  </Box>
                );
              }
            })}
        </Box>
      </Container>
    </VStack>
  );
}
