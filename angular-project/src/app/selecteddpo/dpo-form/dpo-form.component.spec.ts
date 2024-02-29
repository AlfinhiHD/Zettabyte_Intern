import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpoFormComponent } from './dpo-form.component';

describe('DpoFormComponent', () => {
  let component: DpoFormComponent;
  let fixture: ComponentFixture<DpoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
