import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbmconfigureComponent } from './cbmconfigure.component';

describe('CbmconfigureComponent', () => {
  let component: CbmconfigureComponent;
  let fixture: ComponentFixture<CbmconfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbmconfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbmconfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
