import { Text, VStack, Image, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
    <Link to={`/profile/${gameName}/${tagLine}`}>
      <HStack
        w={"350px"}
        h={"100px"}
        mb={"300px"}
        backgroundColor="#25262a"
        justifyContent={"space-around"}
        borderRadius={"20px"}
      >
        <Image
          borderStyle={"10px black solid"}
          borderRadius={"full"}
          w={"70px"}
          h={"70px"}
          src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/profileicon/${profileIconId}.png`}
        />
        <VStack>
          <HStack color={"white"}>
            <Text fontSize={"24px"}>{gameName}</Text>
            <Text fontSize={"16px"}>{tagLine}</Text>
          </HStack>
          <Text color={"white"} fontSize={"16px"}>
            LV. {summonerLevel}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
}
