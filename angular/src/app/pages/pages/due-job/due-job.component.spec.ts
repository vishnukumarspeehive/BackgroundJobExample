import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueJobComponent } from './due-job.component';

describe('DueJobComponent', () => {
  let component: DueJobComponent;
  let fixture: ComponentFixture<DueJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
