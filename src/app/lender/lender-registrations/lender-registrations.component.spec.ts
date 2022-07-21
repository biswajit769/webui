import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderRegistrationsComponent } from './lender-registrations.component';

describe('LenderRegistrationsComponent', () => {
  let component: LenderRegistrationsComponent;
  let fixture: ComponentFixture<LenderRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
