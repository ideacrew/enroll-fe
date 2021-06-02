import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalizedCitizenComponent } from './naturalized-citizen.component';

describe('NaturalizedCitizenComponent', () => {
  let component: NaturalizedCitizenComponent;
  let fixture: ComponentFixture<NaturalizedCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalizedCitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalizedCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
