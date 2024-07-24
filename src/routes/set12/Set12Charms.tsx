import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  Box,
  ChakraProvider,
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
import MyIcon from '../../CharmsIcon';

export default function Set12Charms() {
  const { tier } = useParams<{ tier: string }>();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const handleSwitchChange = () => setIsChecked(!isChecked);

  const renderCharmsDetails = () => {
    switch (tier) {
      case 'tier1':
        return (
          <VStack>
            <Text color={'white'}>티어1</Text>
          </VStack>
        );
      default:
        return (
          <VStack p={5} mb={5} alignItems={'flex-start'}>
            <Text mt={5} color={'white'}>
              Select a reward category.
            </Text>
          </VStack>
        );
    }
  };

  return (
    <Container p={5} maxW={'container.xl'}>
      <Box lineHeight={'35px'} mx={20} mb={5}>
        <Box mb={3}>
          <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
            주술
          </Text>
        </Box>
        <Box>
          <Text fontSize={'13px'} color={'gray'}>
            - 상점에서 구매할 수 있는 마법 효과입니다. 2 스테이지부터 등장합니다.
          </Text>
        </Box>
        <Text mb={10} fontSize={'13px'} color={'gray'}>
          - 상점 슬롯 우측 1칸에 등장하며, 2번 새로고침할 때마다 변경됩니다.
        </Text>
        {/* 주술 확률 */}
        <Box mb={10}>
          <HStack justifyContent={'space-between'}>
            <Box>
              <Text as={'b'} color={'#8861e8'} fontSize={'17px'}>
                확률표
              </Text>
            </Box>
            <HStack>
              <MyIcon width="16" height="16" fill="#999999" />
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
                          <Text fontWeight={'500'} color={'#abda46'}>
                            60%
                          </Text>
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#fbdb42'}>
                            40%
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
                      </Tr>
                      <Tr>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                          스테이지3
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#fa6f52'}>
                            20%
                          </Text>
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#fbdb42'}>
                            40%
                          </Text>
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
                          <Text>-</Text>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'} fontSize={'12px'}>
                          스테이지4
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
                          <Text>-</Text>
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#fa6f52'}>
                            20%
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
                          <Text>-</Text>
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#abda46'}>
                            55%
                          </Text>
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#fbdb42'}>
                            45%
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
                            35%
                          </Text>
                        </Td>
                        <Td borderBottom={'1px solid gray'} textAlign={'center'}>
                          <Text fontWeight={'500'} color={'#abda46'}>
                            65%
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
        <Box bg={'#27282e'} display="flex" justifyContent="space-between">
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/all'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  전체
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier1'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  티어 1
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier2'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  티어 2
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier2.5'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  티어 2.5
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier3'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  티어 3
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier4'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  티어 4
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier0'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  티어 ?
                </Text>
              </VStack>
            </Link>
          </Box>
          <Box p={5} _hover={{ bg: '#6e43d9' }} width="25%" cursor={'pointer'} textAlign="center">
            <Link to={'/set12/charms/tier5'}>
              <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'700'} fontSize={'12px'} color={'white'}>
                  제라스
                </Text>
              </VStack>
            </Link>
          </Box>
        </Box>
        {renderCharmsDetails()}
      </Box>
    </Container>
  );
}
