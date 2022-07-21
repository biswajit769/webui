import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DibursedloansComponent } from './dibursedloans.component';

describe('DibursedloansComponent', () => {
  let component: DibursedloansComponent;
  let fixture: ComponentFixture<DibursedloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DibursedloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DibursedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
