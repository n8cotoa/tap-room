import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TapMenuComponent } from './tap-menu/tap-menu.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'ontap',
    component: TapMenuComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
