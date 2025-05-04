import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/page/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'iniciar-sesion',
        loadChildren: () => import('./modules/auth/auth.routes').then(module => module.AUTH_ROUTES)
    },
    {
        path: 'home',
        component: HomePageComponent,
        loadChildren: () => import('./modules/home/home.routes').then(module => module.HOME_ROUTES)
    }
];
