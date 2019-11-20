import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticationTwostepsComponent } from './autentication-twosteps.component';

describe('AutenticationTwostepsComponent', () => {
  let component: AutenticationTwostepsComponent;
  let fixture: ComponentFixture<AutenticationTwostepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticationTwostepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticationTwostepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
