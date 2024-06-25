import { Box, Button, Container, HStack, Heading, Input, Image, Text, VStack, SkeletonText } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import ILeagueEntryDTO from '../components/types';
import IProfileMiniBox from '../components/types';
import IMatch from '../components/types';
import { getLeagueEntries, getMatchesByPuuid, getSummonerData, getSynergies } from '../api';
import ISynergy from '../components/types';

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

  const location = useLocation();
  const { name, matches } = location.state || {}; // 기본값 설정

  // console.log('Name:', name);
  // console.log('Matches:', matches);
  const [matchData, setMatchData] = useState<IMatch[]>([]);

  return (
    <VStack>
      <Container maxW="container.xl">
        <HStack color="white">
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

        <Box>
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
                      <Text color="white">matchID: {match.match_id}</Text>
                      <Text color="white">등수: {participant.placement}</Text>
                    </HStack>
                    {/* 전설이 */}
                    <HStack>
                      <Text color="white">전설이: {participant.companion.species}</Text>
                      <Image
                        border="10px black solid"
                        borderRadius="full"
                        w="100px"
                        h="100px"
                        src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/profileicon/${participant.companion.skin_ID}.png`}
                        alt="Profile Icon"
                      />
                      {/* 시너지 */}
                      {participant.traits
                        .sort((a, b) => b.num_units - a.num_units)
                        .map((trait) => {
                          const synergy = synergiesData?.find((synergy) => synergy.ingameKey === trait.name);
                          return (
                            <HStack key={trait.name}>
                              {synergy && <Image src={synergy.imageUrl} alt={synergy.name} w="20px" h="20px" />}
                              <Text color="white">{trait.num_units}</Text>
                            </HStack>
                          );
                        })}
                      <Text color="white">레벨: {participant.level}</Text>
                      <Text color="white">남은 골드: {participant.gold_left}</Text>
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
