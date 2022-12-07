import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsexhComponent } from './topicsexh.component';

describe('TopicsexhComponent', () => {
  let component: TopicsexhComponent;
  let fixture: ComponentFixture<TopicsexhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsexhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsexhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
