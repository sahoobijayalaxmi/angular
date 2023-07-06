import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormComponent } from './model-driven-form.component';

describe('ModelDrivenFormComponent', () => {
  let component: ModelDrivenFormComponent;
  let fixture: ComponentFixture<ModelDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelDrivenFormComponent]
    });
    fixture = TestBed.createComponent(ModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
