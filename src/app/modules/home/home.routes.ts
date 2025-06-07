import { Routes } from "@angular/router";
import { HomePageComponent } from "./page/home-page/home-page.component";
import { SuperPageComponent } from "./page/super-page/super-page/super-page.component";
import { RegisterPageComponent } from "./page/register-page/register-page.component";
import { AreasPageComponent } from "./page/areas-page/areas-page/areas-page.component";

export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: SuperPageComponent
    },
    {
        path: 'registrar-usuario',
        component: RegisterPageComponent
    },
    {
        path: 'areas',
        component: AreasPageComponent
    },
    {
        path: 'zona-hidraulica',
        loadChildren: () => import('./page/area-hidraulica/area-hidraulica.routes').then(module => module.HIDRAULICA_ROUTES)
    },
    {
        path: 'monitoreo-de-decibeles',
        loadChildren: () => import('./page/area-decibeles/area-decibeles.routes').then(module => module.DECIBELES_ROUTES)
    },
    {
        path: 'zona-electrica',
        loadChildren: () => import('./page/area-electrica/area-electrica.routes').then(module => module.ELECTRICIAD_ROUTES)
    },
    // {
    //     path: 'calidad-del-aire',
    //     component: AirePageComponent
    // }

]