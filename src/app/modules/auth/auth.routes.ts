import { Component } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { AuthPageComponent } from "./page/auth-page/auth-page.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthPageComponent
    }
];