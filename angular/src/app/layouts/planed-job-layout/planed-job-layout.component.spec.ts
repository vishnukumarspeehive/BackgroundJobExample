import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanedJobLayoutComponent } from './planed-job-layout.component';

describe('PlanedJobLayoutComponent', () => {
  let component: PlanedJobLayoutComponent;
  let fixture: ComponentFixture<PlanedJobLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanedJobLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanedJobLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
