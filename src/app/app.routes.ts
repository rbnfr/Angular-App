import { ModuleWithProviders } from '@angular/core';
import { AccessComponent } from './access/access.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [  // Routes string, where Router will check the navigation and its properties.
    { path: 'access', component: AccessComponent},               // Redirect if url path is /access.
    { path: '**', redirectTo: '/access', pathMatch: 'full' }];  // Redirect if url path do not match with any other route.

  export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes); // Export of the routing module.
