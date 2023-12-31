import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceComponent } from 'src/app/components/add-service/add-service.component';

describe('AddServiceComponent', () => {
  let component: AddServiceComponent;
  let fixture: ComponentFixture<AddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
