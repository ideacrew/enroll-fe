import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureShellComponent } from './feature-shell.component';

describe('FeatureShellComponent', () => {
  let component: FeatureShellComponent;
  let fixture: ComponentFixture<FeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
