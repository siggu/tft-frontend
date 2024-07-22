import {
  HStack,
  Box,
  Text,
  Image,
  Container,
  VStack,
  Input,
  FormControl,
  Button,
  Grid,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Set11Header() {
  const [gameName, setgameName] = useState('');
  const [tagLine, setSearchTag] = useState('');
  const [error, setError] = useState(''); // Error state
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (gameName.trim() !== '') {
        // 검색한 유저가 우리 서버 디비에 있는지 확인
        const profileResponse = await fetch(
          `http://127.0.0.1:8000/api/v1/profiles/fetch-puuid/${gameName}/${tagLine}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        // 검색한 유저가 우리 디비에 있다 🟢
        if (profileResponse.ok) {
          // 존재한다면 puuid를 가져오도록 한다 summonerPuuid에 저장
          const profileData = await profileResponse.json();
          const summonerPuuid = profileData.puuid;

          // puuid기반으로 유저의 match 데이터 가져오기
          const matchesResponse = await fetch(
            `http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${summonerPuuid}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const matchesData = await matchesResponse.json();
          if (matchesResponse.ok) {
            // navigate(`/profile/${gameName}`, {state: {gameName: gameName, matches: matchesData}});
            navigate(`/profile_backend_test/${gameName}/${tagLine}`, {
              state: { gameName: gameName, tagLine: tagLine, matches: matchesData },
            });
          } else {
            await fetch(`http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${gameName}/${tagLine}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ gameName: gameName, tagLine: tagLine, mathces: matchesData }),
            });

            // navigate(`/profile/${gameName}`, {state: {gameName: gameName}});
            navigate(`/profile_backend_test/${gameName}/${tagLine}`, {
              state: { gameName: gameName, tagLine: tagLine },
            });
          }
        } else {
          // 검색한 유저가 우리 디비에 없다 ❌
          await fetch(`http://127.0.0.1:8000/api/v1/profiles/fetch-puuid`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ gameName: gameName, tagLine: tagLine }),
          });
          // console.log(4)
          // navigate(`/profile/${gameName}`, {state: {gameName: gameName}});
          navigate(`/profile_backend_test/${gameName}/${tagLine}`, { state: { gameName: gameName, tagLine: tagLine } });
        }
      }
    } catch (error) {
      console.error('handleSearch Error:', error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setgameName(event.target.value);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTag(event.target.value);
  };
  const handleSearchtoAdapter = () => {
    if (gameName.trim() === '' || tagLine.trim() === '') {
      setError('소환사 닉네임과 태그를 입력해주세요.');
      return;
    }
    setError(''); // Clear error message if any
    navigate(`/set11/search/${gameName}/${tagLine}`);
  };

  return (
    <Box p={10} mb={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <VStack gap={10}>
        <Box pt={10} mb={10}>
          <Link to={'/set11'}>
            <Image src="https://cdn.dak.gg/tft/images2/sets/set11/logo-title-ko.png" />
          </Link>
        </Box>
        <HStack>
          <FormControl>
            <HStack>
              <Link to={'/set12'}>
                <Tooltip
                  hasArrow
                  placement="top"
                  bg={'black'}
                  rounded={'md'}
                  p={3}
                  label={<Text fontSize={'12px'}>12시즌으로 이동하기</Text>}
                >
                  <Button
                    _hover={{
                      bgGradient: 'linear(#5120c7, #6e43d9, #8861e8)',
                    }}
                    bgGradient={'linear(#8861e8, #6e43d9, #5120c7)'}
                  >
                    <Text color={'white'} fontSize={'12px'}>
                      12시즌
                    </Text>
                  </Button>
                </Tooltip>
              </Link>
              <Input
                placeholder="소환사 닉네임"
                color={'white'}
                value={gameName}
                onChange={handleNameChange}
                sx={{
                  '::placeholder': {
                    color: 'white',
                  },
                }}
                fontSize={'13px'}
              />
              <Input
                placeholder="태그"
                color={'white'}
                value={tagLine}
                onChange={handleTagChange}
                sx={{
                  '::placeholder': {
                    color: 'white',
                  },
                }}
                fontSize={'13px'}
              />
            </HStack>
          </FormControl>
          <Button
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            type="button"
            onClick={handleSearchtoAdapter}
            color={'white'}
          >
            <FaSearch />
          </Button>
        </HStack>
        <Grid
          templateColumns={{
            lg: 'repeat(6, 2fr)',
            md: 'repeat(3, 2fr)',
            sm: 'repeat(3, 2fr)',
          }}
          gap={5}
        >
          {/* 조우자 */}
          <Box
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'1px solid black'}
          >
            <Link to={'/set11/encounters'}>
              <Text fontWeight={'600'} color={'white'}>
                11시즌 조우자
              </Text>
            </Link>
          </Box>
          {/* 챔피언 */}
          <Box
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'1px solid black'}
          >
            <Link to={'/set11/champions/Aatrox'}>
              <Text fontWeight={'600'} color={'white'}>
                11시즌 챔피언
              </Text>
            </Link>
          </Box>
          {/* 시너지 */}
          <Box
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'1px solid black'}
          >
            <Link to={'/set11/synergies'}>
              <Text fontWeight={'600'} color={'white'}>
                11시즌 시너지
              </Text>
            </Link>
          </Box>
          {/* 아이템 */}
          <Box
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'1px solid black'}
          >
            <Link to={'/set11/items'}>
              <Text fontWeight={'600'} color={'white'}>
                11시즌 아이템
              </Text>
            </Link>
          </Box>
          {/* 증강체 */}
          <Box
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'1px solid black'}
          >
            <Link to={'/set11/augments/silver'}>
              <Text fontWeight={'600'} color={'white'}>
                11시즌 증강체
              </Text>
            </Link>
          </Box>
          {/* 차원문 */}
          <Box
            _hover={{
              bgGradient: 'linear(#a95f24, #c37843, #ddb062)',
            }}
            bgGradient={'linear(#ddb062, #c38843, #a95f24)'}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'1px solid black'}
          >
            <Link to={'/set11/portals'}>
              <Text fontWeight={'600'} color={'white'}>
                11시즌 차원문
              </Text>
            </Link>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
}
