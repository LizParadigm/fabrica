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
    }

]