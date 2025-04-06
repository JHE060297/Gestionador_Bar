import { Routes } from '@angular/router';

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
                loadChildren: () =>
                    import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
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
                path: 'branches',
                loadChildren: () =>
                    import('./modules/sucursales/sucursales.module').then(m => m.SucursalesModule)
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