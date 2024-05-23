import {useQuery} from '@tanstack/react-query';
import {Box, Grid, Text, VStack, Image, HStack, Container} from '@chakra-ui/react';
import ProfileMiniBox from '../components/ProfileMiniBox';
import {useParams} from 'react-router-dom';
import IProfileMiniBox from '../components/types';
import {getSummonerData} from '../api';

export default function ProfileSearchAdapter() {
  const {gameName, tagLine} = useParams();
  const {data: summonerData, isLoading: isSummonerDataLoading} = useQuery<IProfileMiniBox>({
    queryKey: [gameName, tagLine],
    queryFn: getSummonerData,
  });
  console.log(getSummonerData);

  return (
    <Box>
      <Text color={'white'}>{gameName}</Text>
      <Text color={'white'}>{tagLine}</Text>
    </Box>
  );
}
