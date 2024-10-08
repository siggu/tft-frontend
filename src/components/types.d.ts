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
  stats1: string;
  stats2: string;
  stats3: string;
  stats4: string;
  stats5: string;
  stats6: string;
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
  elements: ICompElement[];
  isBlind: boolean;
}
export default interface ICompElement {
  id: number;
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
  ingameIcon: string;
  name: string;
  desc: string;
  shortDesc: string;
  fromDesc: string;
  imageUrl: string;
  composition1: string;
  composition2: string;
  affectedTraitKey: string;
  isFromItem: boolean;
  isNormal: boolean;
  isEmblem: boolean;
  isSupport: boolean;
  isArtifact: boolean;
  isRadiant: boolean;
  isUnique: boolean;
  isNew: boolean;
  isHidden: boolean;
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

export default interface IMatch {
  match_id: string;
  match_detail: {
    metadata: {
      data_version: number;
      match_id: string;
      participants: string[];
    };
    info: {
      endOfGameResult: string;
      gameCreation: number;
      gameId: number;
      game_datetime: number;
      game_length: number;
      game_version: string;
      mapId: number;
      participants: Array<{
        augments: string[];
        companion: {
          content_ID: string;
          item_ID: number;
          skin_ID: number;
          species: string;
        };
        gold_left: number;
        last_round: number;
        level: number;
        missions: {
          PlayerScore2: number;
        };
        placement: number;
        players_eliminated: number;
        puuid: string;
        time_eliminated: number;
        total_damage_to_players: number;
        traits: Array<{
          name: string;
          num_units: number;
          style: number;
          tier_current: number;
          tier_total: number;
        }>;
        units: Array<{
          character_id: string;
          itemNames: string[];
          rarity: number;
          tier: number;
        }>;
      }>;
      queueId: number;
      queue_id: number;
      tft_game_type: string;
      tft_set_core_name: string;
      tft_set_number: number;
    };
  };
}

export default interface ICharms {
  name: string;
  cost: number;
  tier: string;
  _key: string;
  desc: string;
  imageUrl: string;
}
