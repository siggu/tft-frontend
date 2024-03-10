import { useQuery } from "@tanstack/react-query";
import { getChampion } from "../api";
import { useParams } from "react-router-dom";
import { FaFlask, FaCoins } from "react-icons/fa";
import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import IChampionDetail from "../components/types";

export default function ChampionDetail() {
  const { championPk } = useParams();
  const { data, isLoading } = useQuery<IChampionDetail>({
    queryKey: ["champion", championPk],
    queryFn: getChampion,
  });
  return (
    <VStack gap={0} justifyContent={"center"} pl="10%" pr="10%" fontSize={"sm"}>
      {/* 이름, 초상화, 비용, 계열, 직업 */}
      <HStack
        width="100%"
        justifyContent={"space-between"}
        border={"solid"}
        borderColor="gray.300"
        borderWidth={1}
        gap={5}
        borderBottom={0}
        backgroundColor="black"
        color="white"
      >
        <HStack p={5}>
          <Image src={data?.photos[0].file} borderRadius={"20"} />
          <Text p={5} fontSize={"2xl"} as={"b"}>
            {data?.name}
          </Text>
        </HStack>
        <VStack p={5} alignItems={"flex-start"} bgColor={"#2b2e37"}>
          <HStack>
            <Text>비용</Text>
            <FaCoins color="#ffb42c" />
            <Text>{data?.cost}</Text>
          </HStack>
          <HStack>
            {data?.origin.length === 1 ? (
              <>
                <Image
                  w="45px"
                  h="45px"
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
                    w="45px"
                    h="45px"
                    rounded={"2xl"}
                    bgColor={"gray"}
                    src={data?.origin[index].photos[0].file}
                  />
                  <Text>{data?.origin[index].name}</Text>
                </>
              ))
            )}
          </HStack>
          <HStack>
            {data?.job.length === 1 ? (
              <>
                <Image
                  w="45px"
                  h="45px"
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
                    w="45px"
                    h="45px"
                    rounded={"2xl"}
                    bgColor={"gray"}
                    src={data?.job[index].photos[0].file}
                  />
                  <Text>{data?.job[index].name}</Text>
                </>
              ))
            )}
          </HStack>
        </VStack>
      </HStack>

      {/* 체력, 공격력, DPS, 공격사거리, 공격속도, 방어력, 마법저항력 */}
      <HStack
        width="100%"
        alignItems={"flex-start"}
        border={"solid"}
        borderColor="gray.300"
        borderWidth={1}
        p={5}
        gap={5}
        borderBottom={0}
        justifyContent={"space-evenly"}
      >
        <VStack>
          <Text>체력</Text>
          <Text as={"b"}>{data?.health}</Text>
        </VStack>
        <VStack>
          <Text>공격력</Text>
          <Text as={"b"}>{data?.ad}</Text>
        </VStack>
        <VStack>
          <Text>DPS</Text>
          <Text as={"b"}>{data?.dps}</Text>
        </VStack>
        <VStack>
          <Text>공격사거리</Text>
          <Text as={"b"}>{data?.attack_range}</Text>
        </VStack>
        <VStack>
          <Text>공격속도</Text>
          <Text as={"b"}>{data?.attack_speed}</Text>
        </VStack>
        <VStack>
          <Text>방어력</Text>
          <Text as={"b"}>{data?.armor}</Text>
        </VStack>
        <VStack>
          <Text>마법저항력</Text>
          <Text as={"b"}>{data?.magic_resistance}</Text>
        </VStack>
      </HStack>

      {/* 스킬 초상화, 스킬명, 스킬유형, 마나, 스킬 내용, 스킬효과 */}
      <HStack
        width="100%"
        alignItems={"flex-start"}
        border={"solid"}
        borderColor="gray.300"
        borderWidth={1}
        p={5}
        gap={5}
      >
        <Image src={data?.skill.photos[0].file} />

        <VStack alignItems={"flex-start"}>
          <Text as={"b"} fontSize="lg">
            {data?.skill.name}
          </Text>
          <HStack>
            <Text>{data?.skill.skill_type}</Text>
            <Text>|</Text>
            <FaFlask color="#217ac7" />
            <Text>
              {data?.skill.start_mana}/{data?.skill.max_mana}
            </Text>
          </HStack>
          <Text>{data?.skill.description}</Text>
          <Text color="#ca9372">{data?.skill.effect}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
