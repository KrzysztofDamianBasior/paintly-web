import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTextTypingAnimationComponent } from './complex-text-typing-animation.component';

describe('ComplexTextTypingAnimationComponent', () => {
  let component: ComplexTextTypingAnimationComponent;
  let fixture: ComponentFixture<ComplexTextTypingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexTextTypingAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexTextTypingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
