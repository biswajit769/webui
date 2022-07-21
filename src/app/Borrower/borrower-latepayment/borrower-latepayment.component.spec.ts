import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerLatepaymentComponent } from './borrower-latepayment.component';

describe('BorrowerLatepaymentComponent', () => {
  let component: BorrowerLatepaymentComponent;
  let fixture: ComponentFixture<BorrowerLatepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerLatepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerLatepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
