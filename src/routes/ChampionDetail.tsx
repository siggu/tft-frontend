import { useQuery } from "@tanstack/react-query";
import { getChampion } from "../api";
import { useParams } from "react-router-dom";
import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import IChampionDetail from "../components/types";

export default function ChampionDetail() {
  const { championPk } = useParams();
  const { data, isLoading } = useQuery<IChampionDetail>({
    queryKey: ["champion", championPk],
    queryFn: getChampion,
  });
  return (
    <HStack gap={5} justifyContent={"center"}>
      <Box>
        <HStack>
          <Image rounded={"2xl"} src={data?.photos[0].file} />
          <Text>{data?.name}</Text>
        </HStack>
      </Box>
      <Box>
        <Text>${data?.cost}</Text>
      </Box>
      <Box>
        <HStack>
          {data?.job.length === 1 ? (
            <>
              <Image
                rounded={"2xl"}
                bgColor={"gray"}
                src={data?.job[0].photos[0].file}
              />
              <Text>{data?.job[0].name}</Text>
            </>
          ) : (
            [0, 1].map((index) => (
              <>
                <Image
                  rounded={"2xl"}
                  bgColor={"gray"}
                  src={data?.job[index].photos[0].file}
                />
                <Text>{data?.job[index].name}</Text>
              </>
            ))
          )}
        </HStack>
      </Box>
      <Box>
        <HStack>
          {data?.origin.length === 1 ? (
            <>
              <Image
                rounded={"2xl"}
                bgColor={"gray"}
                src={data?.origin[0].photos[0].file}
              />
              <Text>{data?.origin[0].name}</Text>
            </>
          ) : (
            [0, 1].map((index) => (
              <>
                <Image
                  rounded={"2xl"}
                  bgColor={"gray"}
                  src={data?.origin[index].photos[0].file}
                />
                <Text>{data?.origin[index].name}</Text>
              </>
            ))
          )}
        </HStack>
      </Box>
      <Box>
        <Text>{data?.health}</Text>
      </Box>
      <Box>
        <Text>{data?.armor}</Text>
      </Box>
      <Box>
        <Text>{data?.magic_resistance}</Text>
      </Box>
      <Box>
        <Text>{data?.ad}</Text>
      </Box>
      <Box>
        <Text>{data?.attack_range}</Text>
      </Box>
      <Box>
        <Text>{data?.attack_speed}</Text>
      </Box>
      <Box>
        <Text>{data?.dps}</Text>
      </Box>
      <Box>
        <Image src={data?.skill.photos[0].file} />
      </Box>
      <Box>
        <Text>
          {data?.skill.start_mana}/{data?.skill.max_mana}
        </Text>
      </Box>
    </HStack>
  );
}
