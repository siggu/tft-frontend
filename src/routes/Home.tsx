import { Box, Container, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getComps } from "../api";
import IComp from "../components/types";

export default function Home() {
  const { data, isLoading } = useQuery<IComp[]>({
    queryKey: ["comps"],
    queryFn: getComps,
  });

  return (
    <VStack gap={20}>
      <Container maxW={"max-content"}>
        <Text>검색창</Text>
      </Container>
      <Container maxW={"container.xl"}>
        <Box>
          <h3>추천메타</h3>
        </Box>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          data?.map((comp) => (
            <HStack key={comp.pk}>
              <Text>{comp.name}</Text>
              {comp.champions
                .slice()
                .sort((a, b) => a.cost - b.cost)
                .map((champion) => (
                  <Image
                    w={"60px"}
                    h={"60px"}
                    key={champion.id}
                    src={champion.photos[0].file}
                  />
                ))}
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
