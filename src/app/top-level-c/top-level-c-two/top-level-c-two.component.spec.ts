import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelCTwoComponent } from './top-level-c-two.component';

describe('TopLevelCTwoComponent', () => {
  let component: TopLevelCTwoComponent;
  let fixture: ComponentFixture<TopLevelCTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelCTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelCTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
