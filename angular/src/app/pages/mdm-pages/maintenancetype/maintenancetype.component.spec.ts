import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancetypeComponent } from './maintenancetype.component';

describe('MaintenancetypeComponent', () => {
  let component: MaintenancetypeComponent;
  let fixture: ComponentFixture<MaintenancetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
