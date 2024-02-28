import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantBannerComponent } from './plant-banner.component';

describe('PlantBannerComponent', () => {
  let component: PlantBannerComponent;
  let fixture: ComponentFixture<PlantBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
