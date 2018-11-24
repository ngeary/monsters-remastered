import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMonsterComponent } from './player-monster.component';

describe('PlayerMonsterComponent', () => {
  let component: PlayerMonsterComponent;
  let fixture: ComponentFixture<PlayerMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
