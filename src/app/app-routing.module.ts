import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'contacts-modal', loadChildren: './contacts-modal/contacts-modal.module#ContactsModalPageModule' },
  { path: 'activities', loadChildren: './activities/activities.module#ActivitiesPageModule' },
  { path: 'activities-modal', loadChildren: './activities-modal/activities-modal.module#ActivitiesModalPageModule' },
  { path: 'accounts-modal', loadChildren: './accounts-modal/accounts-modal.module#AccountsModalPageModule' },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsPageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'projects-modal', loadChildren: './projects-modal/projects-modal.module#ProjectsModalPageModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'tools-modal', loadChildren: './tools-modal/tools-modal.module#ToolsModalPageModule' },
  { path: 'tools', loadChildren: './tools/tools.module#ToolsPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'geo', loadChildren: './geo/geo.module#GeoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
