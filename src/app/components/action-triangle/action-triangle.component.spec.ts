import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTriangleComponent } from './action-triangle.component';

describe('ActionTriangleComponent', () => {
  let component: ActionTriangleComponent;
  let fixture: ComponentFixture<ActionTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
