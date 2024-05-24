import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Grid,
  Text,
  VStack,
  Image,
  HStack,
  Container,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import ProfileMiniBox from "../components/ProfileMiniBox";
import { useParams } from "react-router-dom";
import IProfileMiniBox from "../components/types";
import { getSummonerData } from "../api";

export default function ProfileSearchAdapter() {
  const { gameName, tagLine } = useParams();
  const { data: summonerData, isLoading: isSummonerDataLoading } =
    useQuery<IProfileMiniBox>({
      queryKey: ["", gameName, tagLine],
      queryFn: getSummonerData,
    });
  console.log(summonerData);
  console.log("isSummonerDataLoading", isSummonerDataLoading);

  return (
    <VStack>
      {!summonerData ? (
        <HStack w={"400px"} h={"200px"} mb={"300px"}>
          <Skeleton borderRadius={"10px"} w={"70px"} h={"70px"} />
          <VStack>
            <HStack color={"white"}>
              <SkeletonText fontSize={"24px"}>{gameName}</SkeletonText>
            </HStack>
          </VStack>
        </HStack>
      ) : (
        <ProfileMiniBox
          puuid={summonerData?.puuid}
          gameName={gameName}
          tagLine={tagLine}
          accountId={summonerData?.accountId}
          profileIconId={summonerData?.profileIconId}
          summonerId={summonerData?.summonerId}
          summonerLevel={summonerData?.summonerLevel}
        />
      )}
    </VStack>
  );
}
