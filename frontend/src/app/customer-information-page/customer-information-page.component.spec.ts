import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInformationPageComponent } from './customer-information-page.component';

describe('CustomerInformationPageComponent', () => {
  let component: CustomerInformationPageComponent;
  let fixture: ComponentFixture<CustomerInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInformationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
