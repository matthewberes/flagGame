import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChoiceBoxComponent } from './game-choice-box.component';

describe('GameChoiceBoxComponent', () => {
  let component: GameChoiceBoxComponent;
  let fixture: ComponentFixture<GameChoiceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameChoiceBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameChoiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
