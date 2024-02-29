import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpoCardComponent } from './dpo-card.component';

describe('DpoCardComponent', () => {
  let component: DpoCardComponent;
  let fixture: ComponentFixture<DpoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
