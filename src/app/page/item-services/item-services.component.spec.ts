import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemServicesComponent } from './item-services.component';

describe('ItemServicesComponent', () => {
  let component: ItemServicesComponent;
  let fixture: ComponentFixture<ItemServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
