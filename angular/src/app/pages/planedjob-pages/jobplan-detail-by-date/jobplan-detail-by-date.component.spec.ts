import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobplanDetailByDateComponent } from './jobplan-detail-by-date.component';

describe('JobplanDetailByDateComponent', () => {
  let component: JobplanDetailByDateComponent;
  let fixture: ComponentFixture<JobplanDetailByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobplanDetailByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobplanDetailByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
