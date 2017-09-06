import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientDashboardComponent} from './client-dashboard/client-dashboard.component';
import {ClientRegisterComponent} from './client-register/client-register.component';
import {ClientListComponent} from "./client-list/client-list.component";

const routes : Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: ClientDashboardComponent
    }, {
        path: 'clientRegister',
        component: ClientRegisterComponent
    }, {
        path: 'detail/:clientId',
        component: ClientRegisterComponent
    }, {
        path: 'clientList',
        component: ClientListComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {} 