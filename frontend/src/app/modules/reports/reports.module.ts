
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from '../../core/guards/auth.guard';
import { RoleGuard } from '../../core/guards/role.guard';
import { PlaceholderComponent } from '../../shared/components/placeholder/placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceholderComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { 
      roles: ['admin', 'cajero'],
      title: 'Reportes',
      message: 'El módulo de reportes estará disponible próximamente. Aquí podrás generar y visualizar reportes de ventas y ganancias.'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportsModule { }