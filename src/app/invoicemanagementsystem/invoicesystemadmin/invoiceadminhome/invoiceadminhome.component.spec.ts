import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceadminhomeComponent } from './invoiceadminhome.component';

describe('InvoiceadminhomeComponent', () => {
  let component: InvoiceadminhomeComponent;
  let fixture: ComponentFixture<InvoiceadminhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceadminhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceadminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
