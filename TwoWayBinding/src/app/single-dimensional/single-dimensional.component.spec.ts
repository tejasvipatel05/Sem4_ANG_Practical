import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDimensionalComponent } from './single-dimensional.component';

describe('SingleDimensionalComponent', () => {
  let component: SingleDimensionalComponent;
  let fixture: ComponentFixture<SingleDimensionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDimensionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDimensionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
