import {Box, Text} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {getMatchesByMatchid, getMatchesByPuuid, getSummonerProfile} from '../api';

interface IProfile {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

interface IInfo {
  endOfGameResult: string;
  gameCreation: number;
  gameId: number;
  game_datetime: number;
  game_length: number;
  game_version: string;
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
  participaint: string[];
}

interface IMatch {
  info: IInfo;
  metadata: IMetaDate;
}

export default function Profile() {
  // 지연 함수 정의
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const {profileName} = useParams<{profileName: string | undefined}>();
  const {data: profileData, isLoading: isProfileDataLoading} = useQuery<IProfile>({
    queryKey: ['profile', profileName],
    queryFn: () => getSummonerProfile(profileName),
  });

  const [matchData, setMatchData] = useState<IMatch[]>([]);

  useEffect(() => {
    // 페이지를 새로고침하려면 profileName이 변경될 때마다 실행
    setMatchData([]); // 데이터를 초기화하여 이전 검색 결과를 지움
    if (profileData) {
      const fetchMatchData = async () => {
        const puuid = profileData.puuid;
        try {
          const matchIds = await getMatchesByPuuid(puuid);
          //   const interval = 1000; // 5초 간격으로 요청 보냄 (단위: 밀리초)
          for (let i = 0; i < matchIds.length && i < 20; i++) {
            // await delay(interval); // 요청 간격만큼 대기
            const match = await getMatchesByMatchid(matchIds[i]);
            setMatchData((prevMatchData) => [...prevMatchData, match]);
          }
        } catch (error) {
          console.error('Error fetching match data:', error);
        }
      };

      fetchMatchData();
    }
  }, [profileData, profileName]); // profileName이 변경될 때마다 실행

  console.log(matchData);

  return (
    <Box>
      <Text color={'white'}>유저 전적</Text>
      <Box>
        <Box>
          <Text color={'white'}>{profileData?.name}</Text>
          <Text color={'white'}>{profileData?.summonerLevel}</Text>
          <Text color={'white'}>매치 데이터:</Text>
          {matchData?.map((match) => (
            <Text color={'white'}>{match?.info.gameId}</Text>
          ))}
          {/* <Text color={'white'}>{JSON.stringify(matchData)}</Text> */}
        </Box>
      </Box>
    </Box>
  );
}
