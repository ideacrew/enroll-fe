import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDescriptionComponent } from './document-description.component';

describe('DocumentDescriptionComponent', () => {
  let component: DocumentDescriptionComponent;
  let fixture: ComponentFixture<DocumentDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
