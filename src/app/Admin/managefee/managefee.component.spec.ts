import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefeeComponent } from './managefee.component';

describe('ManagefeeComponent', () => {
  let component: ManagefeeComponent;
  let fixture: ComponentFixture<ManagefeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
