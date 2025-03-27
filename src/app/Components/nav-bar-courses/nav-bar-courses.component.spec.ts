import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCoursesComponent } from './nav-bar-courses.component';

describe('NavBarCoursesComponent', () => {
  let component: NavBarCoursesComponent;
  let fixture: ComponentFixture<NavBarCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
