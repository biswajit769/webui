import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewloanRequestComponent } from './newloan-request.component';

describe('NewloanRequestComponent', () => {
  let component: NewloanRequestComponent;
  let fixture: ComponentFixture<NewloanRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewloanRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewloanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
