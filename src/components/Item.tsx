import {Box, Text, VStack, Image, HStack, Tooltip} from '@chakra-ui/react';
interface IItems {
  pk: number;
  key: string;
  name: string;
  inGameKey: string;
  description: string;
  effect: string;
  generableItem: boolean;
  composition1: string;
  composition2: string;
  tags: string;
  imageUrl: string;
}

export default function Item({
  pk,
  key,
  name,
  inGameKey,
  description,
  effect,
  generableItem,
  composition1,
  composition2,
  tags,
  imageUrl,
}: IItems) {
  return (
    <VStack>
      <Tooltip
        bgColor={'black'}
        label={
          <VStack p={1.5} alignItems={'flex-start'} as={'b'} gap={3}>
            <Text color={'#e09400'} fontSize={'lg'}>
              {name}
            </Text>
            {description.split('<br>').map((splitedContext) => (
              <Text color={'white'}>{splitedContext}</Text>
            ))}
            {effect.split('<br>').map((splitedContext) => (
              <Text color={'gray'}>{splitedContext}</Text>
            ))}
            {generableItem && composition1 && composition2 ? (
              <HStack gap={'1'}>
                <Image border={'2px solid gray'} borderRadius={'22'} w="44px" h="44px" src={composition1} />
                <Text as="b" fontSize={'xl'}>
                  +
                </Text>
                <Image border={'2px solid gray'} borderRadius={'22'} w="44px" h="44px" src={composition2} />
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
