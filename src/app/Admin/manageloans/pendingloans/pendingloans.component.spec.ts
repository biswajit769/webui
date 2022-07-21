import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingloansComponent } from './pendingloans.component';

describe('PendingloansComponent', () => {
  let component: PendingloansComponent;
  let fixture: ComponentFixture<PendingloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
