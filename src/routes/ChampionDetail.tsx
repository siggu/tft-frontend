import { useQuery } from "@tanstack/react-query";
import { getChampion, getChampions } from "../api";
import { useParams } from "react-router-dom";
import { FaFlask, FaCoins } from "react-icons/fa";
import { Box, Container, HStack, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import IChampionDetail from "../components/types";

export default function ChampionDetail() {

  // 특정 챔피언 1개만 가져오기 (url)
  const { championPk } = useParams();
  const { data: championData} = useQuery<IChampionDetail>({
    queryKey: ["champion", championPk],
    queryFn: getChampion,
  });

  // 모든 챔피언 가져오기

  const {data:allChampionsData} = useQuery<IChampionDetail[]>({
    queryKey: ["champions"],
    queryFn: getChampions, 
  }) 
  
  allChampionsData?.sort((a,b) =>a.cost - b.cost)

  // test
  allChampionsData?.map((item) => { item.origin.map((origin_obj)=> {if(origin_obj.name === "이야기꾼"){console.log(item.name)}})})


  return (
    <VStack maxW="1120px" mt="20px" p="20px" minW="700px">
      {/* # 1. 챔피언 세부정보 박스 */}
      <VStack gap={0} justifyContent={"center"} pl="10%" pr="10%" fontSize={"sm"} w={"100%"}>
        {/* 이름, 초상화, 비용, 계열, 직업 */}
        <HStack
          minW="100%"
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
            <Image src={championData?.photos[0].file} borderRadius={"20"} />
            <Text p={5} fontSize={"2xl"} as={"b"}>
              {championData?.name}
            </Text>
          </HStack>
          <VStack p={5} alignItems={"flex-start"} bgColor={"#2b2e37"}>
            <HStack>
              <Text mr={5}>비용</Text>
              <FaCoins color="#ffb42c" />
              <Text>{championData?.cost}</Text>
            </HStack>
            <HStack>
            <Text mr={5}>계열</Text>
              {championData?.origin.map((value) => (
                  <>
                    <Image p={1}
                      w="35px"
                      h="35px"
                      rounded={"2xl"}
                      bgColor={"gray"}
                      src={value.photos[0].file}
                    />
                    <Text>{value.name}</Text>
                  </>))}
            </HStack>
            <HStack>
            <Text mr={5}>직업</Text>
              {championData?.job.map((value) => (
                  <>
                    <Image p={1}
                      w="35px"
                      h="35px"
                      rounded={"2xl"}
                      bgColor={"gray"}
                      src={value.photos[0].file}
                    />
                    <Text>{value.name}</Text>
                  </>))}
            </HStack>
          </VStack>
        </HStack>

        {/* 체력, 공격력, DPS, 공격사거리, 공격속도, 방어력, 마법저항력 */}
        <HStack
          minW="100%"
          bg="#fafafa"
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
            <Text as={"b"}>{championData?.health}</Text>
          </VStack>
          <VStack>
            <Text>공격력</Text>
            <Text as={"b"}>{championData?.ad}</Text>
          </VStack>
          <VStack>
            <Text>DPS</Text>
            <Text as={"b"}>{championData?.dps}</Text>
          </VStack>
          <VStack>
            <Text>공격사거리</Text>
            <Text as={"b"}>{championData?.attack_range}</Text>
          </VStack>
          <VStack>
            <Text>공격속도</Text>
            <Text as={"b"}>{championData?.attack_speed}</Text>
          </VStack>
          <VStack>
            <Text>방어력</Text>
            <Text as={"b"}>{championData?.armor}</Text>
          </VStack>
          <VStack>
            <Text>마법저항력</Text>
            <Text as={"b"}>{championData?.magic_resistance}</Text>
          </VStack>
        </HStack>

        {/* 스킬 초상화, 스킬명, 스킬유형, 마나, 스킬 내용, 스킬효과 */}
        <HStack
          minW="100%"
          alignItems={"flex-start"}
          border={"solid"}
          borderColor="gray.300"
          borderWidth={1}
          p={5}
          gap={5}
        >
          <Image src={championData?.skill.photos[0].file} />

          <VStack alignItems={"flex-start"}>
            <Text as={"b"} fontSize="lg">
              {championData?.skill.name}
            </Text>
            <HStack>
              <Text>{championData?.skill.skill_type}</Text>
              <Text>|</Text>
              <FaFlask color="#217ac7" />
              <Text>
                {championData?.skill.start_mana}/{championData?.skill.max_mana}
              </Text>
            </HStack>
            <Text>{championData?.skill.description}</Text>
            <Text color="#ca9372">{championData?.skill.effect}</Text>
          </VStack>
        </HStack>
        </VStack>

      {/*# 2. 챔피언의 해당 시너지 세부정보 */}
      <VStack gap={0} justifyContent={"center"} pl="10%" pr="10%" fontSize={"sm"} minW="700px">
        <HStack minW="700px" as="b" fontSize="lg" h="60px" bgColor="#ca9372" color={"white"} textAlign={"center"} w="100%" pl="16px">
          <Text>시너지</Text>
        </HStack>
        {/* 계열 */}
        {championData?.origin.map((origin_obj) => 
          <HStack w="100%" h="100%"  justifyContent={"center"} minW={"120px"} minH={"200px"} borderLeft={"1px"} borderRight={"1px"} borderBottom={"1px"} borderColor={"gray.300"}>
            {/* 계열 명 */}
            <HStack backgroundColor={"#fff7ec"}  justifyContent={"center"} minW={"120px"} minH={"200px"} >
              <Image
              w="35px"
              h="35px"
              rounded={"5"}
              bgColor={"gray"}
              src={origin_obj.photos[0].file}/>
              <Text as={'b'}>{origin_obj.name}</Text>
          </HStack>
          {/* 계열 설명 */}
          <VStack p={"16px"} w={"100%"} h={"100%"} >
            <HStack>
              {allChampionsData?.map((allChampions_item) => 
              allChampions_item.origin.map((allChampions_item_origin_obj) => 
              {if(allChampions_item_origin_obj.name === origin_obj.name){
                return <>
                <Tooltip
                hasArrow
                label={
                  <VStack
                    as={"b"}
                    gap={3}
                    alignItems={"flex-start"}
                    w={"300px"}
                  >
                    <HStack>
                      <Text>{allChampions_item.name}</Text>
                      <HStack>
                        <Box color={"yellow.400"}>
                          <FaCoins />
                        </Box>
                        <Text>{allChampions_item.cost}</Text>
                      </HStack>
                    </HStack>
                    <VStack alignItems={"flex-start"}>
                      <HStack>
                        <Image
                          width={"25px"}
                          src={allChampions_item.origin[0].photos[0].file}
                        />
                        <Text>{allChampions_item.origin[0].name}</Text>
                      </HStack>
                      <HStack>
                        <Image
                          width={"25px"}
                          src={allChampions_item.job[0].photos[0].file}
                        />
                        <Text>{allChampions_item.job[0].name}</Text>
                      </HStack>
                    </VStack>
                    <HStack alignItems={"flex-start"}>
                      <Text>공격 사거리: {allChampions_item.attack_range}</Text>
                    </HStack>
                    <HStack>
                      <Image
                        w={"40px"}
                        src={allChampions_item.skill.photos[0].file}
                      />
                      <VStack gap={0} alignItems={"flex-start"}>
                        <Text color={"orange"}>
                          {allChampions_item.skill.name}
                        </Text>
                        <Text>
                          마나: {allChampions_item.skill.start_mana}/
                          {allChampions_item.skill.max_mana}
                        </Text>
                      </VStack>
                    </HStack>
                    <VStack>
                      <Text color={"gray"}>
                        {allChampions_item.skill.description}
                      </Text>
                    </VStack>
                    <VStack>
                      <Text>{allChampions_item.skill.effect}</Text>
                    </VStack>
                  </VStack>
                }
                bg={"black"}
                rounded={"md"}
                p={3}
              >
                  <Box w={"60px"} h={"60px"} border={
                            allChampions_item.cost === 1
                              ? "3px solid gray"
                              : allChampions_item.cost === 2
                              ? "3px solid green"
                              : allChampions_item.cost === 3
                              ? "3px solid blue"
                              : allChampions_item.cost === 4
                              ? "3px solid purple"
                              : allChampions_item.cost === 5
                              ? "3px solid gold": "3px solid black"
                          }
                          borderRadius={"2xl"}
                          position={"relative"}>

                    <Image w={"full"}
                            h={"full"}
                            rounded={"12px"} src={allChampions_item.photos[0].file} />
 
                    <Box
                    position={"absolute"} // 부모 요소를 기준으로 절대적으로 위치
                    top={0} // 부모 요소의 위쪽에 배치
                    right={0} // 부모 요소의 오른쪽에 배치
                    bg={
                      allChampions_item.cost === 1
                        ? "gray"
                        : allChampions_item.cost === 2
                        ? "green"
                        : allChampions_item.cost === 3
                        ? "blue"
                        : allChampions_item.cost === 4
                        ? "purple"
                        : allChampions_item.cost === 5
                        ? "gold"
                        : undefined
                    } // 배경색 지정
                    pl={1}
                    pr={1}
                    roundedTopRight={"10px"} // 라운드 처리
                    >
                    <Text textShadow="1px 0px 2px black" fontSize={"13px"} color={"white"}>${allChampions_item.cost}</Text>
                    </Box>
                    <HStack justifyContent={"center"} >
                    <Text textShadow="1px 0px 2px black" position={"relative"} bottom={"20px"} fontSize={"13px"} color={"white"}>{allChampions_item.name}</Text>
                    </HStack>
                  </Box>
                  </Tooltip>
                </>
                }} ))}
            </HStack>
          <Text as={'b'}>{origin_obj.description}</Text>

          </VStack>
          </HStack>
        )}

        {/* 직업 */}
        {championData?.job.map((job_obj) => 
          <HStack w="100%" h="100%"  justifyContent={"center"} minW={"120px"} minH={"200px"} borderLeft={"1px"} borderRight={"1px"} borderBottom={"1px"} borderColor={"gray.300"}>
            {/* 계열 명 */}
            <HStack backgroundColor={"#fff7ec"}  justifyContent={"center"} minW={"120px"} minH={"200px"} >
              <Image
              w="35px"
              h="35px"
              rounded={"5"}
              bgColor={"gray"}
              src={job_obj.photos[0].file}/>
              <Text as={'b'}>{job_obj.name}</Text>
          </HStack>
          {/* 계열 설명 */}
          <VStack p={"16px"} w={"100%"} h={"100%"} >
            <HStack>
              {allChampionsData?.map((allChampions_item) => 
              allChampions_item.job.map((allChampions_item_job_obj) => 
              {if(allChampions_item_job_obj.name === job_obj.name){
                return <>
                <Tooltip
                hasArrow
                label={
                  <VStack
                    as={"b"}
                    gap={3}
                    alignItems={"flex-start"}
                    w={"300px"}
                  >
                    <HStack>
                      <Text>{allChampions_item.name}</Text>
                      <HStack>
                        <Box color={"yellow.400"}>
                          <FaCoins />
                        </Box>
                        <Text>{allChampions_item.cost}</Text>
                      </HStack>
                    </HStack>
                    <VStack alignItems={"flex-start"}>
                      <HStack>
                        <Image
                          width={"25px"}
                          src={allChampions_item.job[0].photos[0].file}
                        />
                        <Text>{allChampions_item.job[0].name}</Text>
                      </HStack>
                      <HStack>
                        <Image
                          width={"25px"}
                          src={allChampions_item.job[0].photos[0].file}
                        />
                        <Text>{allChampions_item.job[0].name}</Text>
                      </HStack>
                    </VStack>
                    <HStack alignItems={"flex-start"}>
                      <Text>공격 사거리: {allChampions_item.attack_range}</Text>
                    </HStack>
                    <HStack>
                      <Image
                        w={"40px"}
                        src={allChampions_item.skill.photos[0].file}
                      />
                      <VStack gap={0} alignItems={"flex-start"}>
                        <Text color={"orange"}>
                          {allChampions_item.skill.name}
                        </Text>
                        <Text>
                          마나: {allChampions_item.skill.start_mana}/
                          {allChampions_item.skill.max_mana}
                        </Text>
                      </VStack>
                    </HStack>
                    <VStack>
                      <Text color={"gray"}>
                        {allChampions_item.skill.description}
                      </Text>
                    </VStack>
                    <VStack>
                      <Text>{allChampions_item.skill.effect}</Text>
                    </VStack>
                  </VStack>
                }
                bg={"black"}
                rounded={"md"}
                p={3}
              >
                  <Box w={"60px"} h={"60px"} border={
                            allChampions_item.cost === 1
                              ? "3px solid gray"
                              : allChampions_item.cost === 2
                              ? "3px solid green"
                              : allChampions_item.cost === 3
                              ? "3px solid blue"
                              : allChampions_item.cost === 4
                              ? "3px solid purple"
                              : allChampions_item.cost === 5
                              ? "3px solid gold": "3px solid black"
                          }
                          borderRadius={"2xl"}
                          position={"relative"}>

                    <Image w={"full"}
                            h={"full"}
                            rounded={"12px"} src={allChampions_item.photos[0].file} />
 
                    <Box
                    position={"absolute"} // 부모 요소를 기준으로 절대적으로 위치
                    top={0} // 부모 요소의 위쪽에 배치
                    right={0} // 부모 요소의 오른쪽에 배치
                    bg={
                      allChampions_item.cost === 1
                        ? "gray"
                        : allChampions_item.cost === 2
                        ? "green"
                        : allChampions_item.cost === 3
                        ? "blue"
                        : allChampions_item.cost === 4
                        ? "purple"
                        : allChampions_item.cost === 5
                        ? "gold"
                        : undefined
                    } // 배경색 지정
                    pl={1}
                    pr={1}
                    roundedTopRight={"10px"} // 라운드 처리
                    >
                    <Text textShadow="1px 0px 2px black" fontSize={"13px"} color={"white"}>${allChampions_item.cost}</Text>
                    </Box>
                    <HStack justifyContent={"center"} >
                    <Text textShadow="1px 0px 2px black" position={"relative"} bottom={"20px"} fontSize={"13px"} color={"white"}>{allChampions_item.name}</Text>
                    </HStack>
                  </Box>
                  </Tooltip>
                </>
                }} ))}
            </HStack>
          <Text as={'b'}>{job_obj.description}</Text>

          </VStack>
          </HStack>
        )}

      </VStack>
    </VStack>
  );
}
