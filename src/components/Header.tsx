import {HStack, Box, Text, Image, Container, VStack, Input, FormControl, Button} from '@chakra-ui/react';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';

export default function Header() {
  const [searchName, setSearchName] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (searchName.trim() !== '') {
        const profileResponse = await fetch(`http://127.0.0.1:8000/api/v1/profiles/fetch-puuid/${searchName}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          const summonerPuuid = profileData.puuid;

          const matchesResponse = await fetch(
            `http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${summonerPuuid}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (matchesResponse.ok) {
            const matchesData = await matchesResponse.json();
            navigate(`/profile/${searchName}`, {state: {puuid: summonerPuuid, matches: matchesData}});
          } else {
            await fetch(`http://127.0.0.1:8000/api/v1/profiles/matches-by-puuid/${summonerPuuid}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({summonerpuuid: summonerPuuid}),
            });
          }
        } else {
          console.error('Failed to fetch profile data:', profileResponse.statusText);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  return (
    <Box p={10} mb={10}>
      <VStack gap={10}>
        <Box>
          <Link to={'/'}>
            <Image src="https://cdn.dak.gg/tft/images2/sets/set11/logo-title-ko.png" />
          </Link>
        </Box>
        <HStack>
          <FormControl>
            <Input placeholder="플레이어 전적 검색" color={'white'} value={searchName} onChange={handleChange} />
          </FormControl>
          <Button type="button" onClick={handleSearch}>
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
            <Link to={'/encounters'}>
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
            <Link to={'/champions/1'}>
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
            <Link to={'/synergies'}>
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
            <Link to={'/items'}>
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
            <Link to={'/augments'}>
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
            <Link to={'/portals'}>
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
