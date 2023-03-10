import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbsBackgroundComponent } from './components/orbs-background/orbs-background.component';

@NgModule({
  declarations: [OrbsBackgroundComponent],
  imports: [CommonModule],
  exports: [OrbsBackgroundComponent],
})
export class SharedModule {}
