import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostponedjobsComponent } from './postponedjobs.component';

describe('PostponedjobsComponent', () => {
  let component: PostponedjobsComponent;
  let fixture: ComponentFixture<PostponedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostponedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostponedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
