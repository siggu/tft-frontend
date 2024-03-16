import { useQuery } from "@tanstack/react-query";
import { getPortals } from "../api";
import IPortals from "./../components/types.d";
import { Container, HStack, VStack, Box, Text, Image } from "@chakra-ui/react";

export default function Portals() {
  const { data, isLoading } = useQuery<IPortals[]>({
    queryKey: ["portals"],
    queryFn: getPortals,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not available</div>;

  const champPortals = data.filter((portal) => portal.portal_type === "champ");
  const combatPortals = data.filter(
    (portal) => portal.portal_type === "combat"
  );
  const spatulaPortals = data.filter(
    (portal) => portal.portal_type === "spatula"
  );
  const coinPortals = data.filter((portal) => portal.portal_type === "coin");
  const cardPortals = data.filter((portal) => portal.portal_type === "card");
  const itemPortals = data.filter((portal) => portal.portal_type === "item");

  return (
    <Container maxW={"container.xl"}>
      <Box mx={20} mb={5}>
        <Text as={"b"} color={"#dca555"} fontSize={"20px"}>
          차원문
        </Text>
      </Box>
      {/* 챔피언 차원문 */}
      <Box mx={20} border={"1px solid gray"}>
        <Box bg={"#27282e"} p={3}>
          <Image src={champPortals[0].photos[0]?.file} />
        </Box>
        {champPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={"45px"} src={portal.photos[0]?.file} />
              <VStack p={3} alignItems={"flex-start"}>
                <Text fontSize={"14px"} as={"b"} color={"white"}>
                  {portal.name}
                </Text>
                <Text fontSize={"13px"} color={"white"}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>

      {/* 전투 차원문 */}
      <Box mx={20} border={"1px solid gray"} mt={5}>
        <Box bg={"#27282e"} p={3} borderBottom={0}>
          <Text as={"b"} color={"white"}>
            챔피언
          </Text>
        </Box>
        {champPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={"45px"} src={portal.photos[0]?.file} />
              <VStack p={3} alignItems={"flex-start"}>
                <Text fontSize={"14px"} as={"b"} color={"white"}>
                  {portal.name}
                </Text>
                <Text fontSize={"13px"} color={"white"}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
