import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingAddFormComponent } from './voting-add-form.component';

describe('VotingAddFormComponent', () => {
  let component: VotingAddFormComponent;
  let fixture: ComponentFixture<VotingAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
