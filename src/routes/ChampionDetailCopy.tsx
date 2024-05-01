import {useQuery} from '@tanstack/react-query';
import {getChampion, getChampions} from '../api';
import {useParams} from 'react-router-dom';
import {FaFlask, FaCoins} from 'react-icons/fa';
import {Box, Container, HStack, Image, Text, VStack, Grid, useMediaQuery} from '@chakra-ui/react';
import IChampion from '../components/types';
import Champion from '../components/Champion';

export default function ChampionDetailCopy() {
  // 특정 챔피언 1개만 가져오기 (url)
  const {championPk} = useParams();
  const {data: championData, isLoading: isChampionDataLoading} = useQuery<IChampion>({
    queryKey: ['champion', championPk],
    queryFn: getChampion,
  });

  // 모든 챔피언 가져오기

  const {data: allChampionsData, isLoading: isAllChampionDataLoading} = useQuery<IChampion[]>({
    queryKey: ['champions'],
    queryFn: getChampions,
  });

  const [mediaSize] = useMediaQuery('(min-width: 1200px)');
  allChampionsData?.sort((a, b) => a.cost1 - b.cost1);
  console.log('allChampionsData : ', allChampionsData);

  return (
    <Container maxW={'container.xl'} minH={'500px'}>
      {isAllChampionDataLoading
        ? null
        : allChampionsData?.map((allChampionsData_ele) => (
            <Champion
              key={allChampionsData_ele.key}
              name={allChampionsData_ele.name}
              cost={allChampionsData_ele.cost1}
              photos={allChampionsData_ele.imageUrl}
              traits1={allChampionsData_ele.traits1}
              traits2={allChampionsData_ele.traits2}
              attack_range={allChampionsData_ele.attackRange}
              skill={allChampionsData_ele.skill_name}
            />
          ))}
    </Container>
  );
}
