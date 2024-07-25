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
import CharmsIcon from '../../CharmsIcon';
import { FaCoins } from 'react-icons/fa';
import AttackSpeedIcon from '../../Attackspeed';
import HealthScaling from '../../healthscaling';
import AttackDamageIcon from '../../Attackdamage';

export default function Set12Charms() {
  const { tier } = useParams<{ tier: string }>();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const handleSwitchChange = () => setIsChecked(!isChecked);

  const renderCharmsDetails = () => {
    switch (tier) {
      // 티어 1
      case 'tier1':
        return (
          <VStack gap={5} color={'white'} alignItems={'flex-start'} p={5} mt={10} bgColor={'#27282e'}>
            {/* 하급 갬빗 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>하급 갬빗</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 플레이어 대상 전투에서 승리하면 2골드를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 1단계 집결 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>1단계 집결</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 1단계 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 장비 교체 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>장비 교체</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 임시 자석 제거기와 재조합기를 1개씩 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 수정 구슬 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>수정 구슬</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 상대를 공개합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 작은 소원 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>작은 소원</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    무작위 하급 효과 1개를 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 훈련 봇 소환 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>훈련 봇 소환</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 훈련 봇 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 동전 던지기 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>동전 던지기</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    사용한 동전 던지기마다 50% 확률로 1골드를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 퇴보 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>퇴보</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 지금보다 1단계 낮은 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 하급 변이 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>하급 변이</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 1
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    비전투 시: 보유한 1단계 챔피언 1명이 2단계 챔피언으로 바뀝니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        );
      // 티어 2
      case 'tier2':
        return (
          <VStack gap={5} color={'white'} alignItems={'flex-start'} p={5} mt={10} bgColor={'#27282e'}>
            {/* 자유로운 새로고침 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>자유로운 새로고침</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점 새로고침을 2회 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 휴전 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>휴전</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    자신과 상대방이 1골드를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 부지런한 꿀벌 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>부지런한 꿀벌</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    이번 라운드에 아군 꿀벌이 공격 속도를 15% 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 2단계 집결 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>2단계 집결</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 2단계 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 3단계 집결 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>3단계 집결</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 3단계 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 불길한 거래 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>불길한 거래</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    2골드를 획득합니다. 이 주술은 플레이어 체력을 1 소모합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 상징 연성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>상징 연성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>15</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    제작할 수 없는 무작위 상징 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 섬뜩한 허기 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>섬뜩한 허기</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <HStack>
                    <Box>
                      <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                        다음 전투: 섬뜩한 힘의 아군 고대 신이 처치에 관여하면
                      </Text>
                    </Box>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>공격 속도</Text>}>
                      <Box>
                        <AttackSpeedIcon />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      를 10%,
                    </Text>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>체력</Text>}>
                      <Box>
                        <HealthScaling />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      을 10% 얻습니다.
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 차원문 뛰어넘기 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>차원문 뛰어넘기</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    무작위 차원문 챔피언 1명을 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 방화광 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>방화광</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    화염 특성 지옥 잉걸불을 8개 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 가속화 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>가속화</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <HStack>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      다음 전투: 시공간이 초읽기 후
                    </Text>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>공격 속도</Text>}>
                      <Box>
                        <AttackSpeedIcon />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      를 +30% 얻습니다.
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 혹한의 견고함 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>혹한의 견고함</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 얼음 병사의 체력이 40% 증가합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 퀸스 갬빗 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>퀸스 갬빗</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 승리하면 가장 단계가 높은 아군 요정 유닛의 복사본을 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 불 뿜기 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>불 뿜기</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 용의 기본 공격이 최대 체력의 1%의 추가 고정 피해를 입힙니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 수리수리 마수리 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>수리수리 마수리</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 마녀가 주문력을 25 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 신속의 의식 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>신속의 의식</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아군이 공격 속도를 10% 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 주사위 굴리기 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>주사위 굴리기</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    주사위를 굴립니다. 주사위의 값에 따라 골드를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 최고위 아르카나 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>최고위 아르카나</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아군 하이 아르카나 챔피언이 피해 증폭과 내구력을 15% 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 변이 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>변이</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    비전투 시: 보유한 2단계 챔피언 1명이 3단계 챔피언으로 바뀝니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 극한의 초월 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>극한의 초월</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 25초 후, 아군이 피해 증폭을 300% 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 슈우우웅화 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>슈우우웅화</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아군이 이동 속도를 200% 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 거대화 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>거대화</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <HStack>
                    <Box>
                      <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                        1라운드 동안 가장
                      </Text>
                    </Box>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>체력</Text>}>
                      <Box>
                        <HealthScaling />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      이 높은 챔피언이 성장해
                    </Text>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>체력</Text>}>
                      <Box>
                        <HealthScaling />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      을 500 얻습니다.
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 단검화 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>단검화</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 보유한 모든 아이템이 스태틱의 단검으로 바뀝니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 마법공학 폭발 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>마법공학 폭발</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 처음으로 처치된 아군 챔피언이 폭발해 600의 마법 피해를 입힙니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        );
      // 티어 2.5
      case 'tier2.5':
        return (
          <VStack gap={5} color={'white'} alignItems={'flex-start'} p={5} mt={10} bgColor={'#27282e'}>
            {/* 유령 장갑 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유령 장갑</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 임시 도적의 장갑을 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 하급 모방 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>하급 모방</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    하급 챔피언 복제기 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 공허충 소환 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>공허충 소환</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 공허충 1마리를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 무장 해제 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>무장 해제</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 8초 동안 모든 적에게 파쇄 및 파열을 30%만큼 적용합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 모루 연성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>모루 연성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>8</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    조합 아이템 모루 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 횡재 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>횡재</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1골드를 얻습니다. 1라운드 동안 아군이 체력을 50 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 누워서 케이크 먹기 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-4.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>누워서 케이크 먹기</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    달콤술사 케이크에 설탕을 10개 추가합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 여진 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>여진</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 10초 후, 1.5초 동안 모든 적을 기절시킵니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 결집 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>결집</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>10</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1단계 챔피언의 복사본을 1명씩 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 깜짝선물! */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>깜짝선물!</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아이템이 없는 챔피언 1명이 수상한 외투 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 보물 사냥꾼 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>보물 사냥꾼</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아이템이 없는 챔피언 1명이 불안정한 보물 상자 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 월광 의식 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>월광 의식</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 무작위 1단계 또는 2단계 챔피언 1명의 별 레벨이 오릅니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 암살자 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>암살자</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <HStack>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      다음 전투: 가장
                    </Text>
                    <Box>
                      <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>공격력</Text>}>
                        <Box>
                          <AttackDamageIcon />
                        </Box>
                      </Tooltip>
                    </Box>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      이 높은 챔피언이 적의 후방으로 도약합니다.
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 허리띠 뭉치 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>허리띠 뭉치</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아군이 장착 해제할 수 없는 거인의 허리띠 6개를 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 황금빛 훈련 봇 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>황금빛 훈련 봇</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 2.5
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 훈련 봇 1개를 획득합니다. 아군 훈련 봇이 피해를 받는 동안 골드를 떨어뜨립니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        );
      // 티어 3
      case 'tier3':
        return (
          <VStack gap={5} color={'white'} alignItems={'flex-start'} p={5} mt={10} bgColor={'#27282e'}>
            {/* 4단계 집결 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>4단계 집결</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>4</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 4단계 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 벼락 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>벼락</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 모든 적에게 최대 체력의 10%를 고정 피해로 입힙니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 지진 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>지진</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 2초 동안 모든 적을 기절시킵니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 백작 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>백작</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 1, 2, 3, 4, 5단계 챔피언 1명씩으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 훈련 봇 소환 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>훈련 봇 소환</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 훈련 봇 2개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 은빛 수호 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>은빛 수호</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투 시작: 8초 동안 아군이 군중 제어에 면역이 됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 재활용 전문가 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>재활용 전문가</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    이번 라운드에 대기석에 있는 챔피언이 장착한 모든 아이템이 해제 및 분해됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 태양불꽃 마법 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>태양불꽃 마법</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>3</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 10초 동안 적에게 불태우기와 상처를 적용합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 지도력 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>지도력</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    완성 아이템 3개를 장착한 챔피언 1명이 체력을 영구히 300 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 유령 발톱 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유령 발톱</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 임시 용의 발톱 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 뒤집개 연성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>뒤집개 연성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>15</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    뒤집개 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 도벽 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>도벽</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>6</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 아군이 처음으로 처치한 적의 조합 아이템 1개를 복사합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 상급 소원 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>상급 소원</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    무작위 효과를 1개 얻습니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 유령 조끼 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유령 조끼</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 임시 덤불 조끼 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 상급 갬빗 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>상급 갬빗</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 플레이어 대상 전투에서 승리하면 10골드를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 생명보험 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>생명보험</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 아군 챔피언이 사망 시 50% 확률로 1골드를 떨어뜨립니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 유령 상징 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유령 상징</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>8</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 가장 많이 활성화된 아군 특성의 임시 상징을 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 움직이는 상점 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>움직이는 상점</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>6</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    20초 동안, 상점이 2초마다 무료로 새로고침됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 할인 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>할인</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    이번 라운드에 구매하는 다음 챔피언이 무료가 됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 요들 영혼 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>요들 영혼</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>3</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 4초 동안 아군이 99%의 확률로 기본 공격을 회피합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 유물화 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유물화</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 3
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 무작위 아이템 4개가 유물 아이템으로 변합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        );
      // 티어 4
      case 'tier4':
        return (
          <VStack gap={5} color={'white'} alignItems={'flex-start'} p={5} mt={10} bgColor={'#27282e'}>
            {/* 상급 모방 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>상급 모방</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>10</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    챔피언 복제기 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 5단계 집결 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>5단계 집결</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 5단계 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 진보 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>진보</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 지금보다 1단계 높은 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 유물 연성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유물 연성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>18</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    유물 모루 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 찬란함 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>찬란함</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>10</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 챔피언 1명에게 장착한 완성 아이템 1개가 찬란한 아이템이 됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 불길한 상점 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>불길한 상점</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점 새로고침을 6회 얻습니다. 이 주술은 플레이어 체력을 4 소모합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 땜질 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>땜질</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    재조합기와 자석 제거기를 1개씩 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 상급 변이 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>상급 변이</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    비전투 시: 보유한 4단계 챔피언 1명이 5단계 챔피언으로 바뀝니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 후방의 핵심 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>후방의 핵심</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <HStack>
                    <Box>
                      <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                        다음 전투: 후방의 무작위 챔피언 1명이 7초 동안
                      </Text>
                    </Box>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>공격 속도</Text>}>
                      <Box>
                        <AttackSpeedIcon />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      를 40% 얻습니다.
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 절박한 간청 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>절박한 간청</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 10초 후, 이번 라운드에서 탈락이 방지됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 대기만성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>대기만성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>6</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    3성 1단계 챔피언과 자석 제거기 1개를 영구히 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 용 소환 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>용 소환</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>12</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 체력이 4000인 용을 소환합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 큰 깜짝선물! */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>큰 깜짝선물!</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>6</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아이템을 장착하지 않은 챔피언 2명이 수상한 외투 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 보물 파티 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>보물 파티</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>8</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아이템이 없는 챔피언 1명이 불안정한 보물 상자 2개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 일생 일대의 걸작 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>일생 일대의 걸작</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>99</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    플레이어 체력을 66 잃습니다. 3성 5단계 챔피언을 영구히 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 움직이는 대기석 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>움직이는 대기석</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>4</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 4
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 6초마다 아군 대기석에 있는 챔피언 1명이 전투에 합류합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        );
      // 티어 ?
      case 'tier0':
        return (
          <VStack gap={5} color={'white'} alignItems={'flex-start'} p={5} mt={10} bgColor={'#27282e'}>
            {/* 흉내쟁이 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>흉내쟁이</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>10</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    챔피언 복제기 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 5단계 집결 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>5단계 집결</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 5단계 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 진보 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>진보</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>2</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점을 새로고침해 모두 지금보다 1단계 높은 챔피언으로 채웁니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 유물 연성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>유물 연성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>18</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    유물 모루 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 찬란함 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>찬란함</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>10</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 챔피언 1명에게 장착한 완성 아이템 1개가 찬란한 아이템이 됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 불길한 상점 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-1.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>불길한 상점</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    상점 새로고침을 6회 얻습니다. 이 주술은 플레이어 체력을 4 소모합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 땜질 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>땜질</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>1</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    재조합기와 자석 제거기를 1개씩 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 상급 변이 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>상급 변이</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>0</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    비전투 시: 보유한 4단계 챔피언 1명이 5단계 챔피언으로 바뀝니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 후방의 핵심 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>후방의 핵심</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <HStack>
                    <Box>
                      <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                        다음 전투: 후방의 무작위 챔피언 1명이 7초 동안
                      </Text>
                    </Box>
                    <Tooltip hasArrow bg={'black'} rounded={'md'} p={3} placement="top" label={<Text>공격 속도</Text>}>
                      <Box>
                        <AttackSpeedIcon />
                      </Box>
                    </Tooltip>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                      를 40% 얻습니다.
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 절박한 간청 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>절박한 간청</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>5</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 10초 후, 이번 라운드에서 탈락이 방지됩니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 대기만성 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>대기만성</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>6</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    3성 1단계 챔피언과 자석 제거기 1개를 영구히 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 용 소환 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>용 소환</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>12</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 체력이 4000인 용을 소환합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 큰 깜짝선물! */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>큰 깜짝선물!</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>6</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아이템을 장착하지 않은 챔피언 2명이 수상한 외투 1개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 보물 파티 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-2.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>보물 파티</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>8</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    1라운드 동안 아이템이 없는 챔피언 1명이 불안정한 보물 상자 2개를 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 일생 일대의 걸작 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>일생 일대의 걸작</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>99</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    플레이어 체력을 66 잃습니다. 3성 5단계 챔피언을 영구히 획득합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
            {/* 움직이는 대기석 */}
            <HStack mb={3}>
              <Box rounded={'7px'} bgGradient={'linear(#6a6d7b, #53555f, #393a42)'}>
                {/* 주술 이미지 */}
                <Image w={'45px'} p={1.5} src="https://cdn.dak.gg/tft/images2/charms/set12/charm-3.png" />
              </Box>
              <VStack gap={0} alignItems={'flex-start'}>
                <HStack fontWeight={'700'} fontSize={'13px'}>
                  {/* 타이틀 */}
                  <Text>움직이는 대기석</Text>
                  <HStack rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    <FaCoins color={'gold'} />
                    {/* 돈 */}
                    <Text color={'#C4C4C4'}>4</Text>
                  </HStack>
                  {/* 티어 */}
                  <Text color={'#C4C4C4'} rounded={'3px'} paddingX={1} bgColor={'#2d2f37'}>
                    티어 ?
                  </Text>
                </HStack>
                <Box>
                  {/* 설명 */}
                  <Text fontSize={'13px'} fontWeight={'500'} color={'#C4C4C4'}>
                    다음 전투: 6초마다 아군 대기석에 있는 챔피언 1명이 전투에 합류합니다.
                  </Text>
                </Box>
              </VStack>
            </HStack>
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
      <Box mx={20} mb={5}>
        <Box mb={3}>
          <Text as={'b'} color={'#8861e8'} fontSize={'20px'}>
            주술
          </Text>
        </Box>
        <Box lineHeight={'35px'}>
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
