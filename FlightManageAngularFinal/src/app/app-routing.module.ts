import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { UpdateComponent } from './update/update.component';

import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guards/auth-guard';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [{ path: 'scheduleFlight', component: ScheduleFlightComponent },
{ path: 'search', component: SearchComponent },
{ path: 'viewAll', component: ViewAllComponent },
{ path: 'update', component: UpdateComponent },
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
