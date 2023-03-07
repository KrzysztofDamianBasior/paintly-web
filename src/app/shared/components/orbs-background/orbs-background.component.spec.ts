import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbsBackgroundComponent } from './orbs-background.component';

describe('OrbsBackgroundComponent', () => {
  let component: OrbsBackgroundComponent;
  let fixture: ComponentFixture<OrbsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrbsBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
