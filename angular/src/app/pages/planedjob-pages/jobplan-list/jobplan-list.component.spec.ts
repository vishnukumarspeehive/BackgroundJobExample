import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobplanListComponent } from './jobplan-list.component';

describe('JobplanListComponent', () => {
  let component: JobplanListComponent;
  let fixture: ComponentFixture<JobplanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobplanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
