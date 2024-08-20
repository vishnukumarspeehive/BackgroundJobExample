import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmenttypeComponent } from './equipmenttype.component';

describe('EquipmenttypeComponent', () => {
  let component: EquipmenttypeComponent;
  let fixture: ComponentFixture<EquipmenttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmenttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
