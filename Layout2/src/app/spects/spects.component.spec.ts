import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectsComponent } from './spects.component';

describe('SpectsComponent', () => {
  let component: SpectsComponent;
  let fixture: ComponentFixture<SpectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
