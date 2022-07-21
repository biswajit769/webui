import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedloansComponent } from './closedloans.component';

describe('ClosedloansComponent', () => {
  let component: ClosedloansComponent;
  let fixture: ComponentFixture<ClosedloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
