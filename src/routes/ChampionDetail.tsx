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
    <VStack gap={5} justifyContent={"center"}>
      <HStack>
        {/* 이름, 초상화, 비용, 계열, 직업 */}
        <Image rounded={"2xl"} src={data?.photos[0].file} />
        <Text>{data?.name}</Text>
        <Text>${data?.cost}</Text>
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
      </HStack>
      <HStack>
        {/* 체력, 공격력, DPS, 공격사거리, 공격속도, 방어력, 마법저항력 */}
        <VStack>
          <Text>체력</Text>
          <Text>{data?.health}</Text>
        </VStack>
        <VStack>
        <Text>{data?.ad}</Text>
        </VStack>
        <VStack>
        <Text>{data?.dps}</Text>
          </VStack>
          <VStack>
          <Text>{data?.attack_range}</Text>
          </VStack>
          <VStack>
          
        <Text>{data?.attack_speed}</Text>
          </VStack>
          <VStack>
          
        <Text>{data?.armor}</Text>
          </VStack>
          <VStack>
          <Text>{data?.magic_resistance}</Text>
          </VStack>
      </HStack>

      <HStack>
        {/* 스킬 초상화, 스킬명, 스킬유형, 마나, 스킬 내용, 스킬효과 */}
        <Image src={data?.skill.photos[0].file} />
        <Text>{data?.skill.start_mana}/{data?.skill.max_mana}</Text>
      </HStack>
    </VStack>
  );
}
