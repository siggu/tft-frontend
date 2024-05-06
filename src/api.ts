import {QueryFunctionContext} from '@tanstack/react-query';
import axios from 'axios';
import RIOT_API_KEY from './constants';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});
// 증강
export const getAugments = () => instance.get('augments/').then((response) => response.data);

// 챔피언
export const getChampions = () => instance.get('champions/').then((response) => response.data);

export const getChampion = ({queryKey}: QueryFunctionContext) => {
  const [_, championPk] = queryKey;
  return instance.get(`champions/${championPk}`).then((response) => response.data);
};

// 추천메타
export const getComps = () => instance.get('comps/').then((response) => response.data);

// 아이템
export const getItems = () => instance.get('items/').then((response) => response.data);

// 시너지
export const getSynergies = () => instance.get('synergies').then((response) => response.data);

export const getEncounters = () => instance.get('encounters/').then((response) => response.data);

export const getPortals = () => instance.get('portals/').then((response) => response.data);

export const getSummonerData = ({queryKey}: QueryFunctionContext) => {
  const [_, summonerName] = queryKey;
  return instance.get(`profiles/matches-by-puuid/${summonerName}`).then((response) => response.data);
};
// api.js 파일

export async function fetchMatchData(summonerName: string | undefined, matchId: string | undefined) {
  if (summonerName === undefined) throw new Error('summonerName should be string!');
  if (matchId === undefined) throw new Error('matchId should be string!');
  const url = `http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${encodeURIComponent(
    summonerName
  )}/${encodeURIComponent(matchId)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // JSON 형식의 응답 반환
  } catch (error) {
    console.error('Error fetching match data:', error);
    throw error; // 오류를 다시 throw하여 상위 컴포넌트에서 처리할 수 있도록 함
  }
}
