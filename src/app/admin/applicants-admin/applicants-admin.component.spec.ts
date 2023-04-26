import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsAdminComponent } from './applicants-admin.component';

describe('ApplicantsAdminComponent', () => {
  let component: ApplicantsAdminComponent;
  let fixture: ComponentFixture<ApplicantsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
