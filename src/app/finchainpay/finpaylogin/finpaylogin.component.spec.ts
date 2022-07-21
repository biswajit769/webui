import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpayloginComponent } from './finpaylogin.component';

describe('FinpayloginComponent', () => {
  let component: FinpayloginComponent;
  let fixture: ComponentFixture<FinpayloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpayloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpayloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
