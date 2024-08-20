import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroneComponent } from './navbarone.component';

describe('NavbaroneComponent', () => {
  let component: NavbaroneComponent;
  let fixture: ComponentFixture<NavbaroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
