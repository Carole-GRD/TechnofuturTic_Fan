import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanCreateComponent } from './fan-create/fan-create.component';
import { FanListComponent } from './fan-list/fan-list.component';
import { FanSeriesEditComponent } from './fan-series-edit/fan-series-edit.component';
import { FanSeriesComponent } from './fan-series/fan-series.component';


const routes: Routes = [
  {
    path: '',
    component: FanListComponent,
    children: [
      {
        path: 'create',
        component: FanCreateComponent,
      },
    ],
  },
  {
    path: ':id',
    component: FanSeriesComponent
  },
  {
    path: ':id/edit',
    component: FanSeriesEditComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoutingModule { }
