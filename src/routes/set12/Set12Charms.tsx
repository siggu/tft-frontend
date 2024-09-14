import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSet12Charms } from '../../set12api';
import ICharms from './../../components/types.d';
import {
  Box,
  Container,
  HStack,
  Image,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
} from '@chakra-ui/react';
import CharmsIcon from '../../svg/CharmsIcon';
import { FaCoins } from 'react-icons/fa';

export default function Set12Charms() {
  const { data, isLoading } = useQuery<ICharms[]>({
    queryKey: ['charms'],
    queryFn: getSet12Charms,
  });

  const [isChecked, setIsChecked] = useState(false);
  const handleSwitchChange = () => setIsChecked(!isChecked);

  const { tier } = useParams();

  // 현재 선택된 탭에 따라 데이터 필터링
  const filteredCharms = data?.filter(
    (charm) =>
      (tier === 'tier1' && String(charm.tier) === '1.0') ||
      (tier === 'tier2' && String(charm.tier) === '2.0') ||
      (tier === 'tier2.5' && String(charm.tier) === '2.5') ||
      (tier === 'tier3' && String(charm.tier) === '3.0') ||
      (tier === 'tier4' && String(charm.tier) === '4.0') ||
      (tier === 'tier5' && String(charm.tier) === '5.0')
  );

  // 티어 표시 함수
  const formatTier = (tier: string) => {
    // 소수점 뒤에 "0"이 붙어있는 경우 제거
    return tier.endsWith('.0') ? tier.slice(0, -2) : tier;
  };

  return (
    <Container p={5} maxW={'container.xl'}>
      {/* 주술 확률 */}
      <Box mb={10} mx={20}>
        <HStack justifyContent={'space-between'}>
          <Box>
            <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
              확률표
            </Text>
          </Box>
          <HStack>
            <CharmsIcon width="16" height="16" fill="#999999" />
            <Tooltip
              hasArrow
              placement="left"
              bg={'black'}
              rounded={'md'}
              p={3}
              label={
                <VStack alignItems={'flex-start'}>
                  <Text as={'b'}>우등생</Text>
                  <Text fontSize={'12px'}>강력한 주술이 게임 초반에 등장할 수 있습니다.</Text>
                </VStack>
              }
              position={'relative'}
            >
              <Text color={'#999999'} fontSize={'12px'}>
                차원문 효과
              </Text>
            </Tooltip>
            <Switch isChecked={isChecked} onChange={handleSwitchChange} size="md" />
          </HStack>
        </HStack>
        {isChecked ? (
          <>
            <VStack color={'white'}>
              <VStack w={'100%'}>
                <Table size={'lg'} bgColor={'#27282e'}>
                  <Thead>
                    <Tr bgColor={'#363944'}>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}></Th>
                      <Th
                        w={'180px'}
                        borderBottom={'1px solid gray'}
                        textAlign={'center'}
                        fontSize={'11px'}
                        color={'white'}
                      >
                        티어 1
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 2
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 2.5
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 3
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 4
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지2
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          20%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지3
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          -
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          35%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          35%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          30%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지4
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          -
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#abda46'}>
                          -
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          20%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#abda46'}>
                          60%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          20%
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지5
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#abda46'}>
                          60%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지6+
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#abda46'}>
                          60%
                        </Text>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </VStack>
          </>
        ) : (
          <>
            <VStack color={'white'}>
              <VStack w={'100%'}>
                <Table size={'lg'} bgColor={'#27282e'}>
                  <Thead>
                    <Tr bgColor={'#363944'}>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}></Th>
                      <Th
                        w={'180px'}
                        borderBottom={'1px solid gray'}
                        textAlign={'center'}
                        fontSize={'11px'}
                        color={'white'}
                      >
                        티어 1
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 2
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 2.5
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 3
                      </Th>
                      <Th borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'11px'} color={'white'}>
                        티어 4
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지2
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#37d749'}>
                          100%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지3
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          20%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지4
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          35%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          35%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          30%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지5
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          20%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#abda46'}>
                          60%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fa6f52'}>
                          20%
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                        스테이지6+
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text>-</Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#abda46'}>
                          60%
                        </Text>
                      </Td>
                      <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                        <Text fontWeight={'500'} color={'#fbdb42'}>
                          40%
                        </Text>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </VStack>
          </>
        )}
      </Box>

      <Box mx={20}>
        <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
          주술
        </Text>
      </Box>
      <Box bg={'#27282e'} mx={20} display="flex" justifyContent="space-between">
        {/* 6등분 레이아웃 및 스크롤 기능 적용 */}
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="16.66%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/charms/tier1'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              티어 1
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="16.66%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/charms/tier1'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              티어 2
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="16.66%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/charms/tier2.5'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              티어 2.5
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="16.66%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/charms/tier3'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              티어 3
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="16.66%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/charms/tier4'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              티어 4
            </Text>
          </Link>
        </Box>
        <Box p={5} _hover={{ bg: '#6e43d9' }} width="16.66%" cursor={'pointer'} textAlign="center">
          <Link to={'/set12/charms/tier5'}>
            <Text fontWeight={'700'} fontSize={'13px'} color={'white'}>
              제라스
            </Text>
          </Link>
        </Box>
      </Box>
      <VStack p={5} mx={20} mb={5} alignItems={'flex-start'}>
        {filteredCharms?.map((charm) => (
          <Box key={charm._key} mb={5}>
            <HStack>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                <Image p={1.5} w={'40px'} src={charm.imageUrl} />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack>
                  <Text fontSize={'15px'} color={'white'}>
                    {charm.name}
                  </Text>
                  <HStack>
                    <HStack pl={1} pr={1} rounded={'7px'} backgroundColor={'gray.800'}>
                      <Box color={'gold'}>
                        <FaCoins size={'12px'} />
                      </Box>
                      <Text color={'#C4C4C4'} fontSize={'14px'}>
                        {charm.cost}
                      </Text>
                    </HStack>
                    <HStack pl={1} pr={1} rounded={'7px'} backgroundColor={'gray.800'}>
                      <Text color={'#C4C4C4'} fontSize={'14px'}>
                        티어 {formatTier(String(charm.tier))}
                      </Text>
                    </HStack>
                  </HStack>
                </HStack>
                <Text
                  fontSize={'13px'}
                  color={'gray.500'}
                  dangerouslySetInnerHTML={{
                    __html: charm.desc.replace(/<br>/g, '<br />'),
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
