import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelCHomeComponent } from './top-level-c-home.component';

describe('TopLevelCHomeComponent', () => {
  let component: TopLevelCHomeComponent;
  let fixture: ComponentFixture<TopLevelCHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelCHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelCHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
