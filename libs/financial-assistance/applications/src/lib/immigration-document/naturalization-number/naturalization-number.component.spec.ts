import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalizationNumberComponent } from './naturalization-number.component';

describe('NaturalizationNumberComponent', () => {
  let component: NaturalizationNumberComponent;
  let fixture: ComponentFixture<NaturalizationNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalizationNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalizationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
