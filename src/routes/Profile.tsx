import {Box, Button, Container, HStack, Heading, Input, Image, Text, VStack} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useLocation, useParams} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import ILeagueEntryDTO from '../components/types';
import IProfileMiniBox from '../components/types';
import {getLeagueEntries, getMatchesByPuuid, getSummonerData} from '../api';

interface IProfile {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

interface ICompanion {
  content_ID: string;
  item_ID: number;
  skin_ID: number;
  species: string;
}

interface IMissions {
  Assists: number;
  DamageDealt: number;
  DamageDealtToObjectives: number;
  DamageDealtToTurrets: number;
  DamageTaken: number;
  Deaths: number;
  DoubleKills: number;
  GoldEarned: number;
  GoldSpent: number;
  InhibitorsDestroyed: number;
  KillingSprees: number;
  Kills: number;
  LargestKillingSpree: number;
  LargestMultiKill: number;
  MagicDamageDealt: number;
  MagicDamageDealtToChampions: number;
  MagicDamageTaken: number;
  NeutralMinionsKilledTeamJungle: number;
  PentaKills: number;
  PhysicalDamageDealt: number;
  PhysicalDamageDealtToChampions: number;
  PhysicalDamageTaken: number;
  PlayerScore0: number;
  PlayerScore1: number;
  PlayerScore2: number;
  PlayerScore3: number;
  PlayerScore4: number;
  PlayerScore5: number;
  PlayerScore6: number;
  PlayerScore9: number;
  PlayerScore10: number;
  PlayerScore11: number;
  QuadraKills: number;
  Spell1Casts: number;
  Spell2Casts: number;
  Spell3Casts: number;
  Spell4Casts: number;
  SummonerSpell1Casts: number;
  TimeCCOthers: number;
  TotalDamageDealtToChampions: number;
  TotalMinionsKilled: number;
  TripleKills: number;
  TrueDamageDealt: number;
  TrueDamageDealtToChampions: number;
  TrueDamageTaken: number;
  UnrealKills: number;
  VisionScore: number;
  WardsKilled: number;
}

interface Itraits {
  name: string;
  num_units: number;
  style: number;
  tier_current: number;
  tier_total: number;
}

interface IUnits {
  character_id: string;
  itemNames: string[] | null;
  name: string | null;
  rarity: number;
  tier: number;
}

interface IParticipants {
  augments: string[];
  companion: ICompanion;
  gold_left: number;
  last_round: number;
  level: number;
  missions: IMissions;
  placement: number;
  players_eliminated: number;
  puuid: string;
  time_eliminated: Float32Array;
  total_damage_to_players: number;
  traits: Itraits[];
  units: IUnits[];
}

interface IInfo {
  endOfGameResult: string;
  gameCreation: number;
  gameId: number;
  game_datetime: number;
  game_length: number;
  game_version: string;
  participants: IParticipants[];
  mapId: number;
  queueId: number;
  queue_id: number;
  tft_game_type: string;
  tft_set_core_name: string;
  tft_set_number: number;
}

interface IMetaDate {
  data_version: string;
  match_id: string;
  participants: string[];
}

interface IMatch {
  info: IInfo;
  metadata: IMetaDate;
}

interface IProfileId {
  puuid: string;
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export default function Profile() {
  const {gameName, tagLine} = useParams();
  const {data: summonerData, isLoading: isSummonerDataLoading} = useQuery<IProfileMiniBox>({
    queryKey: ['', gameName, tagLine],
    queryFn: getSummonerData,
  });
  const summonerId = summonerData?.summonerId;
  const puuid = summonerData?.puuid;
  const {data: leagueEntryData, isLoading: isLeagueEntryDataLoading} = useQuery<ILeagueEntryDTO>({
    queryKey: ['', summonerId],
    queryFn: getLeagueEntries,
  });
  const {data: matchesByPuuidData, isLoading: ismatchByPuuidDataLoading} = useQuery<ILeagueEntryDTO>({
    queryKey: ['', puuid],
    queryFn: getMatchesByPuuid,
  });

  const location = useLocation();
  const {name, matches} = location.state || {}; // 기본값 설정

  // console.log('Name:', name);
  // console.log('Matches:', matches);
  const [matchData, setMatchData] = useState<IMatch[]>([]);

  // const handleSearch = async () => {
  //   try {
  //     const responses = await Promise.all(
  //       matches.map(async (match: any) => {
  //         const response = await fetch(
  //           `http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${name}/${match.match_id}`,
  //           {
  //             method: 'GET',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //           }
  //         );
  //         return response.json();
  //       })
  //     );
  //     if (responses) {
  //       setMatchData(responses);
  //       console.log(matchData);
  //     } else {
  //       const responses = await Promise.all(
  //         matches.map(async (match: any) => {
  //           const response = await fetch(
  //             `http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${name}/${match.match_id}`,
  //             {
  //               method: 'POST',
  //               headers: {
  //                 'Content-Type': 'application/json',
  //               },
  //               body: JSON.stringify({summonerName: name, matchId: match.match_id}),
  //             }
  //           );
  //           return response.json();
  //         })
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <VStack>
      <Container maxW={'container.xl'}>
        <HStack color={'white'}>
          <Image
            borderStyle={'10px black solid'}
            borderRadius={'full'}
            w={'100px'}
            h={'100px'}
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${summonerData?.profileIconId}.png`}
          />
          <VStack>
            <HStack>
              <Text>{summonerData?.gameName}</Text>
              <Text>{summonerData?.tagLine}</Text>
            </HStack>
            <HStack>
              <Text>{leagueEntryData?.tier}</Text>
              <Text>{leagueEntryData?.rank}</Text>
              <Text>{leagueEntryData?.leaguePoints}</Text>
            </HStack>
            <HStack>
              <Text>승 - {leagueEntryData?.wins}</Text>
              <Text>패 - {leagueEntryData?.losses}</Text>
            </HStack>
          </VStack>
        </HStack>
        <Box>
          <Text fontSize={'20px'} as={'b'} color={'#dca555'}>
            유저 전적
          </Text>
        </Box>
        <Box>
          <Box>
            <HStack>
              <Text color={'white'}>매치 데이터:</Text>
              {/* <Button type="button" onClick={handleSearch}> */}
              <Button type="button">
                <FaSearch />
              </Button>
            </HStack>
            {matchData.map((match) => (
              <Box>
                {match.metadata.participants.map((participant, index) => (
                  <>
                    <Box mb={10} border={'1px solid white'} p={5}>
                      {/* 증강 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>증강</Text>
                        {match.info.participants[index].augments.map((augment) => (
                          <Text color={'white'}>{augment}</Text>
                        ))}
                      </Box>
                      {/* 전설이 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>전설이: {match.info.participants[index].companion.content_ID}</Text>
                      </Box>
                      {/* 남은 골드 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>남은 골드: {match.info.participants[index].gold_left}</Text>
                      </Box>
                      {/* 레벨 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>레벨: {match.info.participants[index].level}</Text>
                      </Box>
                      {/* 등수 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>등수: {match.info.participants[index].placement}</Text>
                      </Box>
                      {/* 처치한 플레이어 수 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>
                          처치한 플레이어 수: {match.info.participants[index].players_eliminated}
                        </Text>
                      </Box>
                      {/* 플레이어에게 가한 대미지 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>
                          플레이어에게 가한 대미지: {match.info.participants[index].total_damage_to_players}
                        </Text>
                      </Box>
                      {/* 시너지 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>시너지</Text>
                        {match.info.participants[index].traits.map((trait) => (
                          <Text color={'white'}>
                            {trait.name}, {trait.num_units}, {trait.tier_current}, {trait.tier_total}
                          </Text>
                        ))}
                      </Box>
                      {/* 사용한 챔피언 */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>챔피언</Text>
                        {match.info.participants[index].units.map((champion) => (
                          <>
                            <Box border={'1px solid white'} p={3}>
                              <Text color={'white'}>
                                {champion.tier}성 {champion.character_id}
                              </Text>
                              {/* 아이템 목록 */}
                              <Text color={'white'}>아이템 목록:</Text>
                              {champion.itemNames?.map((item) => (
                                <Text color={'white'}>{item}</Text>
                              ))}
                            </Box>
                          </>
                        ))}
                      </Box>
                      {/* 유저 puuid */}
                      <Box border={'1px solid white'} p={3}>
                        <Text color={'white'}>
                          유저 puuid: <br></br>
                        </Text>
                      </Box>
                    </Box>
                  </>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </VStack>
  );
}
