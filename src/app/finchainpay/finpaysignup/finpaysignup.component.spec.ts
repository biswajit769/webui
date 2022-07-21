import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinpaysignupComponent } from './finpaysignup.component';

describe('FinpaysignupComponent', () => {
  let component: FinpaysignupComponent;
  let fixture: ComponentFixture<FinpaysignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinpaysignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinpaysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
