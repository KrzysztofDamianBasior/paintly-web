import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
