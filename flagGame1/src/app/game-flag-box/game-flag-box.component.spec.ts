import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFlagBoxComponent } from './game-flag-box.component';

describe('GameFlagBoxComponent', () => {
  let component: GameFlagBoxComponent;
  let fixture: ComponentFixture<GameFlagBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFlagBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameFlagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
