import {useQuery} from '@tanstack/react-query';
import {getChampions, getSynergies} from '../api';
import {
  Container,
  VStack,
  Text,
  Grid,
  Box,
  Image,
  HStack,
  Tooltip,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import ISynergy from '../components/types';
import IChampionDetail from './../components/types.d';
import React from 'react';
import Champion from '../components/Champion';

export default function Synergies() {
  const {data: synergiesData, isLoading: isSynergiesLoading} = useQuery<ISynergy[]>({
    queryKey: ['origins'],
    queryFn: getSynergies,
  });
  const {data: championsData, isLoading: isChampionsLoading} = useQuery<IChampionDetail[]>({
    queryKey: ['champions'],
    queryFn: getChampions,
  });
  championsData?.sort((a, b) => a.cost - b.cost);
  console.log(championsData);
  console.log(synergiesData);

  if (isSynergiesLoading || isChampionsLoading) return <div>Loading...</div>;
  if (!isSynergiesLoading || !!championsData) return <div>Data not available</div>;

  return <div></div>;
}
