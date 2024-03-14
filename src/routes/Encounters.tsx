import { useQuery } from "@tanstack/react-query";
import { getEncounters } from "../api";
import IEncounter from "./../components/types.d";
import {
  Box,
  Grid,
  Text,
  VStack,
  Image,
  HStack,
  Container,
} from "@chakra-ui/react";

export default function Encounters() {
  const { data, isLoading } = useQuery<IEncounter[]>({
    queryKey: ["encounters"],
    queryFn: getEncounters,
  });

  return (
    <VStack>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Box w={"80%"}>
          {data &&
            data.map((encounter: IEncounter) => (
              <HStack gap={5} w={"100%"} m={5} border={"1px solid"} p={5}>
                <VStack key={encounter.id}>
                  <Box></Box>
                </VStack>
                <Box>
                  <Box p={5}>
                    <Image
                      w={"50px"}
                      h={"50px"}
                      rounded={"10px"}
                      src={encounter.photos[0].file}
                    />
                    <Text>{encounter.name}</Text>
                    {encounter.description_1 && (
                      <Text>{encounter.description_1}</Text>
                    )}
                  </Box>
                  <Box p={5}>
                    <Image
                      w={"50px"}
                      h={"50px"}
                      rounded={"10px"}
                      src={encounter.photos[0].file}
                    />
                    <Text>{encounter.name}</Text>
                    {encounter.description_2 && (
                      <Text>{encounter.description_2}</Text>
                    )}
                  </Box>
                  <Box p={5}>
                    <Image
                      w={"50px"}
                      h={"50px"}
                      rounded={"10px"}
                      src={encounter.photos[0].file}
                    />
                    <Text>{encounter.name}</Text>
                    {encounter.description_3 && (
                      <Text>{encounter.description_3}</Text>
                    )}
                  </Box>
                  <Box p={5}>
                    <Image
                      w={"50px"}
                      h={"50px"}
                      rounded={"10px"}
                      src={encounter.photos[0].file}
                    />
                    <Text>{encounter.name}</Text>
                    {encounter.description_4 && (
                      <Text>{encounter.description_4}</Text>
                    )}
                  </Box>
                </Box>
              </HStack>
            ))}
        </Box>
      )}
    </VStack>
  );
}
