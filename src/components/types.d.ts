export default interface IPhoto {
  pk: number;
  file: string;
  description: string;
}

export default interface IJob {
  description: string;
  id: number;
  name: string;
  photos: IPhoto[];
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
  origin: IJob[];
  job: IJob[];
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
