import { Box, Container, HStack, Image, Text, VStack, SkeletonText, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { FaSearch, FaStar } from 'react-icons/fa';
import ILeagueEntryDTO from '../components/types';
import IProfileMiniBox from '../components/types';
import IMatch from '../components/types';
import {
  getAugments,
  getChampions,
  getItems,
  getLeagueEntries,
  getMatchesByPuuid,
  getSummonerData,
  getSynergies,
} from '../api';
import ISynergy from '../components/types';
import IAugments from '../components/types';
import { getTraitBackgroundImageUrl } from '../traitColors';
import ProfileChampion from './../components/ProfileChampion';
import Item from '../components/Item';
import Augment from '../components/Augment';
import Synergy from '../components/Synergy';
import axios from 'axios';

export default function Profile() {
  const { gameName, tagLine } = useParams();
  const {
    data: summonerData,
    isLoading: isSummonerDataLoading,
    refetch: refetchSummonerData,
  } = useQuery<IProfileMiniBox>({
    queryKey: ['', gameName, tagLine],
    queryFn: getSummonerData,
  });
  const summonerId = summonerData?.summonerId;
  const puuid = summonerData?.puuid;
  const {
    data: leagueEntryData,
    isLoading: isLeagueEntryDataLoading,
    refetch: refetchLeagueEntries,
  } = useQuery<ILeagueEntryDTO>({
    queryKey: ['', summonerId],
    queryFn: getLeagueEntries,
  });
  const {
    data: matchesByPuuidData,
    isLoading: ismatchByPuuidDataLoading,
    refetch: refetchMatchesByPuuid,
  } = useQuery<IMatch[]>({
    queryKey: ['', puuid],
    queryFn: getMatchesByPuuid,
  });
  const { data: synergiesData, isLoading: isSynergiesDataLoading } = useQuery<ISynergy[]>({
    queryKey: ['synergy'],
    queryFn: getSynergies,
  });
  const { data: augmentsData, isLoading: isAugmentsDataLoading } = useQuery<IAugments[]>({
    queryKey: ['augment'],
    queryFn: getAugments,
  });
  const { data: chamiponsData, isLoading: isChampionsDataLoading } = useQuery({
    queryKey: ['champions'],
    queryFn: getChampions,
  });
  const { data: itemsData, isLoading: isItemsDataLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
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

  const extractDate = (inputString: string) => {
    // 정규 표현식을 사용하여 날짜 형식을 찾습니다.
    const datePattern = /\b(\w{3} \d{1,2} \d{4})\b/;
    const match = inputString.match(datePattern);

    // 날짜가 발견되면 반환하고, 그렇지 않으면 빈 문자열을 반환합니다.
    return match ? match[0] : '';
  };

  const formatDate = (dateString: string): string => {
    // 월 이름을 숫자로 변환합니다.
    const months: { [key: string]: string } = {
      Jan: '1월',
      Feb: '2월',
      Mar: '3월',
      Apr: '4월',
      May: '5월',
      Jun: '6월',
      Jul: '7월',
      Aug: '8월',
      Sep: '9월',
      Oct: '10월',
      Nov: '11월',
      Dec: '12월',
    };

    const [month, day] = dateString.split(' ');
    return `${months[month]} ${day}일`;
  };

  const handleUpdateClick = async () => {
    try {
      // DELETE 요청으로 전적 데이터 삭제
      const deleteResponse = await axios.delete(`http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${puuid}`);
      if (deleteResponse.status === 200) {
        alert('전적 데이터가 성공적으로 삭제되었습니다.');
      } else {
        alert('전적 데이터 삭제 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('전적 데이터 업데이트 중 오류 발생:', error);
      // alert('전적 데이터 업데이트 중 오류가 발생했습니다.');
    }
    window.location.reload();
  };
  const formatTimestampKST = (timestamp: number): string => {
    const date = new Date(timestamp);
    const kstOffset = 9 * 60 * 60 * 1000; // 한국 시간대는 UTC+9
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

  return (
    <VStack>
      <Container maxW="container.xl">
        <HStack flexWrap={'wrap'} textColor={'white'}>
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

        <Box>
          <Text fontSize="20px" as="b" color="#dca555">
            유저 전적
          </Text>
        </Box>

        <Box>
          <Button colorScheme="blue" onClick={handleUpdateClick}>
            전적 업데이트
          </Button>
        </Box>

        <Box textColor={'white'}>
          {matchesByPuuidData
            ?.filter((match) => match.match_detail.metadata.participants)
            .map((match: IMatch) => {
              const participant = match.match_detail.info.participants.find(
                (participant) => participant.puuid === puuid
              );

              if (!participant) return null;
              return (
                <Box key={match.match_id} p={4} borderWidth={1} borderRadius={8} borderColor="gray.700" mb={4}>
                  <VStack alignItems="flex-start">
                    {/* 등수 */}
                    <HStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      {/* <Text>matchID: {match.match_id}</Text> */}
                      <HStack
                        fontSize={'20px'}
                        gap={0}
                        color={participant.placement <= 1 ? 'gold' : participant.placement <= 4 ? 'white' : 'gray.600'}
                      >
                        <Text>#</Text>
                        <Text>{participant.placement}</Text>
                      </HStack>
                      <Text fontSize={'14px'}>{convertRawTimeToMinutesSeconds(participant.time_eliminated)}</Text>
                      <Text>{formatTimestampKST(match.match_detail.info.game_datetime)}</Text>
                    </HStack>
                    {/* 전설이 */}
                    <HStack>
                      <Box width={'70px'} display={'flex'} position={'relative'} mr={3}>
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
                      <HStack display={'flex'} minW={'150px'} maxW={'150px'} flexWrap={'wrap'} gap={'1'}>
                        {participant.traits
                          .sort((a, b) => b.num_units - a.num_units)
                          .map((trait) => {
                            const synergy = synergiesData?.find((synergy) => synergy.ingameKey === trait.name);

                            return <Synergy key={trait.name} trait={trait} synergy={synergy} />;
                          })}
                      </HStack>

                      {/* 증강 */}
                      <Box minW={'30px'} ml={3} mr={5}>
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
                                        <Box w={'20px'}>
                                          <Item
                                            key={item.ingameKey}
                                            ingameKey={item.ingameKey}
                                            name={item.name}
                                            description={item.description}
                                            shortDesc={item.shortDesc}
                                            imageUrl={item.imageUrl}
                                            composition1={item.composition1}
                                            composition2={item.composition2}
                                            isFromItem={item.isFromItem}
                                            isNormal={item.isNormal}
                                            isEmblem={item.isEmblem}
                                            isSupport={item.isSupport}
                                            isArtifact={item.isArtifact}
                                            isRadiant={item.isRadiant}
                                            isUnique={item.isUnique}
                                            isNew={item.isNew}
                                            tag1={item.tag1}
                                            tag2={item.tag2}
                                            tag3={item.tag3}
                                          />
                                        </Box>
                                      );
                                    }
                                  })
                                ) : (
                                  <Box width={'20px'} height={'20px'} />
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
            })}
        </Box>
      </Container>
    </VStack>
  );
}
