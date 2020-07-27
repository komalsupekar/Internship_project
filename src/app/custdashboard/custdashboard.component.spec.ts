import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdashboardComponent } from './custdashboard.component';

describe('CustdashboardComponent', () => {
  let component: CustdashboardComponent;
  let fixture: ComponentFixture<CustdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
