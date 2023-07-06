import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDataComponent } from './emp-data.component';

describe('EmpDataComponent', () => {
  let component: EmpDataComponent;
  let fixture: ComponentFixture<EmpDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpDataComponent]
    });
    fixture = TestBed.createComponent(EmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
