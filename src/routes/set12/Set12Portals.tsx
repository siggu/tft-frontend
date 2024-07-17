import { useQuery } from '@tanstack/react-query';
import { getSet12Portals } from '../../set12api';
import IPortals from '../../components/types';
import { Container, VStack, Text, Image, Divider, Spinner, HStack, Box } from '@chakra-ui/react';

export default function Set12Portals() {
  const { data, isLoading, error } = useQuery<IPortals[]>({
    queryKey: ['portals'],
    queryFn: getSet12Portals,
  });

  if (isLoading) return <Spinner size="xl" />;

  if (error) return <Text color="red.500">Error fetching portals: {error.message}</Text>;

  // 각 타입에 따라 데이터를 분류합니다.
  const portalsByType: { [key: string]: IPortals[] } = {};

  // 데이터를 분류합니다.
  data?.forEach((portal) => {
    if (!portalsByType[portal._type]) {
      portalsByType[portal._type] = [];
    }
    portalsByType[portal._type].push(portal);
  });

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box mx={20} mb={5}>
        <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
          차원문
        </Text>
      </Box>
      <Box mx={20}>
        {Object.entries(portalsByType).map(([type, portals]) => (
          <VStack
            padding={5}
            m={5}
            borderRadius={5}
            alignItems={'flex-start'}
            key={type}
            color={'white'}
            p={3}
            bgColor={'#27282e'}
          >
            {portals.map((portal) => (
              <>
                <HStack p={5}>
                  <Image mr={3} src={portal.iconImageUrl} />
                  <VStack alignItems={'flex-start'}>
                    <Text>{portal.title}</Text>
                    <Text>{portal.desc}</Text>
                  </VStack>
                </HStack>
              </>
            ))}
          </VStack>
        ))}
      </Box>
    </Container>
  );
}
