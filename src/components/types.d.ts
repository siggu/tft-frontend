export default interface ISynergy {
  tags: string;
  key: string;
  ingameKey: string;
  name: string;
  desc: string;
  imageUrl: string;
  blackImageUrl: string;
  whiteImageUrl: string;
  _type: string;
  style1: string;
  style1_min: number;
  style1_max: number;
  style2: string;
  style2_min: number;
  style2_max: number;
  style3: string;
  style3_min: number;
  style3_max: number;
  style4: string;
  style4_min: number;
  stats_1: string;
  stats_2: string;
  stats_3: string;
  stats_4: string;
  stats_5: string;
  stats_6: string;
}
export default interface IChampion {
  key: string;
  ingameKey: string | null;
  name: string;
  cost: number;
  photos: IPhoto[];
}

export default interface IChampionDetail extends IChampion {
  key: string;
  ingameKey: string;
  name: string;
  imageUrl: string;
  splashUrl: string;
  traits1: string;
  traits2: string;
  traits3: string;
  traits4: string;
  isHiddenGuide: boolean;
  isHiddenLanding: boolean;
  isHiddenTeamBuiler: boolean;
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
  recommendItems1: string;
  recommendItems2: string;
  recommendItems3: string;
  recommendItems4: string;
  recommendItems5: string;
  skill_name: string;
  skill_imageUrl: string;
  skill_desc: string;
  skill_startingMana: number;
  skill_skillMana: number;
  skill_stats1: string;
  skill_stats2: string;
  skill_stats3: string;
  skill_stats4: string;
  skill_stats5: string;
}

export default interface IComp {
  pk: number;
  name: string;
  champions: IChampionDetail[];
  elements: ICompElement[];
  isBlind: boolean;
}
export default interface ICompElement {
  championLevelChoice: number;
  champion: IChampionDetail;
  recommendedItem1: IItems;
  recommendedItem2: IItems;
  recommendedItem3: IItems;
}

export default interface IEncounter {
  ingameKey: string;
  encounterDesc: string;
  name: string;
  tileImageUrl: string;
}
export default interface IItems {
  key: string;
  ingameKey: string;
  name: string;
  description: string;
  shortDesc: string;
  imageUrl: string;
  composition1: string;
  composition2: string;
  isFromItem: boolean;
  isNormal: boolean;
  isEmblem: boolean;
  isSupport: boolean;
  isArtifact: boolean;
  isRadiant: boolean;
  isUnique: boolean;
  isNew: boolean;
  tag1: string;
  tag2: string;
  tag3: string;
}

export default interface IAugments {
  key: string;
  ingameKey: string;
  name: string;
  desc: string;
  imageUrl: string;
  isHidden: boolean | null;
  tier: number;
  championIngameKey: null;
  legendCode1: string | null;
  legendCode2: string | null;
  tag1: string | null;
  tag2: string | null;
}

export default interface IPortals {
  _type: string;
  _key: string;
  title: string;
  desc: string;
  iconImageUrl: string;
}
export default interface IProfileMiniBox {
  puuid: string;
  gameName: string;
  tagLine: string;
  accountId: string;
  profileIconId: number;
  summonerId: string;
  summonerLevel: number;
}
export default interface ILeagueEntryDTO {
  summonerId: string;
  puuid: string;
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}
