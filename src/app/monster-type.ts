import { MonsterLoaderService } from './monster-loader.service';

export class MonsterType {

  public static monsterTypes: MonsterType[];
  id: number;
  name: string;
  img: string;

  constructor(public monsterLoader: MonsterLoaderService) {}

  loadMonsterTypes() {
    this.monsterLoader.getMonsterTypes().subscribe(mons => MonsterType.monsterTypes = mons);
  }

  get staticMonsterTypes() {
    return MonsterType.monsterTypes;
  }

}
