import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpaydashboardComponent } from './finpaydashboard.component';

describe('FinpaydashboardComponent', () => {
  let component: FinpaydashboardComponent;
  let fixture: ComponentFixture<FinpaydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpaydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpaydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
