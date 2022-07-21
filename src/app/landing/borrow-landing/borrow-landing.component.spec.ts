import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowLandingComponent } from './borrow-landing.component';

describe('BorrowLandingComponent', () => {
  let component: BorrowLandingComponent;
  let fixture: ComponentFixture<BorrowLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
