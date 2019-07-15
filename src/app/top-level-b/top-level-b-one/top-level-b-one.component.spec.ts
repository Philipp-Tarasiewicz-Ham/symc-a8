import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelBOneComponent } from './top-level-b-one.component';

describe('TopLevelBOneComponent', () => {
  let component: TopLevelBOneComponent;
  let fixture: ComponentFixture<TopLevelBOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelBOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelBOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
