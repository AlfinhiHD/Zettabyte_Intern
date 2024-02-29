import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpoBannerComponent } from './dpo-banner.component';

describe('DpoBannerComponent', () => {
  let component: DpoBannerComponent;
  let fixture: ComponentFixture<DpoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpoBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
