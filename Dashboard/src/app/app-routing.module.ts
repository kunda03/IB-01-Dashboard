import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardComponent},
  { path:'log-in',component:LogInComponent},
  { path:'update-profile',component:UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
