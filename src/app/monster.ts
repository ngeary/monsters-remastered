import { MonsterLoaderService } from './monster-loader.service';

export class Monster {
  // TODO: monsterTypes needs to be static
  monsterTypes: Monster[];
  id: number;
  name: string;
  img: string;

  constructor(public monsterLoader: MonsterLoaderService) {}

  loadMonsterTypes() {
    this.monsterLoader.getMonsterTypes().subscribe(mons => this.monsterTypes = mons);
  }

  /*
  getMonsterTypeById(targetId: number): Monster {
    this.loadMonsterTypes();
    console.log(this.monsterTypes[1].name);
    for (const mt of this.monsterTypes) {
      if (mt.id === targetId) {
        return mt;
      }
    }
    return null;
  }
  */

}
