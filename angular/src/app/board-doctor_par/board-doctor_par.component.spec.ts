import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDoctorParComponent } from './board-doctor_par.component';

describe('BoardDoctorParComponent', () => {
  let component: BoardDoctorParComponent;
  let fixture: ComponentFixture<BoardDoctorParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDoctorParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDoctorParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
