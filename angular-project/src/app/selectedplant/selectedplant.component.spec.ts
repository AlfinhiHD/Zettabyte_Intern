import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPlantComponent } from './selectedplant.component';

describe('SelectedplantComponent', () => {
  let component: SelectedPlantComponent;
  let fixture: ComponentFixture<SelectedPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedPlantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
