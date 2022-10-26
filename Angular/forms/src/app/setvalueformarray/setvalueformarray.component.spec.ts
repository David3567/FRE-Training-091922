import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetvalueformarrayComponent } from './setvalueformarray.component';

describe('SetvalueformarrayComponent', () => {
  let component: SetvalueformarrayComponent;
  let fixture: ComponentFixture<SetvalueformarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetvalueformarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetvalueformarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
