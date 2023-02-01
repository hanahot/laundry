import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAccountPageComponent } from './driver-account-page.component';

describe('DriverAccountPageComponent', () => {
  let component: DriverAccountPageComponent;
  let fixture: ComponentFixture<DriverAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverAccountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
