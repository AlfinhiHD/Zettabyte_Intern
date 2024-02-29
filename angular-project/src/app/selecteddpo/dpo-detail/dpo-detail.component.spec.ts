import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpoDetailComponent } from './dpo-detail.component';

describe('DpoDetailComponent', () => {
  let component: DpoDetailComponent;
  let fixture: ComponentFixture<DpoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
