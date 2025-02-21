import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApiFormComponent } from './user-api-form.component';

describe('UserApiFormComponent', () => {
  let component: UserApiFormComponent;
  let fixture: ComponentFixture<UserApiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApiFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
