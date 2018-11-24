import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuChoiceService {

  private messageSource = new BehaviorSubject<string>('default message');
  public currentMessage = this.messageSource.asObservable();

  private monsterSource = new BehaviorSubject<number>(3);
  public currentMonster = this.monsterSource.asObservable();

  constructor() { }

  public changeMessage(message: string) {
    this.messageSource.next(message);
  }

  public changeMonsterNum(monsterNum: number) {
    this.monsterSource.next(monsterNum);
  }

}
