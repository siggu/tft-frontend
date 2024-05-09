import {useQuery} from '@tanstack/react-query';
import {getItems} from '../api';
import {useParams} from 'react-router-dom';
import {Box, Container, HStack, Image, Text, Tooltip, VStack} from '@chakra-ui/react';
import IItems from '../components/types';
import Item from '../components/Item';

export default function Items() {
  // 아이템 가져오기
  const {data: itemsData} = useQuery<IItems[]>({
    queryKey: ['item'],
    queryFn: getItems,
  });

  console.log(itemsData);
  const fromItemArr: IItems[] = [];
  const normalItemArr: IItems[] = [];
  const emblemItemArr: IItems[] = [];
  const supportItemArr: IItems[] = [];
  const artifactItemArr: IItems[] = [];
  const radiantItemArr: IItems[] = [];
  const uniqueItemArr: IItems[] = [];
  const newItemArr: IItems[] = [];

  return <div></div>;
}
