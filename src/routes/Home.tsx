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

  // origin, job 이름 저장
  let originStack: string[] = [];
  let jobStack: string[] = [];

  // origin과 job의 총 개수 저장
  const originAndJobCounts: { [key: string]: number } = {};
  /////////////////////////////////////////////////////////////////



  //

  const synergiesArr: { [key: string]: number }[][] = [];

  data?.forEach((comp) => {
    const compArray: { [key: string]: number }[] = [];
    const counts: { [key: string]: number } = {}; // 각 originByChampion.name 별로 count를 저장하는 객체
  
    comp.champions.forEach((championByComp) => {
      championByComp.origin.forEach((originByChampion: { name: string }) => {
        // originByChampion.name이 이미 counts 객체에 존재한다면 count를 증가시키고,
        if(counts[originByChampion.name]){
          counts[originByChampion.name]++
        }else{
          // 존재하지 않는다면 새로운 키를 생성하고 count를 1로 초기화합니다.
          counts[originByChampion.name] = 1
        }
      });
      championByComp.job.forEach((jobByChampion: { name: string }) => {
        // jobByChampion.name이 이미 counts 객체에 존재한다면 count를 증가시키고,
        if(counts[jobByChampion.name]){
          counts[jobByChampion.name]++
        }else{
          // 존재하지 않는다면 새로운 키를 생성하고 count를 1로 초기화합니다.
          counts[jobByChampion.name] = 1
        }
      });
    });
    // 등장 횟수로 내림차순 정렬
    const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]); 
    sortedEntries.forEach(([name, count]) => {
    const entry: { [key: string]: number } = {};
    entry[name] = count;
    compArray.push(entry);
  });
    synergiesArr.push(compArray);
  });
  console.log(synergiesArr)
  
  
  
  
  
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
          
          data?.map((comp,index) => (
            
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
                {/* 시너지 표시 */}
                <HStack gap={0}>

                  
                  {originStack=[]}
                  {jobStack=[]}
                  {originAndJobCounts.length = 0}          
                  {
                    comp.champions.map((champion) =>
                    <HStack>
                    {
                      champion.origin.map((originByChampion:{name:string}) =>
                      {
                        if(originAndJobCounts[originByChampion.name]){
                          return(originAndJobCounts[originByChampion.name]++)
                        }originAndJobCounts[originByChampion.name]=1
                      })
                    }
                    {
                      champion.job.map((jobByChampion:{name:string}) =>
                      {
                        if(originAndJobCounts[jobByChampion.name]){
                          return(originAndJobCounts[jobByChampion.name]++)
                        }originAndJobCounts[jobByChampion.name]=1
                      })
                    }
                    {}

                    
                    </HStack>
                    
                    
                  )}
                  
                
                  {comp.champions.map((champion) => ( 
                    <>

                    
                      {/* 계열 표시 */}
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
                      {/* 직업 표시 */}
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
                            <Text textShadow="1px 0px 2px black" fontSize={"13px"} color={"white"}>
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
