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
  // orign 사진
  // console.log(data?.[0].champions[0].origin[0].photos[0].file);
  const originCounts: { [key: string]: number } = {};
  const jobCounts: { [key: string]: number } = {};

  // origin과 job의 총 개수 저장
  const originAndJobCounts: { [key: string]: number } = {};

  if (!isLoading && data) {
    data.forEach((comp) => {
      comp.champions.forEach((champion) => {
        // origin 개수 계산
        champion.origin.forEach((origin: { name: string | number }) => {
          if (originAndJobCounts[origin.name]) {
            originAndJobCounts[origin.name]++;
          } else {
            originAndJobCounts[origin.name] = 1;
          }
        });

        // job 개수 계산
        champion.job.forEach((job: { name: string | number }) => {
          if (originAndJobCounts[job.name]) {
            originAndJobCounts[job.name]++;
          } else {
            originAndJobCounts[job.name] = 1;
          }
        });
      });
    });
  }
  const sortedOriginAndJobCounts = Object.entries(originAndJobCounts).sort(
    (a, b) => b[1] - a[1]
  );

  // 정렬된 결과 출력
  // console.log("Origin과 Job 개수 (정렬 후):", sortedOriginAndJobCounts);
  sortedOriginAndJobCounts.map(([name, count]) => {
    console.log(`Name: ${name}, Count: ${count}`);
  });
  return (
    <VStack gap={20}>
      <Container maxW={"max-content"}>
        <Text>검색창</Text>
      </Container>
      <Container maxW={"container.xl"}>
        <Box>
          <h3>추천메타</h3>
        </Box>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          data?.map((comp) => (
            <HStack key={comp.pk}>
              <Text>{comp.name}</Text>
              <VStack>
                <Box></Box>
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
                                  src={champion.job[0].photos[0].file}
                                />
                                <Text>{champion.job[0].name}</Text>
                              </HStack>
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
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
