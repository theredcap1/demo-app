import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserdetailsPage } from './user-details.page';

describe('UserdetailsPage', () => {
  let component: UserdetailsPage;
  let fixture: ComponentFixture<UserdetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
