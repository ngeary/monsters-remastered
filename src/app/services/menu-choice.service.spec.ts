import { TestBed } from '@angular/core/testing';

import { MenuChoiceService } from './menu-choice.service';

describe('MenuChoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuChoiceService = TestBed.get(MenuChoiceService);
    expect(service).toBeTruthy();
  });
});
