import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientDetailComponent } from './add-patient-detail.component';

describe('AddPatientDetailComponent', () => {
  let component: AddPatientDetailComponent;
  let fixture: ComponentFixture<AddPatientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
