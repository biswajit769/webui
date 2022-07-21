import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPricingComponent } from './fees-pricing.component';

describe('FeesPricingComponent', () => {
  let component: FeesPricingComponent;
  let fixture: ComponentFixture<FeesPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
