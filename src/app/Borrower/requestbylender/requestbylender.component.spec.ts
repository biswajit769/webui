import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbylenderComponent } from './requestbylender.component';

describe('RequestbylenderComponent', () => {
  let component: RequestbylenderComponent;
  let fixture: ComponentFixture<RequestbylenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbylenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbylenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
