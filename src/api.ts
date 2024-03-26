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

// 아이템 - 만드는중
export const getItems = () => instance.get('items/').then((response) => response.data);

// 아이템 레시피
export const getItemRecipies = () => instance.get('items/recipies').then((response) => response.data);

// 시너지-계열
export const getSynergyOrigins = () => instance.get('synergies/origin').then((response) => response.data);

// 시너지-직업
export const getSynergyJobs = () => instance.get('synergies/job').then((response) => response.data);

export const getEncounters = () => instance.get('encounters/').then((response) => response.data);

export const getPortals = () => instance.get('portals/').then((response) => response.data);

// 마스터 유저
export const getMasterLeague = () => {
  const apiKey = RIOT_API_KEY;
  const url = `https://kr.api.riotgames.com/tft/league/v1/master?queue=RANKED_TFT&api_key=${apiKey}`;

  return axios.get(url).then((response) => response.data);
};

// 유저 puuid 추출
export const getSummonerProfile = (profileName: string | undefined) => {
  const apiKey = RIOT_API_KEY;
  const url = `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${profileName}?api_key=${apiKey}`;

  return axios.get(url).then((response) => response.data);
};

// 유저 20 게임 정보 추출
export const getMatchesByPuuid = (puuid: string) => {
  const apiKey = RIOT_API_KEY;
  const url = `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=3&api_key=${apiKey}`;

  return axios.get(url).then((response) => response.data);
};

// 유저 특정 게임 정보 추출
export const getMatchesByMatchid = (matchid: string) => {
  const apiKey = RIOT_API_KEY;
  const url = `https://asia.api.riotgames.com/tft/match/v1/matches/${matchid}?api_key=${apiKey}`;

  return axios.get(url).then((response) => response.data);
};
