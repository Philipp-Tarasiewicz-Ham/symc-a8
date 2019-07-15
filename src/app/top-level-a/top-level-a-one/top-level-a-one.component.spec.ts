import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelAOneComponent } from './top-level-a-one.component';

describe('TopLevelAOneComponent', () => {
  let component: TopLevelAOneComponent;
  let fixture: ComponentFixture<TopLevelAOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelAOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelAOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
