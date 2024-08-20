import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportJobplanComponent } from './import-jobplan.component';

describe('ImportEquipmentComponent', () => {
  let component: ImportJobplanComponent;
  let fixture: ComponentFixture<ImportJobplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportJobplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportJobplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
