import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceConceptComponent } from './advance-concept.component';

describe('AdvanceConceptComponent', () => {
  let component: AdvanceConceptComponent;
  let fixture: ComponentFixture<AdvanceConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
