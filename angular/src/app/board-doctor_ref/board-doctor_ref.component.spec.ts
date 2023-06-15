import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDoctorRefComponent } from './board-doctor_ref.component';

describe('BoardDoctorRefComponent', () => {
  let component: BoardDoctorRefComponent;
  let fixture: ComponentFixture<BoardDoctorRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDoctorRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDoctorRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
