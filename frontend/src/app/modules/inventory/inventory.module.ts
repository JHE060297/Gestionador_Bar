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
      title: 'Gestión de Inventario',
      message: 'El módulo de inventario estará disponible próximamente. Aquí podrás gestionar productos y existencias.'
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
export class InventoryModule { }