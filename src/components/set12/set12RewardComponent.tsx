import { Box, Text, VStack, Image, HStack, Tooltip } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
interface IRewardComponent {
  itemCount: number;
  itemName: string;
}
const RewardImages = [
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-gold.png', itemName: '골드' },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-2cost-unit.png', itemName: '2단계 챔피언' },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-3cost-unit.png', itemName: '3단계 챔피언' },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-random-loot.png', itemName: '무작위 조합 아이템' },
  {
    ImageUrl: 'https://cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
    itemName: '도적의 장갑',
  },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-anvil-component.png',
    itemName: '무작위 조합 아이템',
  },
  { ImageUrl: 'https://cdn.lolchess.gg/upload/images/items/Spatula_1658364227-4403.png', itemName: '뒤집개' },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-anvil-completed.png',
    itemName: '완성 아이템 모루',
  },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-anvil-artifact.png', itemName: '유물 모루' },
  {
    ImageUrl:
      'https://cdn.lolchess.gg/upload/images/items/BlacksmithsGloves_1710226718-tft9_ornnitem_blacksmithsgloves.png',
    itemName: '대장장이의 장갑',
  },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-reforger.png', itemName: '재조합기' },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-radiant-item.png',
    itemName: '무작위 찬란한 아이템',
  },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-champion-duplicater.png',
    itemName: '챔피언 복제기',
  },
  { ImageUrl: 'https://cdn.lolchess.gg/upload/images/items/ForceofNature_1640059110.png', itemName: '전략가의 왕관' },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-anvil-support.png', itemName: '지원 아이템 모루' },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-5cost-unit.png', itemName: '5단계 챔피언' },
  { ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-item-remover.png', itemName: '자석 제거기' },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-masterwork-upgrade.png',
    itemName: '걸작 업그레이드',
  },
  {
    ImageUrl: 'https://cdn.lolchess.gg/upload/images/items/RadientThiefsGloves_1651210121.png',
    itemName: '장난꾸러기의 장갑',
  },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-golden-item-remover.png',
    itemName: '황금 자석 제거기',
  },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-synergy-buff.png',
    itemName: '모든 시너지 +1 버프',
  },
  {
    ImageUrl: 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-radiant-conversion.png',
    itemName: '찬란한 아이템 변환기',
  },
  { ImageUrl: 'https://cdn.lolchess.gg/upload/images/champions/Briar_1720780084-Briar.png', itemName: '브라이어' },
  { ImageUrl: 'https://cdn.lolchess.gg/upload/images/champions/Smolder_1720780268-Smolder.png', itemName: '스몰더' },
  {
    ImageUrl:
      'https://cdn.lolchess.gg/upload/images/items/SuspiciousTrenchCoat_1714027929-tft_item_artifact_suspicioustrenchcoat.png',
    itemName: '수상한 외투',
  },
  {
    ImageUrl: 'https://cdn.lolchess.gg/upload/images/items/Mittens_1714029155-tft_item_artifact_mittens.png',
    itemName: '방한 장갑',
  },
  {
    ImageUrl: 'https://cdn.lolchess.gg/upload/images/items/SentinelSwarm_1721785633-SentinelSwarm.png',
    itemName: '감시자 무리',
  },
];
export default function Set12RewardComponent({ itemCount, itemName }: IRewardComponent) {
  const item = RewardImages.find((reward) => reward.itemName === itemName);
  let itemURL = 'https://cdn.dak.gg/tft/images2/tft/guide/rewards/ico-random-loot.png';
  if (item) {
    itemURL = item.ImageUrl;
  }
  return (
    <Box display={'flex'} w={'64px'} h={'52px'} justifyContent={'flex-start'} alignItems={'center'}>
      <Tooltip
        hasArrow
        placement="top"
        label={
          <VStack>
            <Text>{itemName}</Text>
          </VStack>
        }
        bg={'black'}
        rounded={'lg'}
        p={3}
      >
        <Box display={'flex'} flexDir={'column'} textAlign={'center'} alignItems={'center'}>
          <Box w={'35px'} h={'35px'} position={'relative'}>
            <Image src={itemURL} />
            <Box
              position={'absolute'} // 부모 요소를 기준으로 절대적으로 위치
              top={0} // 부모 요소의 위쪽에 배치
              right={0} // 부모 요소의 오른쪽에 배치
              bg={'rgba(0, 0, 0, 0.65)'} // 배경색 지정
              pl={1}
              pr={1}
              roundedTopRight={'10px'} // 라운드 처리
            >
              <Text
                display={'flex'}
                textAlign={'end'}
                as={'b'}
                textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
                fontSize={'13px'}
                color={'white'}
              >
                {itemCount}
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize={'11px'} w={'62px'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>
              {itemName}
            </Text>
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}
