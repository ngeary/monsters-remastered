import { TestBed } from '@angular/core/testing';

import { RngService } from './rng.service';

describe('RngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RngService = TestBed.get(RngService);
    expect(service).toBeTruthy();
  });
});
