import {
  Box,
  Container,
  HStack,
  Text,
  VStack,
  Image,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getComps, getSynergyJobs, getSynergyOrigins } from "../api";
import IComp from "../components/types";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  // synergy origins api - get
  const { data: compData, isLoading: compIsLoading } = useQuery<IComp[]>({
    queryKey: ["comps"],
    queryFn: getComps,
  });
  // synergy origins api - get
  const { data: originData, isLoading: originIsLoading } = useQuery<IComp[]>({
    queryKey: ["origins"],
    queryFn: getSynergyOrigins,
  });
  // synergy jobs api - get
  const { data: jobData, isLoading: jobIsLoading } = useQuery<IComp[]>({
    queryKey: ["jobs"],
    queryFn: getSynergyJobs,
  });

  const synergiesArr: {
    synergyName: string;
    frequency: number;
    description: string;
    effect: string;
    photo: string;
  }[][] = [];

  compData?.forEach((comp) => {
    const compArray: {
      synergyName: string;
      frequency: number;
      description: string;
      effect: string;
      photo: string;
    }[] = [];
    const counts: { [key: string]: number } = {};

    comp.champions.forEach((championByComp) => {
      championByComp.origin.forEach((originByChampion: { name: string }) => {
        if (counts[originByChampion.name]) {
          counts[originByChampion.name]++;
        } else {
          counts[originByChampion.name] = 1;
        }
      });
      championByComp.job.forEach((jobByChampion: { name: string }) => {
        if (counts[jobByChampion.name]) {
          counts[jobByChampion.name]++;
        } else {
          counts[jobByChampion.name] = 1;
        }
      });
    });

    const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    sortedEntries.forEach(([name, count]) => {
      let entry = {
        synergyName: name,
        frequency: count,
        description: "",
        effect: "",
        photo: "",
      };

      originData?.forEach((origin_ele) => {
        if (origin_ele.name === name) {
          entry = {
            synergyName: name,
            frequency: count,
            description: origin_ele.description,
            effect: origin_ele.effect,
            photo: origin_ele.photos[1]?.file,
          };
        }
      });
      jobData?.forEach((job_ele) => {
        if (job_ele.name === name) {
          entry = {
            synergyName: name,
            frequency: count,
            description: job_ele.description,
            effect: job_ele.effect,
            photo: job_ele.photos[1]?.file,
          };
        }
      });
      compArray.push(entry);
    });
    synergiesArr.push(compArray);
  });

  console.log("내가 정리한 시너지", synergiesArr);

  return (
    <VStack gap={20}>
      <Container maxW={"container.xl"}>
        <Box mb={5}>
          <Text as={"b"} color={"#dca555"} fontSize={"20px"}>
            추천 메타
          </Text>
        </Box>
        {compIsLoading ? (
          <Text>Loading...</Text>
        ) : (
          compData?.map((comp, comp_index) => (
            <HStack
              position={"relative"}
              bg={"#27282e"}
              p={5}
              m={2}
              key={comp.pk}
              gap={10}
            >
              {/* # 1. 추천메타 명 */}
              <Box w={"150px"}>
                <Text color={"white"} fontSize={"15px"}>
                  {comp.name}
                </Text>
              </Box>
              {/* # 2. 시너지와 챔피언 초상화 표시 */}
              <VStack gap={3} alignItems={"flex-start"}>
                {/* # 2.1 시너지 표시 */}
                <HStack>
                  {synergiesArr[comp_index].map((compSynergies_ele) => (
                    <>
                      <Tooltip
                        hasArrow
                        w={"300px"}
                        label={
                          <VStack gap={3} alignItems={"flex-start"} w={"280px"}>
                            <HStack>
                              <Text as={"b"}>
                                {compSynergies_ele.synergyName}
                              </Text>
                            </HStack>
                            <VStack>
                              <Text>{compSynergies_ele.description}</Text>
                            </VStack>
                            <VStack>
                              <Text>{compSynergies_ele.effect}</Text>
                            </VStack>
                          </VStack>
                        }
                        bg={"black"}
                        rounded={"md"}
                        p={3}
                      >
                        <HStack>
                          <Image
                            p={1}
                            w={"30px"}
                            rounded={"10px"}
                            bgGradient={
                              compSynergies_ele.frequency >= 6
                                ? "linear(#d1bc69, #f6da75, #a58735)"
                                : compSynergies_ele.frequency >= 4
                                ? "linear(#9ab3b9, #b3ced2, #8aa1a4)"
                                : compSynergies_ele.frequency >= 2
                                ? "linear(#c77743, #d97e40, #9b561d)"
                                : "linear(#646464,#646464)"
                            }
                            position={"relative"}
                            src={compSynergies_ele.photo}
                          />
                          <Box
                            left={-3}
                            h={"20px"}
                            pr={1}
                            pl={1}
                            pb={6}
                            roundedRight={"5px"}
                            position={"relative"}
                            bgGradient={
                              compSynergies_ele.frequency >= 6
                                ? "linear(#d1bc69, #f6da75, #a58735)"
                                : compSynergies_ele.frequency >= 4
                                ? "linear(#9ab3b9, #b3ced2, #8aa1a4)"
                                : compSynergies_ele.frequency >= 2
                                ? "linear(#c77743, #d97e40, #9b561d)"
                                : "linear(#646464,#646464)"
                            }
                          >
                            <Text fontSize={"13px"} as={"b"}>
                              {compSynergies_ele.frequency}
                            </Text>
                          </Box>
                        </HStack>
                      </Tooltip>
                    </>
                  ))}
                </HStack>

                {/* 챔피언 이미지 표시 */}
                <HStack>
                  {comp.champions
                    .slice()
                    .sort((a, b) => a.cost - b.cost)
                    .map((champion) => (
                      <Tooltip
                        hasArrow
                        label={
                          // 마우스 오버 시 툴팁 생성
                          <VStack
                            as={"b"}
                            gap={3}
                            alignItems={"flex-start"}
                            w={"300px"}
                          >
                            <HStack>
                              <Text>{champion.name}</Text>
                              <HStack>
                                <Box color={"yellow.400"}>
                                  <FaCoins />
                                </Box>
                                <Text>{champion.cost}</Text>
                              </HStack>
                            </HStack>
                            <VStack alignItems={"flex-start"}>
                              {champion.origin.length === 1 ? (
                                <HStack>
                                  <Image
                                    width={"25px"}
                                    src={champion.origin[0].photos[0].file}
                                  />
                                  <Text>{champion.origin[0].name}</Text>
                                </HStack>
                              ) : (
                                <>
                                  <HStack>
                                    <Image
                                      width={"25px"}
                                      src={champion.origin[0].photos[0].file}
                                    />
                                    <Text>{champion.origin[0].name}</Text>
                                  </HStack>
                                  <HStack>
                                    <Image
                                      width={"25px"}
                                      src={champion.origin[1].photos[0].file}
                                    />
                                    <Text>{champion.origin[1].name}</Text>
                                  </HStack>
                                </>
                              )}
                              {champion.job.length === 1 ? (
                                <HStack>
                                  <Image
                                    width={"25px"}
                                    src={champion.job[0].photos[0].file}
                                  />
                                  <Text>{champion.job[0].name}</Text>
                                </HStack>
                              ) : (
                                <>
                                  <HStack>
                                    <Image
                                      width={"25px"}
                                      src={champion.job[0].photos[0].file}
                                    />
                                    <Text>{champion.job[0].name}</Text>
                                  </HStack>
                                  <HStack>
                                    <Image
                                      width={"25px"}
                                      src={champion.job[1].photos[0].file}
                                    />
                                    <Text>{champion.job[1].name}</Text>
                                  </HStack>
                                </>
                              )}
                            </VStack>
                            <HStack alignItems={"flex-start"}>
                              <Text>공격 사거리: {champion.attack_range}</Text>
                            </HStack>
                            <HStack>
                              <Image
                                w={"40px"}
                                src={champion.skill.photos[0].file}
                              />
                              <VStack gap={0} alignItems={"flex-start"}>
                                <Text color={"orange"}>
                                  {champion.skill.name}
                                </Text>
                                <Text>
                                  마나: {champion.skill.start_mana}/
                                  {champion.skill.max_mana}
                                </Text>
                              </VStack>
                            </HStack>
                            <VStack>
                              <Text color={"gray"}>
                                {champion.skill.description}
                              </Text>
                            </VStack>
                            <VStack>
                              <Text>{champion.skill.effect}</Text>
                            </VStack>
                          </VStack>
                        }
                        bg={"black"}
                        rounded={"md"}
                        p={3}
                      >
                        {/* 챔피언 초상화 */}
                        <Box
                          w={"60px"}
                          h={"60px"}
                          border={
                            champion.cost === 1
                              ? "3px solid gray"
                              : champion.cost === 2
                              ? "3px solid green"
                              : champion.cost === 3
                              ? "3px solid blue"
                              : champion.cost === 4
                              ? "3px solid purple"
                              : champion.cost === 5
                              ? "3px solid gold"
                              : undefined
                          }
                          borderRadius={"2xl"}
                          position={"relative"}
                        >
                          <Image
                            w={"full"}
                            h={"full"}
                            src={champion.photos[0].file}
                            rounded={"12px"}
                          />
                          <Box
                            position={"absolute"} // 부모 요소를 기준으로 절대적으로 위치
                            top={0} // 부모 요소의 위쪽에 배치
                            right={0} // 부모 요소의 오른쪽에 배치
                            bg={
                              champion.cost === 1
                                ? "gray"
                                : champion.cost === 2
                                ? "green"
                                : champion.cost === 3
                                ? "blue"
                                : champion.cost === 4
                                ? "purple"
                                : champion.cost === 5
                                ? "gold"
                                : undefined
                            } // 배경색 지정
                            pl={1}
                            pr={1}
                            roundedTopRight={"10px"} // 라운드 처리
                          >
                            <Text
                              textShadow="1px 0px 2px black"
                              fontSize={"13px"}
                              color={"white"}
                            >
                              ${champion.cost}
                            </Text>
                          </Box>
                        </Box>
                      </Tooltip>
                    ))}
                </HStack>
              </VStack>
              <Box
                position={"absolute"}
                right={5}
                p={3}
                border={"1px solid white"}
              >
                <Link to={"/comps/1"}>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    color={"white"}
                    fontSize={"13px"}
                  >
                    공략 더 보기
                  </Text>
                </Link>
              </Box>
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
