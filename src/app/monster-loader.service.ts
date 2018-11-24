import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monster } from './monster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterLoaderService {

  constructor(private http: HttpClient) {}
  myData: any;

  listMons() {
    this.http.get('assets/data/animal-monsters.json').subscribe(data => {
      console.log(data);
    });
  }

  getMonsterTypes(): Observable<Monster[]> {
    return this.http.get<Monster[]>('assets/data/animal-monsters.json');
  }

}
