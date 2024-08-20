import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpbplanDetailByHrComponent } from './jpbplan-detail-by-hr.component';

describe('JpbplanDetailByHrComponent', () => {
  let component: JpbplanDetailByHrComponent;
  let fixture: ComponentFixture<JpbplanDetailByHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpbplanDetailByHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpbplanDetailByHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
