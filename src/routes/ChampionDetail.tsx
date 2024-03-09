import { useQuery } from "@tanstack/react-query";
import { getChampion } from "../api";
import { useParams } from "react-router-dom";
import { IoIosFlask } from "react-icons/io";
import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import IChampionDetail from "../components/types";

export default function ChampionDetail() {
  const { championPk } = useParams();
  const { data, isLoading } = useQuery<IChampionDetail>({
    queryKey: ["champion", championPk],
    queryFn: getChampion,
  });
  return (
    <VStack gap={0} justifyContent={"center"} pl="10%" pr="10%">
      <HStack width="100%" alignItems={"flex-start"}border={"solid"} borderColor='gray.300' borderWidth={1} p={5} gap={5} borderBottom={0} backgroundColor="black" color="white">
        {/* 이름, 초상화, 비용, 계열, 직업 */}
        <Image rounded={"2xl"} src={data?.photos[0].file} />
        <Text>{data?.name}</Text>
        <Text>${data?.cost}</Text>
        <HStack >
          {data?.job.length === 1 ? (
            <>
              <Image fill={"black"}
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
      <HStack width="100%" alignItems={"flex-start"}border={"solid"} borderColor='gray.300' borderWidth={1} p={5} gap={5} borderBottom={0}>
        {/* 체력, 공격력, DPS, 공격사거리, 공격속도, 방어력, 마법저항력 */}
        <VStack>
          <Text>체력</Text>
          <Text>{data?.health}</Text>
        </VStack>
        <VStack>
        <Text>공격력</Text>
        <Text>{data?.ad}</Text>
        </VStack>
        <VStack>
        <Text>DPS</Text>
        <Text>{data?.dps}</Text>
          </VStack>
          <VStack>
          <Text>공격사거리</Text>
          <Text>{data?.attack_range}</Text>
          </VStack>
          <VStack>
          <Text>공격속도</Text>
          
        <Text>{data?.attack_speed}</Text>
          </VStack>
          <VStack>
          <Text>방어력</Text>
        
        <Text>{data?.armor}</Text>
          </VStack>
          <VStack>
          <Text>마법저항력</Text>
          <Text>{data?.magic_resistance}</Text>
          </VStack>
      </HStack>

      <HStack width="100%" alignItems={"flex-start"}border={"solid"} borderColor='gray.300' borderWidth={1} p={5} gap={5}>
        {/* 스킬 초상화, 스킬명, 스킬유형, 마나, 스킬 내용, 스킬효과 */}
        
        <Image src={data?.skill.photos[0].file}/>
        
        <VStack alignItems={"flex-start"}>
          <Text as={"b"} fontSize="lg" >{data?.skill.name}</Text>
          <HStack>
          <Text>{data?.skill.skill_type}</Text>
          <Text>|</Text>
          <IoIosFlask color="#217ac7"/>
          <Text>{data?.skill.start_mana}/{data?.skill.max_mana}</Text>
          </HStack>
          <Text>{data?.skill.description}</Text>
          <Text color="#ca9372">{data?.skill.effect}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
