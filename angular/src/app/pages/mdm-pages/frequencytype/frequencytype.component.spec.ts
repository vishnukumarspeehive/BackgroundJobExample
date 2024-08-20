import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencytypeComponent } from './frequencytype.component';

describe('FrequencytypeComponent', () => {
  let component: FrequencytypeComponent;
  let fixture: ComponentFixture<FrequencytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
