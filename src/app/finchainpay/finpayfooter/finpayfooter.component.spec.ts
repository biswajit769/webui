import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpayfooterComponent } from './finpayfooter.component';

describe('FinpayfooterComponent', () => {
  let component: FinpayfooterComponent;
  let fixture: ComponentFixture<FinpayfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpayfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpayfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
