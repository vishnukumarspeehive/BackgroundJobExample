import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestLayoutComponent } from './test-layout.component';

describe('TestLayoutComponent', () => {
  let component: TestLayoutComponent;
  let fixture: ComponentFixture<TestLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
