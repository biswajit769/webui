import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateofinterestComponent } from './rateofinterest.component';

describe('RateofinterestComponent', () => {
  let component: RateofinterestComponent;
  let fixture: ComponentFixture<RateofinterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateofinterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateofinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
