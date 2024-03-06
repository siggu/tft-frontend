import { useQuery } from "@tanstack/react-query";
import { getChampion } from "../api";
import { useParams } from "react-router-dom";
import { Box, HStack, Text } from "@chakra-ui/react";

interface IChampionDetail {
  pk: number;
  name: string;
  cost: number;
  origin: string;
  job: string;
  health: number;
  ad: number;
  dps: number;
  attack_range: number;
  attack_speed: number;
  armor: number;
  magic_resistance: number;
  skill: string;
  avatar: string | null;
}

export default function ChampionDetail() {
  const { championPk } = useParams();
  const { data, isLoading } = useQuery<IChampionDetail>({
    queryKey: ["champion", championPk],
    queryFn: getChampion,
  });
  return (
    <HStack>
      <Text>{data?.avatar}</Text>
      <Text>{data?.name}</Text>
      <Text>{data?.cost}</Text>
      {/* <Text>{data?.job}</Text> */}
      {/* <Text>{data?.origin}</Text> */}
      <Text>{data?.health}</Text>
      <Text>{data?.armor}</Text>
      <Text>{data?.magic_resistance}</Text>
      <Text>{data?.ad}</Text>
      <Text>{data?.attack_range}</Text>
      <Text>{data?.attack_speed}</Text>
      <Text>{data?.dps}</Text>
      {/* <Text>{data?.skill}</Text> */}
    </HStack>
  );
}
