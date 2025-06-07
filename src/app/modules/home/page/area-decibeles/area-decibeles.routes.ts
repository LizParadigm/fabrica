import { Routes } from "@angular/router";
import { MenuPageComponentimplements } from "./page/menu-page/menu-page.component";
import { UbicacionesPageComponent } from "./page/ubicaciones-page/ubicaciones-page.component";
import { EntradasPageComponent } from "./page/entradas-page/entradas-page.component";
import { DispositivosPageComponent } from "./page/dispositivos-page/dispositivos-page.component";

export const DECIBELES_ROUTES: Routes = [
    {
        path: '',
        component: MenuPageComponentimplements
    },
    {
        path: 'ubicaciones',
        component: UbicacionesPageComponent
    },
    {
        path: 'entradas',
        component: EntradasPageComponent
    },
    {
        path: 'dispositivos',
        component: DispositivosPageComponent
    }
]