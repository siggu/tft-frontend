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
import { getComps } from "../api";
import IComp from "../components/types";
import { FaCoins } from "react-icons/fa";

export default function Home() {
  const { data, isLoading } = useQuery<IComp[]>({
    queryKey: ["comps"],
    queryFn: getComps,
  });
  let originStack: string[] = [];
  let jobStack: string[] = [];

  // origin과 job의 총 개수 저장
  let originAndJobCounts: { [key: string]: number } = {};

  if (!isLoading && data) {
    originAndJobCounts = {};
    data.forEach((comp) => {
      comp.champions.forEach((champion) => {
        // origin 개수 계산
        champion.origin.forEach((origin: { name: string }) => {
          if (originAndJobCounts[origin.name]) {
            originAndJobCounts[origin.name]++;
          } else {
            originAndJobCounts[origin.name] = 1;
          }
        });

        // job 개수 계산
        champion.job.forEach((job: { name: string }) => {
          if (originAndJobCounts[job.name]) {
            originAndJobCounts[job.name]++;
          } else {
            originAndJobCounts[job.name] = 1;
          }
        });
      });
    });
  }

  // console.log(data?.[0].champions[0].origin[0].photos[0].file);
  // console.log(originAndJobCounts);
  return (
    <VStack gap={20}>
      <Container maxW={"max-content"}>
        <Text>검색창</Text>
      </Container>
      <Container maxW={"container.xl"}>
        <Box mb={5}>
          <Text as={"b"} color={"red"} fontSize={"20px"}>
            추천 메타
          </Text>
        </Box>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          data?.map((comp) => (
            <HStack
              position={"relative"}
              bg={"gray.700"}
              p={5}
              m={2}
              key={comp.pk}
              gap={10}
            >
              <Box w={"150px"}>
                <Text color={"white"} fontSize={"15px"}>
                  {comp.name}
                </Text>
              </Box>
              <VStack gap={3} alignItems={"flex-start"}>
                <HStack gap={0}>
                  {comp.champions.map((champion) => (
                    <>
                      {champion.origin.map(
                        (
                          origin: {
                            name: string;
                            description: string;
                            effect: string;
                            photos: { file: string | undefined }[];
                          },
                          index: any
                        ) => {
                          if (originStack.includes(origin.name)) return null;
                          originStack.push(origin.name);
                          return (
                            <Tooltip
                              hasArrow
                              w={"300px"}
                              label={
                                <VStack
                                  gap={3}
                                  alignItems={"flex-start"}
                                  w={"280px"}
                                >
                                  <HStack>
                                    <Text as={"b"}>{origin.name}</Text>
                                  </HStack>
                                  <VStack>
                                    <Text>{origin.description}</Text>
                                  </VStack>
                                  <VStack>
                                    <Text>{origin.effect}</Text>
                                  </VStack>
                                </VStack>
                              }
                              bg={"black"}
                              rounded={"md"}
                              p={3}
                            >
                              <HStack>
                                <Image
                                  key={`${comp.pk}-${champion.pk}-origin-${index}`}
                                  p={1}
                                  w={"30px"}
                                  rounded={"10px"}
                                  bg={
                                    originAndJobCounts[origin.name] >= 7
                                      ? "#f8de7b"
                                      : originAndJobCounts[origin.name] >= 5
                                      ? "silver"
                                      : originAndJobCounts[origin.name] > 3
                                      ? "#ea8c52"
                                      : "gray"
                                  }
                                  src={origin.photos[0].file}
                                  position={"relative"}
                                />
                                <Box
                                  left={-3}
                                  h={"20px"}
                                  pr={1}
                                  pl={1}
                                  pb={6}
                                  roundedRight={"5px"}
                                  position={"relative"}
                                  color={"white"}
                                  bg={
                                    originAndJobCounts[origin.name] >= 7
                                      ? "#f8de7b"
                                      : originAndJobCounts[origin.name] >= 5
                                      ? "silver"
                                      : originAndJobCounts[origin.name] > 3
                                      ? "#ea8c52"
                                      : "gray"
                                  }
                                >
                                  <Text fontSize={"13px"}>
                                    {originAndJobCounts[origin.name]}
                                  </Text>
                                </Box>
                              </HStack>
                            </Tooltip>
                          );
                        }
                      )}
                      {champion.job.map(
                        (
                          job: {
                            name: string;
                            description: string;
                            effect: string;
                            photos: { file: string | undefined }[];
                          },
                          index: any
                        ) => {
                          if (jobStack.includes(job.name)) return null;
                          jobStack.push(job.name);
                          return (
                            <Tooltip
                              hasArrow
                              w={"300px"}
                              label={
                                <VStack
                                  gap={3}
                                  alignItems={"flex-start"}
                                  w={"280px"}
                                >
                                  <HStack>
                                    <Text as={"b"}>{job.name}</Text>
                                  </HStack>
                                  <VStack>
                                    <Text>{job.description}</Text>
                                  </VStack>
                                  <VStack>
                                    <Text>{job.effect}</Text>
                                  </VStack>
                                </VStack>
                              }
                              bg={"black"}
                              rounded={"md"}
                              p={3}
                            >
                              <HStack>
                                <Image
                                  key={`${comp.pk}-${champion.pk}-job-${index}`}
                                  p={1}
                                  w={"30px"}
                                  rounded={"10px"}
                                  bg={
                                    originAndJobCounts[job.name] >= 7
                                      ? "gold"
                                      : originAndJobCounts[job.name] >= 5
                                      ? "silver"
                                      : originAndJobCounts[job.name] >= 2
                                      ? "#ea8c52"
                                      : "gray"
                                  }
                                  src={job.photos[0].file}
                                />
                                <Box
                                  left={-3}
                                  h={"20px"}
                                  pr={1}
                                  pl={1}
                                  pb={6}
                                  roundedRight={"5px"}
                                  position={"relative"}
                                  color={"white"}
                                  bg={
                                    originAndJobCounts[job.name] >= 7
                                      ? "gold"
                                      : originAndJobCounts[job.name] >= 5
                                      ? "silver"
                                      : originAndJobCounts[job.name] >= 2
                                      ? "#ea8c52"
                                      : "gray"
                                  }
                                >
                                  <Text fontSize={"13px"}>
                                    {originAndJobCounts[job.name]}
                                  </Text>
                                </Box>
                              </HStack>
                            </Tooltip>
                          );
                        }
                      )}
                    </>
                  ))}
                </HStack>
                <HStack>
                  {/* 챔피언 이미지 표시 */}
                  {comp.champions
                    .slice()
                    .sort((a, b) => a.cost - b.cost)
                    .map((champion) => (
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
                            <Text fontSize={"13px"} color={"white"}>
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
                <Text color={"white"} fontSize={"13px"}>
                  공략 더 보기
                </Text>
              </Box>
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
