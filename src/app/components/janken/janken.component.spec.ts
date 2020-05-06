import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JankenComponent } from './janken.component';

describe('JankenComponent', () => {
  let component: JankenComponent;
  let fixture: ComponentFixture<JankenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JankenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JankenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
