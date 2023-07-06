import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDataComponent } from './products-data.component';

describe('ProductsDataComponent', () => {
  let component: ProductsDataComponent;
  let fixture: ComponentFixture<ProductsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDataComponent]
    });
    fixture = TestBed.createComponent(ProductsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
