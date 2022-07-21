import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerdashboardComponent } from './borrowerdashboard.component';

describe('BorrowerdashboardComponent', () => {
  let component: BorrowerdashboardComponent;
  let fixture: ComponentFixture<BorrowerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
