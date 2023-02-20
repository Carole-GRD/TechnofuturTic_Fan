import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanRoutingModule } from './fan-routing.module';
import { HomeComponent } from './home/home.component';
import { FanListComponent } from './fan-list/fan-list.component';
import { FanSeriesComponent } from './fan-series/fan-series.component';
import { RouterModule } from '@angular/router';
import { FanCreateComponent } from './fan-create/fan-create.component';
import { FanSeriesEditComponent } from './fan-series-edit/fan-series-edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    FanListComponent,
    FanSeriesComponent,
    FanCreateComponent,
    FanSeriesEditComponent,

  ],
  imports: [
    CommonModule,
    FanRoutingModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    FanListComponent,
    FanSeriesComponent,
    FanCreateComponent
  ]
})
export class FanModule { }
