import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelAHomeComponent } from './top-level-a-home.component';

describe('TopLevelAHomeComponent', () => {
  let component: TopLevelAHomeComponent;
  let fixture: ComponentFixture<TopLevelAHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelAHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelAHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
