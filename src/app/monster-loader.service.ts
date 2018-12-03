import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonsterType } from './monster-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MonsterLoaderService {

  public mts: MonsterType[];
  private monsterTypesSource = new BehaviorSubject<MonsterType[]>(null);
  public monsterTypes = this.monsterTypesSource.asObservable();

  constructor(private http: HttpClient) {}

  loadMonsterTypes() {
    this.http.get<MonsterType[]>('assets/data/animal-monsters.json').subscribe(mons => this.mts = mons);
    this.monsterTypesSource.next(this.mts);
  }

}
