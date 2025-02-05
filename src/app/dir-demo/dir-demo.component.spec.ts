import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDemoComponent } from './dir-demo.component';

describe('DirDemoComponent', () => {
  let component: DirDemoComponent;
  let fixture: ComponentFixture<DirDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
