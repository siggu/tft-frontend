import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/api/v1/'
      : 'https://tft-backend-h1wi.onrender.com/api/v1/',
});

// 증강
export const getSet12Augments = () => instance.get('augments/set12').then((response) => response.data);

// 챔피언
export const getSet12Champions = () => instance.get('champions/set12').then((response) => response.data);

export const getSet12Champion = ({ queryKey }: QueryFunctionContext) => {
  const [_, championPk] = queryKey;
  return instance.get(`champions/set12/${championPk}`).then((response) => response.data);
};

// 아이템
export const getSet12Items = () => instance.get('items/set12').then((response) => response.data);

// 포탈
export const getSet12Portals = () => instance.get('portals/set12').then((response) => response.data);

// 시너지
export const getSet12Synergies = () => instance.get('synergies/set12').then((response) => response.data);
export const getSet12LeagueEntries = ({ queryKey }: QueryFunctionContext) => {
  const [_, summonerId] = queryKey;
  return instance.get(`profiles/entry/${summonerId}`).then((response) => response.data);
};
export const getSet12MatchesByPuuid = ({ queryKey }: QueryFunctionContext) => {
  const [_, puuid] = queryKey;
  return instance.get(`profiles/matches-by-puuid/${puuid}`).then((response) => response.data);
};

export const getSet12SummonerData = ({ queryKey }: QueryFunctionContext) => {
  const [_, gameName, tagLine] = queryKey;
  return instance.get(`profiles/fetch-puuid/${gameName}/${tagLine}`).then((response) => response.data);
};

export const getSet12MetaDecks = () => instance.get('comps/set12/meta/decks').then((response) => response.data);
