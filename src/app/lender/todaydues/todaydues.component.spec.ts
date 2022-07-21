import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayduesComponent } from './todaydues.component';

describe('TodayduesComponent', () => {
  let component: TodayduesComponent;
  let fixture: ComponentFixture<TodayduesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayduesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
