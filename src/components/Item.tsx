import { Box, Text, VStack, Image, HStack, Tooltip } from "@chakra-ui/react";
interface IItems {
  key: string;
  ingameKey: string;
  name: string;
  description: string;
  shortDesc: string;
  imageUrl: string;
  composition1: string;
  composition2: string;
  isFromItem: boolean;
  isNormal: boolean;
  isEmblem: boolean;
  isSupport: boolean;
  isArtifact: boolean;
  isRadiant: boolean;
  isUnique: boolean;
  isNew: boolean;
  tag1: string;
  tag2: string;
  tag3: string;
}

export default function Item({
  key,
  ingameKey,
  name,
  description,
  shortDesc,
  imageUrl,
  composition1,
  composition2,
  isFromItem,
  isNormal,
  isEmblem,
  isSupport,
  isArtifact,
  isRadiant,
  isUnique,
  isNew,
  tag1,
  tag2,
  tag3,
}: IItems) {
  const filteredShortDesc = shortDesc.replace(/<br>/g, " ");
  return (
    <VStack>
      <Tooltip
        bgColor={"black"}
        label={
          <VStack p={1.5} alignItems={"flex-start"} as={"b"} gap={3}>
            <Text color={"#e09400"} fontSize={"lg"}>
              {name}
            </Text>
            {description.split("<br>").map((splitedContext) => (
              <Text color={"white"}>{splitedContext}</Text>
            ))}
            <Text color={"gray"}>{filteredShortDesc}</Text>
            {/* {generableItem && composition1 && composition2 ? (
              <HStack gap={'1'}>
                <Image border={'2px solid gray'} borderRadius={'22'} w="44px" h="44px" src={composition1} />
                <Text as="b" fontSize={'xl'}>
                  +
                </Text>
                <Image border={'2px solid gray'} borderRadius={'22'} w="44px" h="44px" src={composition2} />
              </HStack>
            ) : null} */}
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
