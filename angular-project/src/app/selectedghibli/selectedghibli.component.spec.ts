import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedghibliComponent } from './selectedghibli.component';

describe('SelectedghibliComponent', () => {
  let component: SelectedghibliComponent;
  let fixture: ComponentFixture<SelectedghibliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedghibliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedghibliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
