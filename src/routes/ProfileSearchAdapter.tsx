import { useState, useEffect } from "react";
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
import { getSummonerData, postSummonerData } from "../api";

export default function ProfileSearchAdapter() {
  const { gameName, tagLine } = useParams();
  const { data: summonerData, isLoading: isSummonerDataLoading } =
    useQuery<IProfileMiniBox>({
      queryKey: ["", gameName, tagLine],
      queryFn: getSummonerData,
    });
  // 로컬 state로 summonerData를 관리
  const [localSummonerData, setLocalSummonerData] = useState(summonerData);

  // summonerData가 변경될 때마다 로컬 state를 업데이트
  useEffect(() => {
    if (summonerData) {
      setLocalSummonerData(summonerData);
    }
  }, [summonerData]);

  console.log("summonerData", summonerData);
  console.log("isSummonerDataLoading", isSummonerDataLoading);
  console.log("localSummonerData", localSummonerData);

  return (
    <VStack>
      {!localSummonerData ? (
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
