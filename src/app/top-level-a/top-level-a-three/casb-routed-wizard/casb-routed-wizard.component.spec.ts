import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasbRoutedWizardComponent } from './casb-routed-wizard.component';

describe('CasbRoutedWizardComponent', () => {
  let component: CasbRoutedWizardComponent;
  let fixture: ComponentFixture<CasbRoutedWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasbRoutedWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasbRoutedWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
