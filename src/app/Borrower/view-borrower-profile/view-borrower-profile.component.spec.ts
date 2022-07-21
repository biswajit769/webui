import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBorrowerProfileComponent } from './view-borrower-profile.component';

describe('ViewBorrowerProfileComponent', () => {
  let component: ViewBorrowerProfileComponent;
  let fixture: ComponentFixture<ViewBorrowerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBorrowerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBorrowerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
