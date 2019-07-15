import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelATwoComponent } from './top-level-a-two.component';

describe('TopLevelATwoComponent', () => {
  let component: TopLevelATwoComponent;
  let fixture: ComponentFixture<TopLevelATwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelATwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelATwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
