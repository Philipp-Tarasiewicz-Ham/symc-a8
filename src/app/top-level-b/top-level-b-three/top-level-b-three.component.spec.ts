import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelBThreeComponent } from './top-level-b-three.component';

describe('TopLevelBThreeComponent', () => {
  let component: TopLevelBThreeComponent;
  let fixture: ComponentFixture<TopLevelBThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelBThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelBThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
