import { TestBed } from '@angular/core/testing';

import { MonsterLoaderService } from './monster-loader.service';

describe('MonsterLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterLoaderService = TestBed.get(MonsterLoaderService);
    expect(service).toBeTruthy();
  });
});
