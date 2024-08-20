import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBMComponent } from './cbm.component';

describe('CBMComponent', () => {
  let component: CBMComponent;
  let fixture: ComponentFixture<CBMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CBMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
