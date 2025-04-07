import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./pages/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./modules/dashboard/dashboard.component').then(m => m.DashboardComponent),
                canActivate: [authGuard]
            },
            {
                path: 'branches',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./modules/sucursales/sucursal-list/sucursal-list.component')
                            .then(m => m.SucursalListComponent),
                        canActivate: [authGuard, roleGuard],
                        data: { roles: ['administrador'] }
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./modules/sucursales/sucursal-form/sucursal-form.component')
                            .then(m => m.SucursalFormComponent),
                        canActivate: [authGuard, roleGuard],
                        data: { roles: ['administrador'] }
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () => import('./modules/sucursales/sucursal-form/sucursal-form.component')
                            .then(m => m.SucursalFormComponent),
                        canActivate: [authGuard, roleGuard],
                        data: { roles: ['administrador'] }
                    },
                    {
                        path: ':id/tables',
                        loadComponent: () => import('./modules/tables/tables-list/tables-list.component')
                            .then(m => m.MesasListComponent),
                        canActivate: [authGuard],
                        data: { roles: ['administrador', 'cajero', 'mesero'] }
                    },
                    {
                        path: ':id/tables/new',
                        loadComponent: () => import('./modules/tables/table-form/table-form.component')
                            .then(m => m.TableFormComponent),
                        canActivate: [authGuard, roleGuard],
                        data: { roles: ['administrador'] }
                    },
                    {
                        path: ':id/tables/edit/:tableId',
                        loadComponent: () => import('./modules/tables/table-form/table-form.component')
                            .then(m => m.TableFormComponent),
                        canActivate: [authGuard, roleGuard],
                        data: { roles: ['administrador'] }
                    }
                ]
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('./modules/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'inventory',
                loadChildren: () =>
                    import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
            },
            {
                path: 'orders',
                loadChildren: () =>
                    import('./modules/orders/orders.module').then(m => m.OrdersModule)
            },
            {
                path: 'tables',
                loadChildren: () =>
                    import('./modules/tables/tables.module').then(m => m.TablesModule)
            },
            {
                path: 'payments',
                loadChildren: () =>
                    import('./modules/payments/payments.module').then(m => m.PaymentsModule)
            },
            {
                path: 'reports',
                loadChildren: () =>
                    import('./modules/reports/reports.module').then(m => m.ReportsModule)
            },
            {
                path: 'access-denied',
                loadComponent: () =>
                    import('./pages/access-denied/access-denied.component').then(m => m.AccessDeniedComponent)
            },
            {
                path: 'not-found',
                loadComponent: () =>
                    import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];