import {useQuery} from '@tanstack/react-query';
import {getPortals} from '../api';
import IPortals from './../components/types.d';
import {Container, HStack, VStack, Box, Text, Image, Divider} from '@chakra-ui/react';
import {useRef} from 'react';

export default function Portals() {
  const {data, isLoading} = useQuery<IPortals[]>({
    queryKey: ['portals'],
    queryFn: getPortals,
  });

  const champRef = useRef<HTMLDivElement>(null);
  const combatRef = useRef<HTMLDivElement>(null);
  const spatulaRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not available</div>;

  const champPortals = data?.filter((portal) => portal.portal_type?.portal_type === 'champ');
  const combatPortals = data?.filter((portal) => portal.portal_type?.portal_type === 'combat');
  const spatulaPortals = data?.filter((portal) => portal.portal_type?.portal_type === 'spatula');
  const coinPortals = data?.filter((portal) => portal.portal_type?.portal_type === 'coin');
  const cardPortals = data?.filter((portal) => portal.portal_type?.portal_type === 'card');
  const itemPortals = data?.filter((portal) => portal.portal_type?.portal_type === 'item');

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#dca555'} fontSize={'20px'}>
          차원문
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
            ref={champRef}
            onClick={() => scrollToRef(champRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              챔피언 차원문
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={combatRef}
            onClick={() => scrollToRef(combatRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              전투 차원문
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={spatulaRef}
            onClick={() => scrollToRef(spatulaRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              뒤집개 차원문
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={coinRef}
            onClick={() => scrollToRef(coinRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              코인 차원문
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={cardRef}
            onClick={() => scrollToRef(cardRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              증강 차원문
            </Text>
          </Box>
          <Divider orientation="vertical" />
          <Box
            p={5}
            _hover={{bg: '#d0a28a'}}
            w="33.33%"
            ref={itemRef}
            onClick={() => scrollToRef(itemRef)}
            cursor={'pointer'}
          >
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'} textAlign="center">
              아이템 차원문
            </Text>
          </Box>
        </HStack>
      </Box>
      {/* 챔피언 차원문 */}
      <Box ref={champRef} mx={20} border={'1px solid gray'}>
        <Box bg={'#27282e'} p={3}>
          <HStack>
            <Image src={champPortals[0].portal_type.photos[0]?.file} />
            <Text as={'b'} color={'white'}>
              챔피언 차원문
            </Text>
          </HStack>
        </Box>
        {champPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'40px'} src={portal.portal_type.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {portal.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
      {/* 전투 차원문 */}
      <Box ref={combatRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <HStack>
            <Image src={combatPortals[0].portal_type.photos[0]?.file} />
            <Text as={'b'} color={'white'}>
              전투 차원문
            </Text>
          </HStack>
        </Box>
        {combatPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'40px'} src={portal.portal_type.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {portal.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
      {/* 뒤집개 차원문 */}
      <Box ref={spatulaRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <HStack>
            <Image src={spatulaPortals[0].portal_type.photos[0]?.file} />
            <Text as={'b'} color={'white'}>
              뒤집개 차원문
            </Text>
          </HStack>
        </Box>
        {spatulaPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'40px'} src={portal.portal_type.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {portal.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
      {/* 코인 차원문 */}
      <Box ref={coinRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <HStack>
            <Image src={coinPortals[0].portal_type.photos[0]?.file} />
            <Text as={'b'} color={'white'}>
              코인 차원문
            </Text>
          </HStack>
        </Box>
        {coinPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'40px'} src={portal.portal_type.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {portal.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
      {/* 증강 차원문 */}
      <Box ref={cardRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <HStack>
            <Image src={cardPortals[0].portal_type.photos[0]?.file} />
            <Text as={'b'} color={'white'}>
              증강 차원문
            </Text>
          </HStack>
        </Box>
        {cardPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'40px'} src={portal.portal_type.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {portal.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
      {/* 아이템 차원문 */}
      <Box ref={itemRef} mx={20} border={'1px solid gray'} mt={5}>
        <Box bg={'#27282e'} p={3}>
          <HStack>
            <Image src={itemPortals[0].portal_type.photos[0]?.file} />
            <Text as={'b'} color={'white'}>
              아이템 차원문
            </Text>
          </HStack>
        </Box>
        {itemPortals.map((portal, index) => (
          <Box p={3} key={index}>
            <HStack>
              <Image w={'40px'} src={portal.portal_type.photos[0]?.file} />
              <VStack p={3} alignItems={'flex-start'}>
                <Text fontSize={'14px'} as={'b'} color={'white'}>
                  {portal.name}
                </Text>
                <Text fontSize={'13px'} color={'white'}>
                  {portal.description}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
