import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCmpComponent } from './menu-cmp.component';

describe('MenuCmpComponent', () => {
  let component: MenuCmpComponent;
  let fixture: ComponentFixture<MenuCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
