import { Box, Text, VStack, Image, HStack, Tooltip } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getSet12Items } from '../../set12api';

interface IItems {
  key: string;
  ingameKey: string;
  ingameIcon: string;
  name: string;
  desc: string;
  shortDesc: string;
  fromDesc: string;
  imageUrl: string;
  composition1: string;
  composition2: string;
  affectedTraitKey: string;
  isFromItem: boolean;
  isNormal: boolean;
  isEmblem: boolean;
  isSupport: boolean;
  isArtifact: boolean;
  isRadiant: boolean;
  isUnique: boolean;
  isNew: boolean;
}

export default function Set12Item({
  key,
  ingameKey,
  ingameIcon,
  name,
  desc,
  shortDesc,
  fromDesc,
  imageUrl,
  composition1,
  composition2,
  affectedTraitKey,
  isFromItem,
  isNormal,
  isEmblem,
  isSupport,
  isArtifact,
  isRadiant,
  isUnique,
  isNew,
}: IItems) {
  const filteredShortDesc = shortDesc.replace(/<br>/g, ' ');

  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getSet12Items,
  });

  const getCompositionImage = (compositionKey: string) => {
    const item = data?.find((item: any) => item.key === compositionKey);
    return item ? item.imageUrl : null;
  };

  return (
    <VStack>
      <Tooltip
        hasArrow
        bgColor={'black'}
        rounded={'md'}
        label={
          <VStack p={1.5} alignItems={'flex-start'} as={'b'} gap={3}>
            <Text color={'#e09400'} fontSize={'lg'}>
              {name}
            </Text>
            {desc.split('<br>').map((splitedContext, index) => (
              <Text key={index} color={'white'}>
                {splitedContext}
              </Text>
            ))}
            <Text color={'gray'}>{filteredShortDesc}</Text>
            {composition1 && composition2 ? (
              <HStack gap={'1'}>
                <Image
                  border={'2px solid gray'}
                  borderRadius={'22'}
                  w="44px"
                  h="44px"
                  src={getCompositionImage(composition1) || ''}
                />
                <Text as="b" fontSize={'xl'}>
                  +
                </Text>
                <Image
                  border={'2px solid gray'}
                  borderRadius={'22'}
                  w="44px"
                  h="44px"
                  src={getCompositionImage(composition2) || ''}
                />
              </HStack>
            ) : null}
          </VStack>
        }
      >
        <Box>
          <Image src={imageUrl}></Image>
        </Box>
      </Tooltip>
    </VStack>
  );
}
