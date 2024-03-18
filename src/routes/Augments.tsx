import {useQuery} from '@tanstack/react-query';
import {getAugments} from '../api';
import {Box, Container, Divider, Grid, HStack, Image, Text, VStack} from '@chakra-ui/react';
import IAugments from './../components/types.d';
import {useRef} from 'react';

export default function Augments() {
  const {data, isLoading} = useQuery<IAugments[]>({
    queryKey: ['augments'],
    queryFn: getAugments,
  });

  const silverRef = useRef<HTMLDivElement>(null);
  const goldRef = useRef<HTMLDivElement>(null);
  const prismaticRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not available</div>;

  // tier 별로 데이터를 분류
  const silverAugments = data.filter((augment) => augment.tier === 'silver');
  const goldAugments = data.filter((augment) => augment.tier === 'gold');
  const prismaticAugments = data.filter((augment) => augment.tier === 'prismatic');

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
          증강
        </Text>
      </Box>
      {/* 스크롤 이동 */}
      <Box bg={'#27282e'} mx={20} mb={5}>
        <HStack justifyContent={'space-between'}>
          {/* 3등분 레이아웃 및 스크롤 기능 적용 */}
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            h={'100%'}
            w="33.33%"
            ref={silverRef}
            onClick={() => scrollToRef(silverRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              실버
            </Text>
          </Box>
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={goldRef}
            onClick={() => scrollToRef(goldRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              골드
            </Text>
          </Box>
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={prismaticRef}
            onClick={() => scrollToRef(prismaticRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              프리즘
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* 실버 티어 */}
      <Box ref={silverRef} mx={20} border={'1px solid gray'}>
        <Box bg={'#27282e'} p={3} borderBottom={0}>
          <Text as={'b'} color={'white'}>
            실버
          </Text>
        </Box>
        {silverAugments.map((augment, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'45px'} src={augment.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {augment.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {augment.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>

      {/* 골드 티어 */}
      <Box ref={goldRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <Text as={'b'} color={'white'}>
            골드
          </Text>
        </Box>
        {goldAugments.map((augment, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'45px'} src={augment.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {augment.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {augment.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>

      {/* 프리즘 티어 */}
      <Box ref={prismaticRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <Text as={'b'} color={'white'}>
            프리즘
          </Text>
        </Box>
        {prismaticAugments.map((augment, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'45px'} src={augment.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {augment.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {augment.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
