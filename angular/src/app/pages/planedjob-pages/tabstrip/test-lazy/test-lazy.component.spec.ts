import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLazyComponent } from './test-lazy.component';

describe('TestLazyComponent', () => {
  let component: TestLazyComponent;
  let fixture: ComponentFixture<TestLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
