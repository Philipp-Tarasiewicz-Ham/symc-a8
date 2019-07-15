import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelCOneComponent } from './top-level-c-one.component';

describe('TopLevelCOneComponent', () => {
  let component: TopLevelCOneComponent;
  let fixture: ComponentFixture<TopLevelCOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelCOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelCOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
