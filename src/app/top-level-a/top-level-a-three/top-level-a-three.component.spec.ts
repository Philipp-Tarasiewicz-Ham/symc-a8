import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelAThreeComponent } from './top-level-a-three.component';

describe('TopLevelAThreeComponent', () => {
  let component: TopLevelAThreeComponent;
  let fixture: ComponentFixture<TopLevelAThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelAThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelAThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
