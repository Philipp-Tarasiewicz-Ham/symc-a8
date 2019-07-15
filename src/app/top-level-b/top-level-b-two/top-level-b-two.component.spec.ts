import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelBTwoComponent } from './top-level-b-two.component';

describe('TopLevelBTwoComponent', () => {
  let component: TopLevelBTwoComponent;
  let fixture: ComponentFixture<TopLevelBTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelBTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelBTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
