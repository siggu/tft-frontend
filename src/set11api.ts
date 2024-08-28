import Cookie from 'js-cookie';
import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/v1/' : 'https://backend.reroll.lol/api/v1/',
  withCredentials: true, // 백엔드 서버로부터 쿠키를 허용
});
// 증강
export const getSet11Augments = () => instance.get('augments/set11').then((response) => response.data);

// 챔피언
export const getSet11Champions = () => instance.get('champions/set11').then((response) => response.data);

export const getSet11Champion = ({ queryKey }: QueryFunctionContext) => {
  const [_, championPk] = queryKey;
  return instance.get(`champions/set11/${championPk}`).then((response) => response.data);
};

// 추천메타
export const getSet11Comps = () => instance.get('comps/set11').then((response) => response.data);

// 아이템
export const getSet11Items = () => instance.get('items/set11').then((response) => response.data);

// 시너지
export const getSet11Synergies = () => instance.get('synergies/set11').then((response) => response.data);

export const getSet11Encounters = () => instance.get('encounters/set11').then((response) => response.data);

export const getSet11Portals = () => instance.get('portals/set11').then((response) => response.data);

export const postSummonerData = ({ queryKey }: QueryFunctionContext) => {
  const [_, gameName, tagLine] = queryKey;
  const data = { gameName, tagLine }; // Create an object with the required data
  return instance.post('profiles/fetch-puuid', data).then((response) => response.data);
};

export const getSet11SummonerData = ({ queryKey }: QueryFunctionContext) => {
  const [_, gameName, tagLine] = queryKey;
  return instance.get(`profiles/fetch-puuid/${gameName}/${tagLine}`).then((response) => response.data);
};
export async function fetchMatchData(summonerName: string | undefined, matchId: string | undefined) {
  if (summonerName === undefined) throw new Error('summonerName should be string!');
  if (matchId === undefined) throw new Error('matchId should be string!');
  const url = `profiles/matches-by-puuid/${encodeURIComponent(summonerName)}/${encodeURIComponent(matchId)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // JSON 형식의 응답 반환
  } catch (error) {
    // console.error('Error fetching match data:', error);
    throw error; // 오류를 다시 throw하여 상위 컴포넌트에서 처리할 수 있도록 함
  }
}

export const getSet11LeagueEntries = ({ queryKey }: QueryFunctionContext) => {
  const [_, summonerId] = queryKey;
  return instance.get(`profiles/entry/${summonerId}`).then((response) => response.data);
};

export const getSet11MatchesByPuuid = ({ queryKey }: QueryFunctionContext) => {
  const [_, puuid] = queryKey;
  return instance.get(`profiles/matches-by-puuid/${puuid}`).then((response) => response.data);
};
export const getSet11MatchDetailsByMatchID = ({ queryKey }: QueryFunctionContext) => {
  const [_, matchID] = queryKey;
  return instance.get(`profiles/matchDetails/${matchID}`).then((response) => response.data);
};

export const getSet11MetaDecks = () => instance.get('comps/set11/meta/decks').then((response) => response.data);

export const postSet11MatchData = ({ queryKey }: QueryFunctionContext) => {
  const [_, puuid] = queryKey;
  return instance
    .post(
      `profiles/matches-by-puuid/${puuid}`,
      {}, // data가 없으면 빈 객체를 전달
      {
        headers: {
          'X-CSRFToken': Cookie.get('csrftoken') || '',
        },
      }
    )
    .then((response) => response.data);
};

export const deleteSet11MatchData = ({ queryKey }: QueryFunctionContext) => {
  const [_, puuid] = queryKey;
  return instance
    .delete(`profiles/matches-by-puuid/${puuid}`, {
      headers: {
        'X-CSRFToken': Cookie.get('csrftoken') || '',
      },
    })
    .then((response) => response.data);
};
