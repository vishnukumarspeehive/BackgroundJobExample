import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEquipmentComponent } from './import-equipment.component';

describe('ImportEquipmentComponent', () => {
  let component: ImportEquipmentComponent;
  let fixture: ComponentFixture<ImportEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
