import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbsBackgroundComponent } from './components/orbs-background/orbs-background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [OrbsBackgroundComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrbsBackgroundComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
