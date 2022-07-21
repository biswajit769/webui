import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmDashbordComponent } from './crm-dashbord.component';

describe('CrmDashbordComponent', () => {
  let component: CrmDashbordComponent;
  let fixture: ComponentFixture<CrmDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
