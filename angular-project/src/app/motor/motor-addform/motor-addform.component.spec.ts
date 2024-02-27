import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorAddformComponent } from './motor-addform.component';

describe('MotorAddformComponent', () => {
  let component: MotorAddformComponent;
  let fixture: ComponentFixture<MotorAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorAddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
