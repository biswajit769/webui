import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerfaqComponent } from './borrowerfaq.component';

describe('BorrowerfaqComponent', () => {
  let component: BorrowerfaqComponent;
  let fixture: ComponentFixture<BorrowerfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
