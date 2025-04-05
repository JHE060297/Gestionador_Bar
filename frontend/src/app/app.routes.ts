import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./pages/login/login.component').then(m => m.LoginComponent)
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
