import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSparepartComponent } from './import-sparepart.component';

describe('ImportSparepartComponent', () => {
  let component: ImportSparepartComponent;
  let fixture: ComponentFixture<ImportSparepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSparepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSparepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
