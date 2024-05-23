import {Text, VStack, Image, HStack} from '@chakra-ui/react';

interface IProfileMiniBox {
  puuid: string;
  gameName: string;
  tagLine: string;
  accountId: string;
  profileIconId: number;
  summonerId: string;
  summonerLevel: number;
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
    <HStack>
      <Image
        borderRadius={'10px'}
        w={'40px'}
        h={'40px'}
        src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/${profileIconId}.png`}
      />
      <VStack>
        <HStack color={'white'}>
          <Text fontSize={'20px'}>{gameName}</Text>
          <Text fontSize={'14px'}>{tagLine}</Text>
        </HStack>
        <Text color={'gray'} fontSize={'14px'}>
          {summonerLevel}
        </Text>
      </VStack>
    </HStack>
  );
}
