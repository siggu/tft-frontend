import {Box, Button, Container, Heading, Input, Text, VStack} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {getItems, getMatchesByMatchid, getMatchesByPuuid, getSummonerInfo, getSummonerProfile} from '../api';

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
  const {profileName} = useParams<{profileName: string | undefined}>();
  const {data: summonerpuuid, isLoading: isSummonerpuuidLoading} = useQuery<IProfile>({
    queryKey: ['profile', profileName],
    queryFn: () => getSummonerProfile(profileName || ''),
  });
  const {data: summonerid, isLoading: isSummoneridLoading} = useQuery<IProfileId[]>({
    queryKey: ['summonerid', summonerpuuid?.id],
    queryFn: () => getSummonerInfo(summonerpuuid?.id || ''),
  });
  const [matchData, setMatchData] = useState<IMatch[]>([]);

  useEffect(() => {
    if (summonerpuuid && profileName) {
      const fetchMatchData = async () => {
        const puuid = summonerpuuid.puuid;
        try {
          const matchIds = await getMatchesByPuuid(puuid);
          const matches = await Promise.all(
            matchIds.slice(0, 20).map((matchId: string) => getMatchesByMatchid(matchId))
          );
          setMatchData(matches);
        } catch (error) {
          console.error('Error fetching match data:', error);
        }
      };

      fetchMatchData();
    }
  }, [summonerpuuid, profileName]);

  const [summonerName, setSummonerName] = useState<string>('');

  const handleSummonerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSummonerName(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/profiles/fetch-puuid/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({summonerName: summonerName}),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('error fetching data', error);
    }
  };

  return (
    <VStack>
      <Container maxW={'container.xl'}>
        <Box>
          <Input color={'white'} type="text" value={summonerName} onChange={handleSummonerNameChange} />
          <Button onClick={handleSubmit}>Get puuid</Button>
        </Box>
        <Box>
          <Text fontSize={'20px'} as={'b'} color={'#dca555'}>
            유저 전적
          </Text>
        </Box>
        <Box>
          <Box>
            {summonerid?.map((id) => (
              <>
                <Text color={'white'}>
                  티어: {id.tier} {id.rank}
                </Text>
                <Text color={'white'}>점수: {id.leaguePoints}</Text>
                <Text color={'white'}>승리: {id.wins}</Text>
                <Text color={'white'}>패배: {id.losses}</Text>
              </>
            ))}
            <Text color={'white'}>매치 데이터:</Text>
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
