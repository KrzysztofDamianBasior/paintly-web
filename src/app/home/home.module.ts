import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { TextTypingAnimationComponent } from './components/text-typing-animation/text-typing-animation.component';
import { ComplexTextTypingAnimationComponent } from './components/complex-text-typing-animation/complex-text-typing-animation.component';

@NgModule({
  declarations: [HomeComponent, LinkButtonComponent, TextTypingAnimationComponent, ComplexTextTypingAnimationComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
