import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbsBackgroundComponent } from './components/orbs-background/orbs-background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [OrbsBackgroundComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrbsBackgroundComponent, NavbarComponent],
})
export class SharedModule {}
