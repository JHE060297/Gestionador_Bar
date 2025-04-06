import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SucursalListComponent } from './sucursal-list/sucursal-list.component';
import { SucursalFormComponent } from './sucursal-form/sucursal-form.component';
import { MesasListComponent } from '../tables/tables-list/tables-list.component';
import { TableFormComponent } from '../tables/table-form/table-form.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { RoleGuard } from '../../core/guards/role.guard';


const routes: Routes = [
    {
        path: '',
        component: SucursalListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
    },
    {
        path: 'new',
        component: SucursalFormComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
    },
    {
        path: 'edit/:id',
        component: SucursalFormComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
    },
    {
        path: ':id/tables',
        component: MesasListComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'cajero', 'mesero'] }
    },
    {
        path: ':id/tables/new',
        component: TableFormComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
    },
    {
        path: ':id/tables/edit/:tableId',
        component: TableFormComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        SucursalListComponent,
        SucursalFormComponent,
        MesasListComponent,
        TableFormComponent
    ],
    exports: [RouterModule]
})
export class SucursalesModule { }