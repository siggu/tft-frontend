import { useQuery } from "@tanstack/react-query";
import { getChampions } from "../api";
import IChampion from "./../components/types.d";
import { HStack, Box, Image, Text } from "@chakra-ui/react";

export default function Champions() {
  const { data, isLoading } = useQuery<IChampion>({
    queryKey: ["champions"],
    queryFn: getChampions,
  });
  console.log(data);
  return (
    <Box>
      <Text>{data?.name}</Text>
    </Box>
  );
}
