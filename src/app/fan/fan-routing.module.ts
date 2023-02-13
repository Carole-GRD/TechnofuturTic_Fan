import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanSeriesComponent } from './fan-series/fan-series.component';

const routes: Routes = [
  { path: 'fan/:id', component: FanSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoutingModule { }
