import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterValidateComponent } from './register-validate.component';

describe('RegisterValidateComponent', () => {
  let component: RegisterValidateComponent;
  let fixture: ComponentFixture<RegisterValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
