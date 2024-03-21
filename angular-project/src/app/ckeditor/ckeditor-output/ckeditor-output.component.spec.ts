import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorOutputComponent } from './ckeditor-output.component';

describe('CkeditorOutputComponent', () => {
  let component: CkeditorOutputComponent;
  let fixture: ComponentFixture<CkeditorOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkeditorOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkeditorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
