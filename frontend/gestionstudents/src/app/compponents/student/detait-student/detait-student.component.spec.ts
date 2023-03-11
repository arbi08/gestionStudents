import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitStudentComponent } from './detait-student.component';

describe('DetaitStudentComponent', () => {
  let component: DetaitStudentComponent;
  let fixture: ComponentFixture<DetaitStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaitStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaitStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
