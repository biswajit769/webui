import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceadminsidebarComponent } from './invoiceadminsidebar.component';

describe('InvoiceadminsidebarComponent', () => {
  let component: InvoiceadminsidebarComponent;
  let fixture: ComponentFixture<InvoiceadminsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceadminsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceadminsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
