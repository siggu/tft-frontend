import {Box, Text, VStack, Image, HStack, Tooltip} from '@chakra-ui/react';

interface IMinitItemPortrait {
  pk: number;
  photo: string;
  name: string;
  description: string;
  effect: string;
  generableItem: Boolean;
  element_item1: string;
  element_item2: string;
}
export default function Item({
  pk,
  photo,
  name,
  description,
  effect,
  generableItem,
  element_item1,
  element_item2,
}: IMinitItemPortrait) {
  return (
    <VStack>
      <Tooltip
        label={
          <VStack alignItems={'flex-start'} as={'b'} gap={3}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text color={'gray'}>{effect}</Text>
            {generableItem ? (
              <HStack>
                <Image src={element_item1}></Image>
                <Image src={element_item2}></Image>
              </HStack>
            ) : null}
          </VStack>
        }
      >
        <Box>
          <Image src={photo}></Image>
        </Box>
      </Tooltip>
    </VStack>
  );
}
