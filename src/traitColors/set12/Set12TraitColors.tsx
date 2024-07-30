interface TraitColorCondition {
  urls: string[];
  thresholds: number[];
}

const traitColorConditions: { [key: string]: TraitColorCondition } = {
  // 아르카나
  TFT12_Arcana: {
    thresholds: [2, 3, 4, 5],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 초월체
  TFT12_Ascendant: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 요새
  TFT12_Bastion: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 박쥐 여왕
  TFT12_BatQueen: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 단짝
  TFT12_BestFriends: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 폭파단
  TFT12_Blaster: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 시공간
  TFT12_Chrono: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 용
  TFT12_Dragon: {
    thresholds: [2, 3],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },
  // 드루이드
  TFT12_Druid: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 섬뜩한 힘
  TFT12_Eldritch: {
    thresholds: [3, 5, 7, 10],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 요정
  TFT12_Faerie: {
    thresholds: [2, 4, 6, 9],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 서리
  TFT12_Frost: {
    thresholds: [3, 5, 7, 9],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 벌꿀술사
  TFT12_Honeymancy: {
    thresholds: [3, 5, 7],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 사냥꾼
  TFT12_Hunter: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 마도사
  TFT12_Incantor: {
    thresholds: [2, 4],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 요술사
  TFT12_Mage: {
    thresholds: [3, 5, 7, 9],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 쇄도자
  TFT12_Multistriker: {
    thresholds: [3, 5, 7, 9],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 차원문
  TFT12_Portal: {
    thresholds: [3, 6, 8, 10],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
    ],
  },

  // 보호술사
  TFT12_Preserver: {
    thresholds: [2, 3, 4, 5],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 화염
  TFT12_Pyro: {
    thresholds: [2, 3, 4, 5],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 허기
  TFT12_Ravenous: {
    thresholds: [1],
    urls: ['https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'],
  },

  // 학자
  TFT12_Scholar: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 형상변환자
  TFT12_Shapeshifter: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 달콤술사
  TFT12_Sugarcraft: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 선봉대
  TFT12_Vanguard: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 전사
  TFT12_Warrior: {
    thresholds: [2, 4, 6],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },

  // 마녀
  TFT12_Witchcraft: {
    thresholds: [2, 4, 6, 8],
    urls: [
      'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
    ],
  },
};

export const getSet12TraitBackgroundImageUrl = (traitName: string, numUnits: number): string | undefined => {
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
