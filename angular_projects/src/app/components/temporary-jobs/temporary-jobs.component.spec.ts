import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryJobsComponent } from './temporary-jobs.component';

describe('TemporaryJobsComponent', () => {
  let component: TemporaryJobsComponent;
  let fixture: ComponentFixture<TemporaryJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporaryJobsComponent]
    });
    fixture = TestBed.createComponent(TemporaryJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
