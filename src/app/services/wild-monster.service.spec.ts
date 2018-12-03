import { TestBed } from '@angular/core/testing';

import { WildMonsterService } from './wild-monster.service';

describe('WildMonsterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WildMonsterService = TestBed.get(WildMonsterService);
    expect(service).toBeTruthy();
  });
});
