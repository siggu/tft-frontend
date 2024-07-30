interface TraitColorCondition {
  urls: string[];
  thresholds: number[];
}

const traitColorConditions: { [key: string]: TraitColorCondition } = {
  // 11시즌 시너지
  // 이타심
  TFT11_Altruist: {
    thresholds: [2, 3, 4],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 비전 마법사
  TFT11_Arcanist: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 예술가
  TFT11_Artist: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 거대괴수
  TFT11_Behemoth: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 난동꾼
  TFT11_Bruiser: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 용군주
  TFT11_Dragonlord: {
    thresholds: [2, 3, 4, 5],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 숲지기
  TFT11_Dryad: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 결투가
  TFT11_Duelist: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 귀인
  TFT11_Exalted: {
    thresholds: [3, 5],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 필연
  TFT11_Fated: {
    thresholds: [3, 5, 7, 10],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 행운
  TFT11_Fortune: {
    thresholds: [3, 5, 7],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 혼령
  TFT11_Ghostly: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 호걸
  TFT11_Great: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 천계
  TFT11_Heavenly: {
    thresholds: [2, 3, 7],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 먹그림자
  TFT11_InkShadow: {
    thresholds: [3, 5, 7],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 기원자
  TFT11_Invoker: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 연인
  TFT11_Lovers: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 신화
  TFT11_Mythic: {
    thresholds: [3, 5, 7, 10],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 도자기
  TFT11_Porcelain: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 사신
  TFT11_Reaper: {
    thresholds: [2, 4],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 현자
  TFT11_Sage: {
    thresholds: [2, 3, 4, 5],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 저격수
  TFT11_Sniper: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 정령 주술사
  TFT11_SpiritWalker: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 이야기꾼
  TFT11_Storyweaver: {
    thresholds: [3, 5, 7, 10],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 재주꾼
  TFT11_Trickshot: {
    thresholds: [2, 4],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 암영
  TFT11_Umbral: {
    thresholds: [2, 4, 6, 9],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 파수꾼
  TFT11_Warden: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 5주년 시너지
  // 빌지워터
  TFTEvent5YR_Bilgewater: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 우두머리
  TFTEvent5YR_Boss: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 악의 여단
  TFTEvent5YR_Coven: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 디스코
  TFTEvent5YR_Disco: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 나무정령
  TFTEvent5YR_Elderwood: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 빙하
  TFTEvent5YR_Glacial: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 악동
  TFTEvent5YR_Hellion: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 제국
  TFTEvent5YR_Imperial: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 재즈
  TFTEvent5YR_Jazz: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 레이저단
  TFTEvent5YR_LaserCorps: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 마스코트
  TFTEvent5YR_Mascot: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 메크 파일럿
  TFTEvent5YR_MechPilot: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 대지
  TFTEvent5YR_Mountain: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 유령
  TFTEvent5YR_Phantom: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 반군
  TFTEvent5YR_Rebel: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 빛비늘
  TFTEvent5YR_Shimmerscale: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 슈리마
  TFTEvent5YR_Shurima: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 사교계
  TFTEvent5YR_Socialite: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 조련사
  TFTEvent5YR_Trainer: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 요들
  TFTEvent5YR_Yordle: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 요들 군주
  TFTEvent5YR_YordleLord: {
    thresholds: [1, 2],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },
};

export const getSet11TraitBackgroundImageUrl = (traitName: string, numUnits: number): string | undefined => {
  const condition = traitColorConditions[traitName];
  if (!condition) return undefined; // 조건이 없으면 undefined 반환

  // if (numUnits < condition.thresholds[0]) {
  //   return undefined; // 첫 번째 threshold보다 작으면 undefined 반환
  // } else if (numUnits <= condition.thresholds[0]) {
  //   return condition.urls[0]; // 첫 번째 threshold 이내일 때 첫 번째 URL 반환
  // } else if (numUnits <= condition.thresholds[1]) {
  //   return condition.urls[1]; // 두 번째 threshold 이내일 때 두 번째 URL 반환
  // } else if (numUnits <= condition.thresholds[2]) {
  //   return condition.urls[2]; // 세 번째 threshold 이내일 때 세 번째 URL 반환
  // } else if (numUnits <= condition.thresholds[3]) {
  //   return condition.urls[2]; // 네 번째 threshold 이상일 때 마지막 URL 반환
  // } else {
  //   return condition.urls[3];
  // }

  if (numUnits < condition.thresholds[0]) {
    return undefined;
  } else if (numUnits < condition.thresholds[1]) {
    return condition.urls[0];
  } else if (numUnits < condition.thresholds[2]) {
    return condition.urls[1];
  } else if (numUnits < condition.thresholds[3]) {
    return condition.urls[2];
  } else {
    return condition.urls[3];
  }
};
