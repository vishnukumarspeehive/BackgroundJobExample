import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownjobComponent } from './breakdownjob.component';

describe('BreakdownjobComponent', () => {
  let component: BreakdownjobComponent;
  let fixture: ComponentFixture<BreakdownjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakdownjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
