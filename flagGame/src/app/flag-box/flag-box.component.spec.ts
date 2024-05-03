import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagBoxComponent } from './flag-box.component';

describe('FlagBoxComponent', () => {
  let component: FlagBoxComponent;
  let fixture: ComponentFixture<FlagBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
