import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './components/dashboard/sidenavContent/archive/archive.component';
import { TrashComponent } from './components/dashboard/sidenavContent/trash/trash.component';

const routes: Routes = [
  {
    path : '', component:LoginComponent,
  },
  {
    path : 'signup',component:RegisterComponent,
  },
  {
    path: 'dashboard',component:DashboardComponent,
    children:[
      {
        path:"",component:GetAllNotesComponent,
      },
      {
        path:"archive",component:ArchiveComponent,
        
      },
      {
        path:"trash",component:TrashComponent,
      }
    ]
  },
  {
    path :'resetPassword',component:ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
