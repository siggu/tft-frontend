import { useQuery } from '@tanstack/react-query';
import { getSet12Champions, getSet12Synergies } from '../../set12api';
import { Container, VStack, Text, Grid, Box, Image, HStack, Tooltip, GridItem } from '@chakra-ui/react';
import ISynergy from '../../components/types';
import IChampionDetail from '../../components/types';
import Champion from '../../components/set12/Set12Champion';

export default function Set12Synergies() {
  const { data: synergiesData, isLoading: isSynergiesLoading } = useQuery<ISynergy[]>({
    queryKey: ['synergies'],
    queryFn: getSet12Synergies,
  });
  const { data: championsData, isLoading: isChampionsLoading } = useQuery<IChampionDetail[]>({
    queryKey: ['champions'],
    queryFn: getSet12Champions,
  });

  if (isSynergiesLoading || isChampionsLoading) return <div>Loading...</div>;
  if (!synergiesData || !championsData) return <div>Data not available</div>;

  // championsData를 cost1을 기준으로 정렬
  championsData.sort((a, b) => a.cost1 - b.cost1);

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
          시너지
        </Text>
      </Box>
      <Box mx={20} color={'white'}>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={10}
        >
          {synergiesData?.map((synergy: any) => (
            <Box bgColor={'#27282e'} key={synergy.name} p={5} border={'1px solid gray'} borderRadius={5}>
              <HStack justifyContent={'center'} mb={3} borderBottom={'1px solid gray'}>
                <HStack mb={3}>
                  <Image w={'40px'} src={synergy?.whiteImageUrl} />
                  <Text as={'b'}>{synergy.name}</Text>
                </HStack>
              </HStack>
              <Text
                mb={5}
                dangerouslySetInnerHTML={{
                  __html: synergy.desc.replace(/<br>/g, '<br />'),
                }}
              />
              <Box mb={10}>
                {Array.from({ length: 6 }).map((_, index) => {
                  const statKey = `stats${index + 1}`;
                  if (synergy?.[statKey]) {
                    return (
                      <Text
                        key={index}
                        color={'gray'}
                        dangerouslySetInnerHTML={{ __html: synergy[statKey].replace(/<br>/g, '<br />') }}
                      />
                    );
                  }
                  return null;
                })}
              </Box>
              <HStack justifyContent={'center'}>
                {championsData
                  .filter((champion) =>
                    [champion.traits1, champion.traits2, champion.traits3, champion.traits4].includes(synergy.key)
                  )
                  .map((champion) => (
                    <Champion
                      key={champion.key}
                      championKey={champion.key}
                      name={champion.name}
                      cost1={champion.cost1}
                      imageUrl={champion.imageUrl}
                      attackRange={champion.attackRange}
                      ingameKey={champion.ingameKey}
                      splashUrl={champion.splashUrl}
                      traits1={champion.traits1}
                      traits2={champion.traits2}
                      traits3={champion.traits3}
                      traits4={champion.traits4}
                      isHiddenGuide={champion.isHiddenGuide}
                      isHiddenLanding={champion.isHiddenLanding}
                      isHiddenTeamBuiler={champion.isHiddenTeamBuiler}
                      cost2={champion.cost2}
                      cost3={champion.cost3}
                      health1={champion.health1}
                      health2={champion.health2}
                      health3={champion.health3}
                      attackDamage1={champion.attackDamage1}
                      attackDamage2={champion.attackDamage2}
                      attackDamage3={champion.attackDamage3}
                      damagePerSecond1={champion.damagePerSecond1}
                      damagePerSecond2={champion.damagePerSecond2}
                      damagePerSecond3={champion.damagePerSecond3}
                      attackSpeed={champion.attackSpeed}
                      armor={champion.armor}
                      magicalResistance={0}
                      recommendItems1={champion.recommendItems1}
                      recommendItems2={champion.recommendItems2}
                      recommendItems3={champion.recommendItems3}
                      recommendItems4={champion.recommendItems4}
                      recommendItems5={champion.recommendItems5}
                      skill_stats1={champion.skill_stats1}
                      skill_stats2={champion.skill_stats2}
                      skill_stats3={champion.skill_stats3}
                      skill_stats4={champion.skill_stats4}
                      skill_stats5={champion.skill_stats5}
                      skill_name={champion.skill_name}
                      skill_imageUrl={champion.skill_imageUrl}
                      skill_desc={champion.skill_desc}
                      skill_startingMana={champion.skill_startingMana}
                      skill_skillMana={champion.skill_skillMana}
                    />
                  ))}
              </HStack>
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
