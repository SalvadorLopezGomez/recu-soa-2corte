import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticationValidateComponent } from './autentication-validate.component';

describe('AutenticationValidateComponent', () => {
  let component: AutenticationValidateComponent;
  let fixture: ComponentFixture<AutenticationValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticationValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticationValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
