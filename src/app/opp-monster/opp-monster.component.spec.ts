import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppMonsterComponent } from './opp-monster.component';

describe('OppMonsterComponent', () => {
  let component: OppMonsterComponent;
  let fixture: ComponentFixture<OppMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
