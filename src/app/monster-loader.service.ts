import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonsterType } from './monster-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MonsterLoaderService {

  constructor(private http: HttpClient) {}

  // myData: any;

  listMons() {
    this.http.get('assets/data/animal-monsters.json').subscribe(data => {
      console.log(data);
    });
  }

  getMonsterTypes(): Observable<MonsterType[]> {
    return this.http.get<MonsterType[]>('assets/data/animal-monsters.json');
  }

}
