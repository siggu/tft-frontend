import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
});
// 증강
export const getAugments = () => instance.get('augments/').then((response) => response.data);

// 챔피언
export const getChampions = () => instance.get('champions/').then((response) => response.data);

export const getChampion = ({ queryKey }: QueryFunctionContext) => {
    const [_, championPk] = queryKey;
    return instance.get(`champions/${championPk}`).then((response) => response.data);
};

// 추천메타
export const getComps = () => instance.get('comps/').then((response) => response.data);

// 아이템 - 만드는중
export const getItems = () => instance.get('items/').then((response) => response.data);

// 시너지-계열
export const getSynergyOrigins = () => instance.get('synergies/origin').then((response) => response.data);

// 시너지-직업
export const getSynergyJobs = () => instance.get('synergies/job').then((response) => response.data);

export const getEncounters = () => instance.get('encounters/').then((response) => response.data);
