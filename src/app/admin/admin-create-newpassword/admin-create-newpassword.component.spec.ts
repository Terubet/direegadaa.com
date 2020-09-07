import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateNewpasswordComponent } from './admin-create-newpassword.component';

describe('AdminCreateNewpasswordComponent', () => {
  let component: AdminCreateNewpasswordComponent;
  let fixture: ComponentFixture<AdminCreateNewpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateNewpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateNewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
