import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedmotorComponent } from './selectedmotor.component';

describe('SelectedmotorComponent', () => {
  let component: SelectedmotorComponent;
  let fixture: ComponentFixture<SelectedmotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedmotorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedmotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
