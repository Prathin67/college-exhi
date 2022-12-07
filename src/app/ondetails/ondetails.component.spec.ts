import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndetailsComponent } from './ondetails.component';

describe('OndetailsComponent', () => {
  let component: OndetailsComponent;
  let fixture: ComponentFixture<OndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
