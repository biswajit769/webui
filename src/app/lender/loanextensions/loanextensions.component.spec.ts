import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanextensionsComponent } from './loanextensions.component';

describe('LoanextensionsComponent', () => {
  let component: LoanextensionsComponent;
  let fixture: ComponentFixture<LoanextensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanextensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanextensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
