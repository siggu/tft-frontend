type TraitColorCondition = {
  [tier: number]: {
    url: string | string[];
  };
};

// 브론즈, 실버, 골드, 플래
// 'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
// 'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
// 'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
// 'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',

// 특수 시너지
// 'https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg'

const traitColorConditions: { [key: string]: TraitColorCondition } = {
  tier_total: {
    1: { url: 'https://cdn.dak.gg/tft/images2/tft/traits/background/unique.svg' },
    2: { url: [] },
    3: {
      url: [
        'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
        'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
        'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
      ],
    },
    4: {
      url: [
        'https://cdn.dak.gg/tft/images2/tft/traits/background/bronze.svg',
        'https://cdn.dak.gg/tft/images2/tft/traits/background/silver.svg',
        'https://cdn.dak.gg/tft/images2/tft/traits/background/gold.svg',
        'https://cdn.dak.gg/tft/images2/tft/traits/background/chromatic.svg',
      ],
    },
  },
};

export const getSet12TraitBackgroundImageUrl = (traitName: string, numUnits: number): string | undefined => {
  const condition = traitColorConditions[traitName];
  if (!condition) return undefined; // 조건이 없으면 undefined 반환
};
