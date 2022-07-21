import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerremarksComponent } from './borrowerremarks.component';

describe('BorrowerremarksComponent', () => {
  let component: BorrowerremarksComponent;
  let fixture: ComponentFixture<BorrowerremarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerremarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerremarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
