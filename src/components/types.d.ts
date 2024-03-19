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
  pk: number;
  name: string;
  cost: number;
  photos: IPhoto[];
}

export default interface IChampionDetail extends IChampion {
  origin: ISynergy[];
  job: ISynergy[];
  health: number;
  ad: number;
  dps: number;
  attack_range: number;
  attack_speed: number;
  armor: number;
  magic_resistance: number;
  skill: ISkill;
}

export default interface IComp {
  pk: number;
  champions: IChampionDetail[];
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
