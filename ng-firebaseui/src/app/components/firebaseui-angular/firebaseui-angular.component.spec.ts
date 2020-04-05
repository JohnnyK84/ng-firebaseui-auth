import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseuiAngularComponent } from './firebaseui-angular.component';

describe('FirebaseuiAngularComponent', () => {
  let component: FirebaseuiAngularComponent;
  let fixture: ComponentFixture<FirebaseuiAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseuiAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseuiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
