import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RngService {

  constructor() { }

  public getRandomInRange(min, max) { // returns integer between min and max, inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
