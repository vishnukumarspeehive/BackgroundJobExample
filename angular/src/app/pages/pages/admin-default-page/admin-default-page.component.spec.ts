import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDefaultPageComponent } from './admin-default-page.component';

describe('AdminDefaultPageComponent', () => {
  let component: AdminDefaultPageComponent;
  let fixture: ComponentFixture<AdminDefaultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDefaultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
