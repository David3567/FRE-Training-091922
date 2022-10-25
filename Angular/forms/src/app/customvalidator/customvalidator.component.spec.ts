import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidatorComponent } from './customvalidator.component';

describe('CustomvalidatorComponent', () => {
  let component: CustomvalidatorComponent;
  let fixture: ComponentFixture<CustomvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomvalidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
