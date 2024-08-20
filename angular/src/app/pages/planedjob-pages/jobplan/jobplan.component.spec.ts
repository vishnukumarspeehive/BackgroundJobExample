import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobplanComponent } from './jobplan.component';

describe('JobplanComponent', () => {
  let component: JobplanComponent;
  let fixture: ComponentFixture<JobplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
