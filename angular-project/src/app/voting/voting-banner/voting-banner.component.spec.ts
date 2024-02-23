import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingBannerComponent } from './voting-banner.component';

describe('VotingBannerComponent', () => {
  let component: VotingBannerComponent;
  let fixture: ComponentFixture<VotingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
