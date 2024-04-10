import {Box, Button, Container, HStack, Heading, Input, Text, VStack} from '@chakra-ui/react';
import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {getSummonerData, fetchMatchData} from '../api';
interface IMatchDataByPuuid {
  id: number;
  match_id: string;
  summoner_puuid: string;
}
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
interface IMatchRoot {
  match_detail: IMatch;
  match_id: string;
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
export default function ProfileBackendTest() {
  const {summonerName} = useParams();
  const {data: summonerMatchData} = useQuery<IMatchDataByPuuid[]>({
    queryKey: ['summoner', summonerName],
    queryFn: getSummonerData,
  });
  const [matchData, setMatchData] = useState<IMatchRoot[]>([]);

  useEffect(() => {
    const fetchMatchDataForAllIds = async () => {
      try {
        if (summonerMatchData) {
          console.log('summonerMatchData!', summonerMatchData);
          const responses = await Promise.all(
            summonerMatchData.map(async (matchData) => {
              const response = await fetchMatchData(summonerName, matchData.match_id);
              return response;
            })
          );
          console.log('responses', responses); // 각 매치에 대한 데이터를 확인하기 위해 콘솔에 출력
          setMatchData(responses);
        }
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    if (summonerMatchData) {
      fetchMatchDataForAllIds(); // 컴포넌트가 마운트될 때 데이터를 가져옴
    }
  }, [summonerMatchData, summonerName]); // summonerMatchData와 summonerName이 변경될 때마다 호출

  console.log('matchData!!!', matchData);
  return (
    <VStack>
      <Container maxW={'container.xl'}>
        <Box>
          <Text fontSize={'20px'} as={'b'} color={'#dca555'}>
            유저 전적 테스트
          </Text>
        </Box>
        <Box>
          <Box>
            <HStack>
              <Text color={'white'}>매치 데이터 테스트:</Text>
              <Button type="button">
                <FaSearch />
              </Button>
            </HStack>
          </Box>
        </Box>
      </Container>
      <Text color={'white'}>전적내용 테스트</Text>
      {/* matchData를 사용하여 UI에 매치 데이터 표시 */}
      {matchData.map((data, index) => (
        <Box key={index} border={'white solid 1px'} color={'white'}>
          <Text>{data.match_detail.info.participants[0].augments[0]}</Text>
          <Text>{data.match_detail.info.participants[0].augments[1]}</Text>
          <Text>{data.match_detail.info.participants[0].augments[2]}</Text>
          <Text>{data.match_detail.info.participants[1].augments[0]}</Text>
          <Text>{data.match_detail.info.participants[1].augments[1]}</Text>
          <Text>{data.match_detail.info.participants[1].augments[2]}</Text>
          <Text>{data.match_detail.info.participants[2].augments[0]}</Text>
          <Text>{data.match_detail.info.participants[2].augments[1]}</Text>
          <Text>{data.match_detail.info.participants[2].augments[2]}</Text>
        </Box>
      ))}
    </VStack>
  );
}
