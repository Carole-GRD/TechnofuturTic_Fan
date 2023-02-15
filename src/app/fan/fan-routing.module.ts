import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanCreateComponent } from './fan-create/fan-create.component';
import { FanListComponent } from './fan-list/fan-list.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoutingModule { }
