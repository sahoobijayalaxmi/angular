import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observabledemo1Component } from './observabledemo1.component';

describe('Observabledemo1Component', () => {
  let component: Observabledemo1Component;
  let fixture: ComponentFixture<Observabledemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Observabledemo1Component]
    });
    fixture = TestBed.createComponent(Observabledemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
