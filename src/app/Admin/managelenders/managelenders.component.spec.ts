import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelendersComponent } from './managelenders.component';

describe('ManagelendersComponent', () => {
  let component: ManagelendersComponent;
  let fixture: ComponentFixture<ManagelendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagelendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagelendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
