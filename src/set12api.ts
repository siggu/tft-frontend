import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
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
