import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedmentorComponent } from './selectedmentor.component';

describe('SelectedmentorComponent', () => {
  let component: SelectedmentorComponent;
  let fixture: ComponentFixture<SelectedmentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedmentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
