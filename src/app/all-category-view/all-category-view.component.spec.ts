import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryViewComponent } from './all-category-view.component';

describe('AllCategoryViewComponent', () => {
  let component: AllCategoryViewComponent;
  let fixture: ComponentFixture<AllCategoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
