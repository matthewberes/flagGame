import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScoreBoxComponent } from './game-score-box.component';

describe('GameScoreBoxComponent', () => {
  let component: GameScoreBoxComponent;
  let fixture: ComponentFixture<GameScoreBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameScoreBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameScoreBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
