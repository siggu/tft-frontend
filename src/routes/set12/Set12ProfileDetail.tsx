import { Box, Container, HStack, Image, SkeletonText, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import {
  getSet12LeagueEntries,
  getSet12badMatchesByPuuid,
  getSet12MatchesByPuuid,
  getSet12SummonerData,
  getSet12Items,
  getSet12Champions,
  getSet12Augments,
  getSet12Synergies,
} from '../../set12api';
import { useParams } from 'react-router-dom';
import IMatch from '../../components/types';
import ISynergy from '../../components/types';
import IAugments from '../../components/types';

type TraitPlacement = Record<string, number>;
type UnitPlacement = Record<string, number>;
type AugmentUsage = Record<string, number>;
type ItemUsage = Record<string, number>;

const countTraits = (participants: any[], synergyMap: Record<string, string>): TraitPlacement => {
  const traitCount: TraitPlacement = {};
  participants.forEach((participant) => {
    participant.traits.forEach((trait: any) => {
      const traitName = synergyMap[trait.name] || trait.name;
      traitCount[traitName] = (traitCount[traitName] || 0) + 1;
    });
  });
  return traitCount;
};

const countUnitsAndItems = (
  participants: any[],
  championMap: Record<string, string>,
  itemMap: Record<string, string>
): { unitCount: UnitPlacement; itemCount: ItemUsage } => {
  const unitCount: UnitPlacement = {};
  const itemCount: ItemUsage = {};

  participants.forEach((participant) => {
    participant.units.forEach((unit: any) => {
      const unitName = championMap[unit.character_id] || unit.character_id;
      unitCount[unitName] = (unitCount[unitName] || 0) + 1;

      unit.itemNames.forEach((item: string) => {
        const itemName = itemMap[item] || item;
        itemCount[itemName] = (itemCount[itemName] || 0) + 1;
      });
    });
  });

  return { unitCount, itemCount };
};

const countAugments = (participants: any[], augmentMap: Record<string, string>): AugmentUsage => {
  const augmentCount: AugmentUsage = {};
  participants.forEach((participant) => {
    participant.augments.forEach((augment: string) => {
      const augmentName = augmentMap[augment] || augment;
      augmentCount[augmentName] = (augmentCount[augmentName] || 0) + 1;
    });
  });
  return augmentCount;
};

export default function Set12ProfileDetail() {
  const { gameName, tagLine } = useParams();

  const { data: summonerData, isLoading: isSummonerDataLoading } = useQuery({
    queryKey: ['summonerData', gameName, tagLine],
    queryFn: getSet12SummonerData,
    enabled: !!gameName && !!tagLine,
  });

  const summonerId = summonerData?.summonerId || '';
  const puuid = summonerData?.puuid || '';

  const { data: leagueEntryData, isLoading: isLeagueEntryDataLoading } = useQuery({
    queryKey: ['leagueEntryData', summonerId],
    queryFn: getSet12LeagueEntries,
    enabled: !!summonerId,
  });

  const { data: badMatchesByPuuidData, isLoading: isBadMatchesByPuuidData } = useQuery<IMatch[]>({
    queryKey: ['badMatchesByPuuidData', puuid],
    queryFn: getSet12badMatchesByPuuid,
    enabled: !!puuid,
  });

  const { data: synergiesData, isLoading: isSynergiesDataLoading } = useQuery<ISynergy[]>({
    queryKey: ['synergy'],
    queryFn: getSet12Synergies,
  });
  const { data: augmentsData, isLoading: isAugmentsDataLoading } = useQuery<IAugments[]>({
    queryKey: ['augment'],
    queryFn: getSet12Augments,
  });
  const { data: chamiponsData, isLoading: isChampionsDataLoading } = useQuery({
    queryKey: ['champions'],
    queryFn: getSet12Champions,
  });
  const { data: itemsData, isLoading: isItemsDataLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getSet12Items,
  });

  const getTierImageSrc = (tier: string) => {
    const baseUrl = 'https://cdn.metatft.com/file/metatft/ranks/wings_';
    const validTiers = [
      'bronze',
      'silver',
      'gold',
      'platinum',
      'emerald',
      'diamond',
      'master',
      'grandmaster',
      'challenger',
    ];

    const lowerCaseTier = tier?.toLowerCase();
    return validTiers.includes(lowerCaseTier) ? `${baseUrl}${lowerCaseTier}.png` : '';
  };

  // const championMap =
  //   chamiponsData?.reduce((map: Record<string, string>, champion: any) => {
  //     map[champion.ingameKey] = champion.name;
  //     return map;
  //   }, {} as Record<string, string>) || {};

  const championMap =
    chamiponsData?.reduce((map: Record<string, string>, champion: any) => {
      map[champion.ingameKey] = champion.name;
      return map;
    }, {} as Record<string, string>) || {};

  const itemMap =
    itemsData?.reduce((map: Record<string, string>, item: any) => {
      map[item.ingameKey] = item.name;
      return map;
    }, {} as Record<string, string>) || {};

  const synergyMap =
    synergiesData?.reduce((map: Record<string, string>, synergy: any) => {
      map[synergy.ingameKey] = synergy.name;
      return map;
    }, {} as Record<string, string>) || {};

  const augmentMap =
    augmentsData?.reduce((map: Record<string, string>, augment: any) => {
      map[augment.ingameKey] = augment.name;
      return map;
    }, {} as Record<string, string>) || {};

  const allParticipants = badMatchesByPuuidData?.flatMap((match) => match.match_detail.info.participants) || [];

  const traitCounts = countTraits(allParticipants, synergyMap);
  const augmentCounts = countAugments(allParticipants, augmentMap);
  const { unitCount, itemCount } = countUnitsAndItems(allParticipants, championMap, itemMap);

  return (
    <VStack>
      {/* Existing profile and league info */}
      <HStack display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} textColor={'white'}>
        <Box
          mt={20}
          mb={20}
          w="300px"
          position={'relative'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {/* Tier Image */}
          <Image top={-180} position={'absolute'} w={'300px'} src={getTierImageSrc(leagueEntryData?.tier || '')} />
          {/* Summoner Profile Icon */}
          <Image
            borderRadius="full"
            w="100px"
            h="100px"
            src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/profileicon/${summonerData?.profileIconId}.png`}
            alt="Profile Icon"
          />
        </Box>
        <VStack alignItems="flex-start">
          <HStack>
            <Text>{summonerData?.gameName}</Text>
            <Text>{summonerData?.tagLine}</Text>
          </HStack>
          {isLeagueEntryDataLoading && !leagueEntryData ? (
            <HStack>
              <SkeletonText fontSize="24px"></SkeletonText>
              <SkeletonText fontSize="24px"></SkeletonText>
            </HStack>
          ) : (
            <>
              {leagueEntryData?.rank ? (
                <>
                  <HStack>
                    <Text>{leagueEntryData?.tier}</Text>
                    <Text>{leagueEntryData?.rank}</Text>
                    <Text>{leagueEntryData?.leaguePoints} p</Text>
                  </HStack>
                  <HStack>
                    <Text>승 - {leagueEntryData?.wins}</Text>
                    <Text>패 - {leagueEntryData?.losses}</Text>
                  </HStack>
                </>
              ) : (
                <HStack>
                  <Text>UnRanked</Text>
                </HStack>
              )}
            </>
          )}
        </VStack>
      </HStack>

      <VStack>
        {/* Display the trait counts */}
        <Box>
          <Text color={'white'}>Trait Usage:</Text>
          {Object.entries(traitCounts)
            .sort(([, countA], [, countB]) => countB - countA)
            .map(([trait, count]) => (
              <Text key={trait} color={'white'}>
                {trait}: {count} 번
              </Text>
            ))}
        </Box>

        {/* Display the augment counts */}
        <Box>
          <Text color={'white'}>Augment Usage:</Text>
          {Object.entries(augmentCounts)
            .sort(([, countA], [, countB]) => countB - countA)
            .map(([augment, count]) => (
              <Text key={augment} color={'white'}>
                {augment}: {count} 번
              </Text>
            ))}
        </Box>

        {/* Display the unit counts */}
        <Box>
          <Text color={'white'}>Unit Usage:</Text>
          {Object.entries(unitCount)
            .sort(([, countA], [, countB]) => countB - countA)
            .map(([unit, count]) => (
              <Text key={unit} color={'white'}>
                {unit}: {count} 번
              </Text>
            ))}
        </Box>

        {/* Display the item counts */}
        <Box>
          <Text color={'white'}>Item Usage:</Text>
          {Object.entries(itemCount)
            .sort(([, countA], [, countB]) => countB - countA)
            .map(([item, count]) => (
              <Text key={item} color={'white'}>
                {item}: {count} 번
              </Text>
            ))}
        </Box>
      </VStack>
    </VStack>
  );
}
