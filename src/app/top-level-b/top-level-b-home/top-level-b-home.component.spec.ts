import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelBHomeComponent } from './top-level-b-home.component';

describe('TopLevelBHomeComponent', () => {
  let component: TopLevelBHomeComponent;
  let fixture: ComponentFixture<TopLevelBHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelBHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelBHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
