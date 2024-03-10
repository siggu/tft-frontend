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

  // 각 origin과 job의 이미지 및 개수를 가져오는 함수
  const getUniqueImagesWithCount = (champions: any[], key: string) => {
    const uniqueImagesMap = new Map(); // 이미지를 키로 사용하여 개수를 카운트하는 Map 생성

    champions.forEach(
      (champion: { [x: string]: { photos: { file: any }[] }[] }) => {
        const image = champion[key][0].photos[0].file;
        if (!uniqueImagesMap.has(image)) {
          uniqueImagesMap.set(image, 1); // 이미지가 없다면 개수를 1로 초기화
        } else {
          uniqueImagesMap.set(image, uniqueImagesMap.get(image) + 1); // 이미지가 이미 있다면 개수 증가
        }
      }
    );

    return Array.from(uniqueImagesMap); // Map을 배열로 변환하여 반환
  };

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
              {/* origin 이미지와 개수 표시 */}
              {getUniqueImagesWithCount(comp.champions, "origin").map(
                ([image, count], index) => (
                  <Box
                    w="45px"
                    h="45px"
                    position="relative"
                    clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    key={`origin-${index}`}
                  >
                    {count >= 7 ? (
                      <Image bgColor={"#fce47e"} src={image} />
                    ) : count >= 5 ? (
                      <Image bgColor={"#bcd8dc"} src={image} />
                    ) : count >= 3 ? (
                      <Image bgColor={"#d07c47"} src={image} />
                    ) : (
                      <Image bgColor={"gray"} src={image} />
                    )}
                  </Box>
                )
              )}
              {/* job 이미지와 개수 표시 */}
              {getUniqueImagesWithCount(comp.champions, "job").map(
                ([image, count], index) => (
                  <Box
                    w="45px"
                    h="45px"
                    position="relative"
                    clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    key={`origin-${index}`}
                  >
                    {count >= 5 ? (
                      <Image bgColor={"#fce47e"} src={image} />
                    ) : count >= 3 ? (
                      <Image bgColor={"#bcd8dc"} src={image} />
                    ) : count >= 2 ? (
                      <Image bgColor={"#d07c47"} src={image} />
                    ) : (
                      <Image bgColor={"gray"} src={image} />
                    )}
                  </Box>
                )
              )}
              {/* 챔피언 이미지 표시 */}
              {comp.champions
                .slice()
                .sort((a, b) => a.cost - b.cost)
                .map((champion) => (
                  <Tooltip
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
                            <Text color={"orange"}>{champion.skill.name}</Text>
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
                      bg={"transparent"}
                      border={
                        champion.cost === 1
                          ? "2px solid gray"
                          : champion.cost === 2
                          ? "2px solid green"
                          : champion.cost === 3
                          ? "2px solid blue"
                          : champion.cost === 4
                          ? "2px solid purple"
                          : champion.cost === 5
                          ? "2px solid gold"
                          : undefined
                      }
                      borderRadius={"2xl"}
                      position={"relative"}
                    >
                      <Image
                        w={"full"}
                        h={"full"}
                        src={champion.photos[0].file}
                        rounded={"2xl"}
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
                        roundedBottomLeft={"md"} // 라운드 처리
                        roundedTopRight={"2xl"} // 라운드 처리
                      >
                        <Text fontSize={"13px"} color={"white"}>
                          ${champion.cost}
                        </Text>
                      </Box>
                    </Box>
                  </Tooltip>
                ))}
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
