import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fan/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', loadChildren: () => import('./fan/fan.module').then(m => m.FanModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
