import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedplantComponent } from './selectedplant.component';

describe('SelectedplantComponent', () => {
  let component: SelectedplantComponent;
  let fixture: ComponentFixture<SelectedplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedplantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
