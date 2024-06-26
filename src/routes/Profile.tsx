import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Image,
  Text,
  VStack,
  SkeletonText,
  Circle,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import ILeagueEntryDTO from '../components/types';
import IProfileMiniBox from '../components/types';
import IMatch from '../components/types';
import { getAugments, getLeagueEntries, getMatchesByPuuid, getSummonerData, getSynergies } from '../api';
import ISynergy from '../components/types';
import IAugments from '../components/types';
import { getTraitBackgroundImageUrl } from '../traitColors';

export default function Profile() {
  const { gameName, tagLine } = useParams();
  const { data: summonerData, isLoading: isSummonerDataLoading } = useQuery<IProfileMiniBox>({
    queryKey: ['', gameName, tagLine],
    queryFn: getSummonerData,
  });
  const summonerId = summonerData?.summonerId;
  const puuid = summonerData?.puuid;
  const { data: leagueEntryData, isLoading: isLeagueEntryDataLoading } = useQuery<ILeagueEntryDTO>({
    queryKey: ['', summonerId],
    queryFn: getLeagueEntries,
  });
  const { data: matchesByPuuidData, isLoading: ismatchByPuuidDataLoading } = useQuery<IMatch[]>({
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

  const location = useLocation();
  const { name, matches } = location.state || {}; // 기본값 설정

  // console.log('Name:', name);
  // console.log('Matches:', matches);
  const [matchData, setMatchData] = useState<IMatch[]>([]);

  const convertRawTimeToMinutesSeconds = (rawTime: any) => {
    const totalSeconds = Math.floor(rawTime);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}분 ${seconds}초`;
  };

  return (
    <VStack>
      <Container maxW="container.xl">
        <HStack textColor={'white'}>
          <Image
            border="10px black solid"
            borderRadius="full"
            w="100px"
            h="100px"
            src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/profileicon/${summonerData?.profileIconId}.png`}
            alt="Profile Icon"
          />
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

        <Box textColor={'white'}>
          {matchesByPuuidData?.map((match: IMatch) => (
            <Box key={match.match_id} p={4} borderWidth={1} borderRadius={8} borderColor="gray.700" mb={4}>
              {match.match_detail.info.participants
                .slice()
                .sort((a, b) => a.placement - b.placement)
                .map((participant) => (
                  <VStack
                    key={participant.puuid}
                    alignItems="flex-start"
                    pl={4}
                    pt={2}
                    borderBottom="1px"
                    borderColor="gray.600"
                    mb={2}
                  >
                    {/* 등수 */}
                    <HStack>
                      <Text>matchID: {match.match_id}</Text>
                      <Text>등수: {participant.placement}</Text>
                      <Text>게임 시간: {convertRawTimeToMinutesSeconds(participant.time_eliminated)}</Text>
                    </HStack>
                    {/* 전설이 */}
                    <HStack>
                      <Box position={'relative'} mr={3}>
                        <Image
                          border="5px gray solid"
                          borderRadius="full"
                          w="70px"
                          h="70px"
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
                          right={0}
                          bottom={0}
                        >
                          <Text as={'b'} fontSize={12} color="gray">
                            {participant.level}
                          </Text>
                        </Box>
                      </Box>
                      {/* 시너지 */}
                      <HStack mr={3} w={'170px'} flexWrap={'wrap'} gap={'1'}>
                        {participant.traits
                          .sort((a, b) => b.num_units - a.num_units)
                          .map((trait) => {
                            const synergy = synergiesData?.find((synergy) => synergy.ingameKey === trait.name);
                            const backgroundImageUrl = getTraitBackgroundImageUrl(trait.name, trait.num_units);

                            if (!backgroundImageUrl) return undefined; // 배경 이미지가 없으면 null 반환

                            return backgroundImageUrl ? (
                              <HStack key={trait.name} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Image src={backgroundImageUrl} w="30px" h="30px" />
                                {synergy && (
                                  <Image
                                    position={'absolute'}
                                    src={synergy.blackImageUrl}
                                    alt={synergy.name}
                                    w="20px"
                                    h="20px"
                                  />
                                )}
                              </HStack>
                            ) : null;
                          })}
                      </HStack>

                      {/* 증강 */}
                      <Box>
                        {participant.augments.map((participant_augment) => {
                          const augment = augmentsData?.find((augment) => augment.ingameKey === participant_augment);
                          return (
                            <HStack key={participant_augment}>
                              {augment && <Image src={augment.imageUrl} alt={augment.name} w={'30px'} h={'30px'} />}
                            </HStack>
                          );
                        })}
                      </Box>
                      {/* <Text>남은 골드: {participant.gold_left}</Text> */}
                    </HStack>
                  </VStack>
                ))}
            </Box>
          ))}
        </Box>
      </Container>
    </VStack>
  );
}
