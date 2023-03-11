import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallStudentComponent } from './getall-student.component';

describe('GetallStudentComponent', () => {
  let component: GetallStudentComponent;
  let fixture: ComponentFixture<GetallStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
