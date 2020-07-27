import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersOptionComponent } from './farmers-option.component';

describe('FarmersOptionComponent', () => {
  let component: FarmersOptionComponent;
  let fixture: ComponentFixture<FarmersOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
