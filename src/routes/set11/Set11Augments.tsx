import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSet11Augments } from '../../set11api';
import { Box, Container, HStack, Image, Text, VStack } from '@chakra-ui/react';
import IAugments from '../../components/types';

export default function Set11Augments() {
  const { data, isLoading } = useQuery<IAugments[]>({
    queryKey: ['augments'],
    queryFn: getSet11Augments,
  });

  const { tier } = useParams();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not available</div>;

  // 현재 선택된 탭에 따라 데이터 필터링
  const filteredAugments = data.filter(
    (augment) =>
      !augment.isHidden &&
      ((tier === 'silver' && augment.tier === 1) ||
        (tier === 'gold' && augment.tier === 2) ||
        (tier === 'prismatic' && augment.tier === 3))
  );

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
          증강
        </Text>
      </Box>
      <Box bg={'#27282e'} mx={20} display="flex" justifyContent="space-between">
        {/* 3등분 레이아웃 및 스크롤 기능 적용 */}
        <Box p={5} _hover={{ bg: '#d0a28a' }} width="33.33%" cursor={'pointer'} textAlign="center">
          <Link to={'/set11/augments/silver'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              실버
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#d0a28a' }} width="33.33%" cursor={'pointer'} textAlign="center">
          <Link to={'/set11/augments/gold'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              골드
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#d0a28a' }} width="33.33%" cursor={'pointer'} textAlign="center">
          <Link to={'/set11/augments/prismatic'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              프리즘
            </Text>
          </Link>
        </Box>
      </Box>
      <VStack p={5} mx={20} mb={5} alignItems={'flex-start'}>
        {filteredAugments.map((augment) => (
          <Box key={augment.key} mb={5}>
            <HStack>
              <Image w={'50px'} src={augment.imageUrl} />
              <VStack gap={0} alignItems={'flex-start'}>
                <Text color={'white'}>{augment.name}</Text>
                <Text
                  color={'gray.500'}
                  dangerouslySetInnerHTML={{
                    __html: augment.desc.replace(/<br>/g, '<br />'),
                  }}
                />
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
