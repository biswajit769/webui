import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpaymainComponent } from './finpaymain.component';

describe('FinpaymainComponent', () => {
  let component: FinpaymainComponent;
  let fixture: ComponentFixture<FinpaymainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpaymainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpaymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
