import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardComponent,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }