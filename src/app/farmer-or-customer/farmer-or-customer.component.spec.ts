import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerOrCustomerComponent } from './farmer-or-customer.component';

describe('FarmerOrCustomerComponent', () => {
  let component: FarmerOrCustomerComponent;
  let fixture: ComponentFixture<FarmerOrCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerOrCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerOrCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
