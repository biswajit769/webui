import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanExtensionComponent } from './loan-extension.component';

describe('LoanExtensionComponent', () => {
  let component: LoanExtensionComponent;
  let fixture: ComponentFixture<LoanExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
