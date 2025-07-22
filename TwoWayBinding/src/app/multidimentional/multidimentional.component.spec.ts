import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidimentionalComponent } from './multidimentional.component';

describe('MultidimentionalComponent', () => {
  let component: MultidimentionalComponent;
  let fixture: ComponentFixture<MultidimentionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultidimentionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultidimentionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
