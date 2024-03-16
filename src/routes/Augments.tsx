import { useQuery } from "@tanstack/react-query";
import { getAugments } from "../api";
import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import IAugments from "./../components/types.d";

export default function Augments() {
  const { data, isLoading } = useQuery<IAugments[]>({
    queryKey: ["augments"],
    queryFn: getAugments,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not available</div>;

  // tier 별로 데이터를 분류
  const silverAugments = data.filter((augment) => augment.tier === "silver");
  const goldAugments = data.filter((augment) => augment.tier === "gold");
  const prismaticAugments = data.filter(
    (augment) => augment.tier === "prismatic"
  );

  return (
    <Container p={5} maxW={"container.xl"}>
      <Box mx={20} mb={5}>
        <Text as={"b"} color={"#dca555"} fontSize={"20px"}>
          증강
        </Text>
      </Box>
      {/* 실버 티어 */}
      <Box mx={20} border={"1px solid gray"}>
        <Box bg={"#27282e"} p={3} borderBottom={0}>
          <Text as={"b"} color={"white"}>
            실버
          </Text>
        </Box>
        {silverAugments.map((augment, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={"45px"} src={augment.photos[0]?.file} />
              <VStack p={3} alignItems={"flex-start"}>
                <Text fontSize={"14px"} as={"b"} color={"white"}>
                  {augment.name}
                </Text>
                <Text fontSize={"13px"} color={"white"}>
                  {augment.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>

      {/* 골드 티어 */}
      <Box mx={20} border={"1px solid gray"} mt={5}>
        <Box bg={"#27282e"} p={3}>
          <Text as={"b"} color={"white"}>
            골드
          </Text>
        </Box>
        {goldAugments.map((augment, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={"45px"} src={augment.photos[0]?.file} />
              <VStack p={3} alignItems={"flex-start"}>
                <Text fontSize={"14px"} as={"b"} color={"white"}>
                  {augment.name}
                </Text>
                <Text fontSize={"13px"} color={"white"}>
                  {augment.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>

      {/* 프리즘 티어 */}
      <Box mx={20} border={"1px solid gray"} mt={5}>
        <Box bg={"#27282e"} p={3}>
          <Text as={"b"} color={"white"}>
            프리즘
          </Text>
        </Box>
        {prismaticAugments.map((augment, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={"45px"} src={augment.photos[0]?.file} />
              <VStack p={3} alignItems={"flex-start"}>
                <Text fontSize={"14px"} as={"b"} color={"white"}>
                  {augment.name}
                </Text>
                <Text fontSize={"13px"} color={"white"}>
                  {augment.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
