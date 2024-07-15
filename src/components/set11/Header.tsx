import { HStack, Box, Text, Image, Container, VStack, Input, FormControl, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [gameName, setgameName] = useState('');
  const [tagLine, setSearchTag] = useState('');
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
    navigate(`/set11/search/${gameName}/${tagLine}`);
  };

  return (
    <Box p={10} mb={10}>
      <VStack gap={10}>
        <Box>
          <Link to={'/set11'}>
            <Image src="https://cdn.dak.gg/tft/images2/sets/set11/logo-title-ko.png" />
          </Link>
        </Box>
        <HStack>
          <FormControl>
            <HStack>
              <Input placeholder="소환사 닉네임" color={'white'} value={gameName} onChange={handleNameChange} />
              <Input placeholder="태그" color={'white'} value={tagLine} onChange={handleTagChange} />
            </HStack>
          </FormControl>
          <Button type="button" onClick={handleSearchtoAdapter}>
            <FaSearch />
          </Button>
        </HStack>
        <HStack gap={5}>
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
                조우자
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
                챔피언
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
                시너지
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
                아이템
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
                증강체
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
                차원문
              </Text>
            </Link>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
