import { Text, VStack, Image, HStack } from "@chakra-ui/react";

interface IProfileMiniBox {
  puuid: string | undefined;
  gameName: string | undefined;
  tagLine: string | undefined;
  accountId: string | undefined;
  profileIconId: number | undefined;
  summonerId: string | undefined;
  summonerLevel: number | undefined;
}
export default function ProfileMiniBox({
  puuid,
  gameName,
  tagLine,
  accountId,
  profileIconId,
  summonerId,
  summonerLevel,
}: IProfileMiniBox) {
  return (
    <HStack w={"400px"} h={"200px"} mb={"300px"}>
      <Image
        borderRadius={"10px"}
        w={"70px"}
        h={"70px"}
        src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${profileIconId}.png`}
      />
      <VStack>
        <HStack color={"white"}>
          <Text fontSize={"24px"}>{gameName}</Text>
          <Text fontSize={"16px"}>{tagLine}</Text>
        </HStack>
        <Text color={"gray"} fontSize={"16px"}>
          LV. {summonerLevel}
        </Text>
      </VStack>
    </HStack>
  );
}
