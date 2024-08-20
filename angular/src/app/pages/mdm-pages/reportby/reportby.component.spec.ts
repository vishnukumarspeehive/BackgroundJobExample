import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbyComponent } from './reportby.component';

describe('ReportbyComponent', () => {
  let component: ReportbyComponent;
  let fixture: ComponentFixture<ReportbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
