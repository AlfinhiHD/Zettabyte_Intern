import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpriceCartComponent } from './totalprice-cart.component';

describe('TotalpriceCartComponent', () => {
  let component: TotalpriceCartComponent;
  let fixture: ComponentFixture<TotalpriceCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalpriceCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalpriceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
