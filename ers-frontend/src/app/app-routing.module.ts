import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ViewPendingManagerComponent } from './components/manager/view-pending-manager/view-pending-manager.component';
import { ViewResolvedManagerComponent } from './components/manager/view-resolved-manager/view-resolved-manager.component'; 
import { ViewRequestsManagerComponent } from './components/manager/view-requests-manager/view-requests-manager.component';
import { ViewRequestsAssociateComponent } from './components/associate/view-requests-associate/view-requests-associate.component';
import { ViewPendingAssociateComponent } from './components/associate/view-pending-associate/view-pending-associate.component';
import { ViewResolvedAssociateComponent } from './components/associate/view-resolved-associate/view-resolved-associate.component';
import { AddRequestComponent } from './components/associate/add-request/add-request.component';
import { EditRequestManagerComponent } from './components/manager/edit-request-manager/edit-request-manager.component';
import { AuthGuardService } from './services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { PicUploadComponent } from './components/pic-upload/pic-upload.component';
import { AllPicsComponent } from './components/all-pics/all-pics.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'manager/all-employees', component: ViewEmployeesComponent, canActivate: [AuthGuardService] },
  { path: 'manager/requests', component: ViewRequestsManagerComponent, canActivate: [AuthGuardService] },
  { path: 'manager/requests/pending', component: ViewPendingManagerComponent, canActivate: [AuthGuardService] },
  { path: 'manager/requests/resolved', component: ViewResolvedManagerComponent, canActivate: [AuthGuardService] },
  { path: 'manager/requests/edit', component: EditRequestManagerComponent, canActivate: [AuthGuardService] },

  { path: 'associate/requests', component: ViewRequestsAssociateComponent, canActivate: [AuthGuardService] },
  { path: 'associate/requests/pending', component: ViewPendingAssociateComponent, canActivate: [AuthGuardService] },
  { path: 'associate/requests/resolved', component: ViewResolvedAssociateComponent, canActivate: [AuthGuardService] },
  { path: 'associate/requests/add', component: AddRequestComponent, canActivate: [AuthGuardService] },
  
  { path: "logout", component: LogoutComponent },

  { path:"manager/pic-upload", component: PicUploadComponent, canActivate: [AuthGuardService] },
  { path:"manager/all-pics", component: AllPicsComponent, canActivate: [AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
