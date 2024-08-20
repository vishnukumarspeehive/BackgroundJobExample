import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobplanHistoryComponent } from './jobplan-history.component';

describe('JobplanHistoryComponent', () => {
  let component: JobplanHistoryComponent;
  let fixture: ComponentFixture<JobplanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobplanHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobplanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
