import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireAuthComponent } from './angular-fire-auth.component';

describe('AngularFireAuthComponent', () => {
  let component: AngularFireAuthComponent;
  let fixture: ComponentFixture<AngularFireAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFireAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFireAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
