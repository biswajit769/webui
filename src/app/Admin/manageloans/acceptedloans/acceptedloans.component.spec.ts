import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedloansComponent } from './acceptedloans.component';

describe('AcceptedloansComponent', () => {
  let component: AcceptedloansComponent;
  let fixture: ComponentFixture<AcceptedloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
