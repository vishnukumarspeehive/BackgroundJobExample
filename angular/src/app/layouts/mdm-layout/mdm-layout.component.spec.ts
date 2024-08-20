import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdmLayoutComponent } from './mdm-layout.component';

describe('MdmLayoutComponent', () => {
  let component: MdmLayoutComponent;
  let fixture: ComponentFixture<MdmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdmLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
