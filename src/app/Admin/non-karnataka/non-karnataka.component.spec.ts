import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonKarnatakaComponent } from './non-karnataka.component';

describe('NonKarnatakaComponent', () => {
  let component: NonKarnatakaComponent;
  let fixture: ComponentFixture<NonKarnatakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonKarnatakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonKarnatakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
