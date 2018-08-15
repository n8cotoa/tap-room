import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TapMenuComponent } from './tap-menu/tap-menu.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'ontap',
    component: TapMenuComponent
  },
  {
    path: 'admin',
    component: AdminPortalComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
