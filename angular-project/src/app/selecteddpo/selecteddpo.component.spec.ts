import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteddpoComponent } from './selecteddpo.component';

describe('SelecteddpoComponent', () => {
  let component: SelecteddpoComponent;
  let fixture: ComponentFixture<SelecteddpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteddpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecteddpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
