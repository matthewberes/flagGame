import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBoxComponent } from './choice-box.component';

describe('ChoiceBoxComponent', () => {
  let component: ChoiceBoxComponent;
  let fixture: ComponentFixture<ChoiceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
