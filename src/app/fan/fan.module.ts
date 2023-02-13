import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanRoutingModule } from './fan-routing.module';
import { HomeComponent } from './home/home.component';
import { FanListComponent } from './fan-list/fan-list.component';
import { FanSeriesComponent } from './fan-series/fan-series.component';


@NgModule({
  declarations: [
    HomeComponent,
    FanListComponent,
    FanSeriesComponent
  ],
  imports: [
    CommonModule,
    FanRoutingModule
  ]
})
export class FanModule { }
