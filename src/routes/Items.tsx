import {useQuery} from '@tanstack/react-query';
import {getItems, getItemRecipies} from '../api';
import {useParams} from 'react-router-dom';
import {Box, Container, HStack, Image, Text, Tooltip, VStack} from '@chakra-ui/react';
import IItems from '../components/types';
import Item from '../components/Item';

export default function Items() {
  // 아이템 가져오기
  const {data: itemsDate} = useQuery<IItems>({
    queryKey: ['item'],
    queryFn: getItems,
  });
  const basicItemArr: IItems[] = [];
  const normalItemArr: IItems[] = [];
  const emblemItemArr: IItems[] = [];
  const supportItemArr: IItems[] = [];
  const artifactItemArr: IItems[] = [];
  const radiantItemArr: IItems[] = [];
  const etcItemArr: IItems[] = [];

  itemsDate?.map((iele) => {
    iele.tags === 'basic'
      ? basicItemArr.push(iele)
      : iele.tags === 'normal'
      ? normalItemArr.push(iele)
      : iele.tags === 'emblem'
      ? emblemItemArr.push(iele)
      : iele.tags === 'support'
      ? supportItemArr.push(iele)
      : iele.tags === 'artifact'
      ? artifactItemArr.push(iele)
      : iele.tags === 'radiant'
      ? radiantItemArr.push(iele)
      : etcItemArr.push(iele);
  });

  normalItemArr.forEach((normalItemArrEle) => {
    basicItemArr.forEach((basicItemArrEle) => {
      if (basicItemArrEle.key === normalItemArrEle.composition1) {
        normalItemArrEle.composition1 = basicItemArrEle.imageUrl;
      }
      if (basicItemArrEle.key === normalItemArrEle.composition2) {
        normalItemArrEle.composition2 = basicItemArrEle.imageUrl;
      }
    });
  });

  emblemItemArr.forEach((emblemItemArrEle) => {
    basicItemArr.forEach((basicItemArrEle) => {
      if (basicItemArrEle.key === emblemItemArrEle.composition1) {
        emblemItemArrEle.composition1 = basicItemArrEle.imageUrl;
      }
      if (basicItemArrEle.key === emblemItemArrEle.composition2) {
        emblemItemArrEle.composition2 = basicItemArrEle.imageUrl;
      }
    });
  });

  const itemsArrays: IItems[][] = [
    basicItemArr,
    normalItemArr,
    emblemItemArr,
    supportItemArr,
    artifactItemArr,
    radiantItemArr,
    etcItemArr,
  ];

  return (
    <VStack maxW="1120px" margin={'auto'} p="20px" minW="700px" color={'white'} alignItems={'flex-start'}>
      {itemsArrays.map((itemsArraysEle) => (
        <VStack alignItems={'flex-start'}>
          <Text as={'b'} fontSize={'xl'}>
            {itemsArraysEle[0]?.tags === 'basic'
              ? '기본 '
              : itemsArraysEle[0]?.tags === 'normal'
              ? '조합 '
              : itemsArraysEle[0]?.tags === 'emblem'
              ? '상징 '
              : itemsArraysEle[0]?.tags === 'support'
              ? '지원 '
              : itemsArraysEle[0]?.tags === 'artifact'
              ? '오른 '
              : itemsArraysEle[0]?.tags === 'radiant'
              ? '찬란한 '
              : '기타 '}
            아이템
          </Text>
          <HStack wrap={'wrap'} gap={'5'} pb={10}>
            {itemsArraysEle.map((eachItemsArrays) => (
              <Item
                pk={eachItemsArrays.id}
                name={eachItemsArrays.name}
                key={eachItemsArrays.key}
                inGameKey={eachItemsArrays.inGameKey}
                description={eachItemsArrays.description}
                effect={eachItemsArrays.effect}
                generableItem={eachItemsArrays.generableItem}
                composition1={eachItemsArrays.composition1}
                composition2={eachItemsArrays.composition2}
                tags={eachItemsArrays.tags}
                imageUrl={eachItemsArrays.imageUrl}
              />
            ))}
          </HStack>
        </VStack>
      ))}
    </VStack>
  );
}
