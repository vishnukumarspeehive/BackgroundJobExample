import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduledjobComponent } from './unscheduledjob.component';

describe('UnscheduledjobComponent', () => {
  let component: UnscheduledjobComponent;
  let fixture: ComponentFixture<UnscheduledjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnscheduledjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscheduledjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
