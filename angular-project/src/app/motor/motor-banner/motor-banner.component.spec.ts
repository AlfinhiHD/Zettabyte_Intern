import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBannerComponent } from './motor-banner.component';

describe('MotorBannerComponent', () => {
  let component: MotorBannerComponent;
  let fixture: ComponentFixture<MotorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
