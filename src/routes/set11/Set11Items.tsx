import { useQuery } from '@tanstack/react-query';
import { getSet11Items } from '../../set11api';
import { useParams } from 'react-router-dom';
import { Box, Container, HStack, Image, Text, Tooltip, VStack, Wrap } from '@chakra-ui/react';
import IItems from '../../components/types';
import Set11Item from '../../components/set11/Set11Item';

export default function Set11Items() {
  // 아이템 가져오기
  const { data: itemsData, isLoading: isItemLoading } = useQuery<IItems[]>({
    queryKey: ['item'],
    queryFn: getSet11Items,
  });

  // uniqueItem, newItem은 따로 안넣어줘도 될듯함
  const fromItemArr: IItems[] = [];
  const normalItemArr: IItems[] = [];
  const emblemItemArr: IItems[] = [];
  const supportItemArr: IItems[] = [];
  const artifactItemArr: IItems[] = [];
  const radiantItemArr: IItems[] = [];
  const uniqueItemArr: IItems[] = [];
  const newItemArr: IItems[] = [];
  itemsData?.map((itemEle) =>
    itemEle.isFromItem
      ? fromItemArr.push(itemEle)
      : itemEle.isNormal
      ? normalItemArr.push(itemEle)
      : itemEle.isEmblem
      ? emblemItemArr.push(itemEle)
      : itemEle.isSupport
      ? supportItemArr.push(itemEle)
      : itemEle.isArtifact
      ? artifactItemArr.push(itemEle)
      : itemEle.isRadiant
      ? radiantItemArr.push(itemEle)
      : itemEle.isUnique
      ? uniqueItemArr.push(itemEle)
      : newItemArr.push(itemEle)
  );

  return (
    <Container maxW={'container.xl'} minH={'500px'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
          아이템
        </Text>
      </Box>
      {isItemLoading ? (
        <Text color={'white'}>로딩중!!!</Text>
      ) : (
        <VStack mx={20} color={'white'} fontSize={'30px'} alignItems={'left'}>
          <Text>재료 아이템</Text>
          <Wrap>
            {fromItemArr.map((item_ele) => (
              <Box w={'64px'} h={'64px'}>
                <Set11Item
                  key={item_ele.key}
                  ingameKey={item_ele.ingameKey}
                  ingameIcon={item_ele.ingameIcon}
                  name={item_ele.name}
                  desc={item_ele.desc}
                  shortDesc={item_ele.shortDesc}
                  fromDesc={item_ele.fromDesc}
                  imageUrl={item_ele.imageUrl}
                  composition1={item_ele.composition1}
                  composition2={item_ele.composition2}
                  affectedTraitKey={item_ele.affectedTraitKey}
                  isFromItem={item_ele.isFromItem}
                  isNormal={item_ele.isNormal}
                  isEmblem={item_ele.isEmblem}
                  isSupport={item_ele.isSupport}
                  isArtifact={item_ele.isArtifact}
                  isRadiant={item_ele.isRadiant}
                  isUnique={item_ele.isUnique}
                  isNew={item_ele.isNew}
                />
              </Box>
            ))}
          </Wrap>
          <Text>기본 조합 아이템</Text>
          <Wrap>
            {normalItemArr.map((item_ele) => (
              <Box w={'64px'} h={'64px'}>
                <Set11Item
                  key={item_ele.key}
                  ingameKey={item_ele.ingameKey}
                  ingameIcon={item_ele.ingameIcon}
                  name={item_ele.name}
                  desc={item_ele.desc}
                  shortDesc={item_ele.shortDesc}
                  fromDesc={item_ele.fromDesc}
                  imageUrl={item_ele.imageUrl}
                  composition1={item_ele.composition1}
                  composition2={item_ele.composition2}
                  affectedTraitKey={item_ele.affectedTraitKey}
                  isFromItem={item_ele.isFromItem}
                  isNormal={item_ele.isNormal}
                  isEmblem={item_ele.isEmblem}
                  isSupport={item_ele.isSupport}
                  isArtifact={item_ele.isArtifact}
                  isRadiant={item_ele.isRadiant}
                  isUnique={item_ele.isUnique}
                  isNew={item_ele.isNew}
                />
              </Box>
            ))}
          </Wrap>
          <Text>상징 아이템</Text>
          <Wrap>
            {emblemItemArr.map((item_ele) => (
              <Box w={'64px'} h={'64px'}>
                <Set11Item
                  key={item_ele.key}
                  ingameKey={item_ele.ingameKey}
                  ingameIcon={item_ele.ingameIcon}
                  name={item_ele.name}
                  desc={item_ele.desc}
                  shortDesc={item_ele.shortDesc}
                  fromDesc={item_ele.fromDesc}
                  imageUrl={item_ele.imageUrl}
                  composition1={item_ele.composition1}
                  composition2={item_ele.composition2}
                  affectedTraitKey={item_ele.affectedTraitKey}
                  isFromItem={item_ele.isFromItem}
                  isNormal={item_ele.isNormal}
                  isEmblem={item_ele.isEmblem}
                  isSupport={item_ele.isSupport}
                  isArtifact={item_ele.isArtifact}
                  isRadiant={item_ele.isRadiant}
                  isUnique={item_ele.isUnique}
                  isNew={item_ele.isNew}
                />
              </Box>
            ))}
          </Wrap>
          <Text>지원 아이템</Text>
          <Wrap>
            {supportItemArr.map((item_ele) => (
              <Box w={'64px'} h={'64px'}>
                <Set11Item
                  key={item_ele.key}
                  ingameKey={item_ele.ingameKey}
                  ingameIcon={item_ele.ingameIcon}
                  name={item_ele.name}
                  desc={item_ele.desc}
                  shortDesc={item_ele.shortDesc}
                  fromDesc={item_ele.fromDesc}
                  imageUrl={item_ele.imageUrl}
                  composition1={item_ele.composition1}
                  composition2={item_ele.composition2}
                  affectedTraitKey={item_ele.affectedTraitKey}
                  isFromItem={item_ele.isFromItem}
                  isNormal={item_ele.isNormal}
                  isEmblem={item_ele.isEmblem}
                  isSupport={item_ele.isSupport}
                  isArtifact={item_ele.isArtifact}
                  isRadiant={item_ele.isRadiant}
                  isUnique={item_ele.isUnique}
                  isNew={item_ele.isNew}
                />
              </Box>
            ))}
          </Wrap>
          <Text>유물 오른 아이템</Text>
          <Wrap>
            {artifactItemArr.map((item_ele) => (
              <Box w={'64px'} h={'64px'}>
                <Set11Item
                  key={item_ele.key}
                  ingameKey={item_ele.ingameKey}
                  ingameIcon={item_ele.ingameIcon}
                  name={item_ele.name}
                  desc={item_ele.desc}
                  shortDesc={item_ele.shortDesc}
                  fromDesc={item_ele.fromDesc}
                  imageUrl={item_ele.imageUrl}
                  composition1={item_ele.composition1}
                  composition2={item_ele.composition2}
                  affectedTraitKey={item_ele.affectedTraitKey}
                  isFromItem={item_ele.isFromItem}
                  isNormal={item_ele.isNormal}
                  isEmblem={item_ele.isEmblem}
                  isSupport={item_ele.isSupport}
                  isArtifact={item_ele.isArtifact}
                  isRadiant={item_ele.isRadiant}
                  isUnique={item_ele.isUnique}
                  isNew={item_ele.isNew}
                />
              </Box>
            ))}
          </Wrap>
          <Text>찬란한 아이템</Text>
          <Wrap>
            {radiantItemArr.map((item_ele) => (
              <Box w={'64px'} h={'64px'}>
                <Set11Item
                  key={item_ele.key}
                  ingameKey={item_ele.ingameKey}
                  ingameIcon={item_ele.ingameIcon}
                  name={item_ele.name}
                  desc={item_ele.desc}
                  shortDesc={item_ele.shortDesc}
                  fromDesc={item_ele.fromDesc}
                  imageUrl={item_ele.imageUrl}
                  composition1={item_ele.composition1}
                  composition2={item_ele.composition2}
                  affectedTraitKey={item_ele.affectedTraitKey}
                  isFromItem={item_ele.isFromItem}
                  isNormal={item_ele.isNormal}
                  isEmblem={item_ele.isEmblem}
                  isSupport={item_ele.isSupport}
                  isArtifact={item_ele.isArtifact}
                  isRadiant={item_ele.isRadiant}
                  isUnique={item_ele.isUnique}
                  isNew={item_ele.isNew}
                />
              </Box>
            ))}
          </Wrap>
        </VStack>
      )}
    </Container>
  );
}
