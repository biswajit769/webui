import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageborrowerComponent } from './manageborrower.component';

describe('ManageborrowerComponent', () => {
  let component: ManageborrowerComponent;
  let fixture: ComponentFixture<ManageborrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageborrowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageborrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
