import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelCThreeComponent } from './top-level-c-three.component';

describe('TopLevelCThreeComponent', () => {
  let component: TopLevelCThreeComponent;
  let fixture: ComponentFixture<TopLevelCThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelCThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelCThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
