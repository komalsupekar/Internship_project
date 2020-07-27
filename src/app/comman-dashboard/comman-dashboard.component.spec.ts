import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanDashboardComponent } from './comman-dashboard.component';

describe('CommanDashboardComponent', () => {
  let component: CommanDashboardComponent;
  let fixture: ComponentFixture<CommanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
