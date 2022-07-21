import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicemanagementComponent } from './invoicemanagement.component';

describe('InvoicemanagementComponent', () => {
  let component: InvoicemanagementComponent;
  let fixture: ComponentFixture<InvoicemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
