import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [],
  providers: [AuthService, AuthGuard, AlertService],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
