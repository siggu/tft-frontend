import { Box, Container, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getComps } from "../api";
import IComp from "../components/types";

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
                  <Image
                    w={"60px"}
                    h={"60px"}
                    key={champion.id}
                    src={champion.photos[0].file}
                  />
                ))}
            </HStack>
          ))
        )}
      </Container>
    </VStack>
  );
}
