export default interface IPhoto {
  slice(): unknown;
  map(arg0: (description: any) => any): import('react').ReactNode;
  pk: number;
  file: string;
  description: string;
}

export default interface ISynergyTier {
  id: number;
  name: string;
}

export interface ISynergyStack {
  id: number;
  stack: string;
}

export default interface ISynergy {
  description: string;
  id: number;
  name: string;
  photos: IPhoto[];
  effect_1: string;
  effect_2: string;
  effect_3: string;
  effect_4: string;
  effect_5: string;
  effect_6: string;
  tier: ISynergyTier;
  stack: ISynergyStack;
}
export default interface ISynergyDetails {
  synergy_champions: ISynergy_champions[];
  id: number;
  name: string;
}
export default interface ISynergy_champions {
  champion_name: string;
  champion_pk: number;
}

export default interface ISkill {
  id: number;
  photos: IPhoto[];
  name: string;
  skill_type: string;
  start_mana: number;
  max_mana: number;
  description: string;
  effect: string;
}
export default interface IChampion {
  key: string;
  ingameKey: string | null;
  name: string;
  imageUrl: string;
  splashUrl: string;
  traits1: string | null;
  traits2: string | null;
  traits3: string | null;
  traits4: string | null;
  isHiddenGuide: boolean | null;
  isHiddenLanding: boolean | null;
  isHiddenTeamBuiler: boolean | null;
  cost1: number;
  cost2: number;
  cost3: number;
  health1: number;
  health2: number;
  health3: number;
  attackDamage1: number;
  attackDamage2: number;
  attackDamage3: number;
  damagePerSecond1: number;
  damagePerSecond2: number;
  damagePerSecond3: number;
  attackRange: number;
  attackSpeed: number;
  armor: number;
  magicalResistance: number;
  recommendItems1: string | null;
  recommendItems2: string | null;
  recommendItems3: string | null;
  recommendItems4: string | null;
  recommendItems5: string | null;
  skill_name: string;
  skill_imageUrl: string;
  skill_desc: string;
  skill_startingMana: number;
  skill_skillMana: number;
  skill_stats1: string | null;
  skill_stats2: string | null;
  skill_stats3: string | null;
  skill_stats4: string | null;
  skill_stats5: string | null;
}

export default interface IComp {
  pk: number;
  name: string;
  champions: IChampionDetail[];
  elements: ICompElement[];
}
export default interface ICompElement {
  championLevelChoice: number;
  champion: IChampionDetail;
  recommendedItem1: IItems;
  recommendedItem2: IItems;
  recommendedItem3: IItems;
}

export default interface IEncounter {
  name: string;
  description_1: string;
  description_2: string;
  description_3: string;
  description_4: string;
  photos: IPhoto[];
}
export default interface IItems {
  pk: number;
  key: string;
  name: string;
  inGameKey: string;
  description: string;
  effect: string;
  generableItem: boolean;
  composition1: string;
  composition2: string;
  tags: string;
  imageUrl: string;
}

export default interface IAugments {
  id: number;
  photos: IPhoto[];
  tier: string;
  name: string;
  description: string;
}

export interface IPortalType {
  id: number;
  photos: IPhoto[];
  portal_type: string;
  pk: number;
  file: string;
}

export default interface IPortals {
  id: number;
  portal_type: IPortalType;
  name: string;
  description: string;
}
