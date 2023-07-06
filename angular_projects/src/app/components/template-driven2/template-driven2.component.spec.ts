import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriven2Component } from './template-driven2.component';

describe('TemplateDriven2Component', () => {
  let component: TemplateDriven2Component;
  let fixture: ComponentFixture<TemplateDriven2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDriven2Component]
    });
    fixture = TestBed.createComponent(TemplateDriven2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
