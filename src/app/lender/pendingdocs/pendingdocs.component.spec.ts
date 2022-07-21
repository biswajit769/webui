import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingdocsComponent } from './pendingdocs.component';

describe('PendingdocsComponent', () => {
  let component: PendingdocsComponent;
  let fixture: ComponentFixture<PendingdocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingdocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
