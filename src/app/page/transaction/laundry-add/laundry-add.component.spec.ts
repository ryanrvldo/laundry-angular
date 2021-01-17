import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryAddComponent } from './laundry-add.component';

describe('LaundryAddComponent', () => {
  let component: LaundryAddComponent;
  let fixture: ComponentFixture<LaundryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
