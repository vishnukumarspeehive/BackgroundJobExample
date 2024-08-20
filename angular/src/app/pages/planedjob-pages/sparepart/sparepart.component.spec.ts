import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartComponent } from './sparepart.component';

describe('SparepartComponent', () => {
  let component: SparepartComponent;
  let fixture: ComponentFixture<SparepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
