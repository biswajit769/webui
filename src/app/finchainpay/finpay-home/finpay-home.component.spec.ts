import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpayHomeComponent } from './finpay-home.component';

describe('FinpayHomeComponent', () => {
  let component: FinpayHomeComponent;
  let fixture: ComponentFixture<FinpayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
