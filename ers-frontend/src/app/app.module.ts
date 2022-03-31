import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
// import { ViewPendingComponent } from './components/view-pending/view-pending.component';
import { LoginComponent } from './components/login/login.component';
import { ViewRequestsManagerComponent } from './components/manager/view-requests-manager/view-requests-manager.component';
import { ViewPendingManagerComponent } from './components/manager/view-pending-manager/view-pending-manager.component';
import { ViewResolvedManagerComponent } from './components/manager/view-resolved-manager/view-resolved-manager.component';
import { ViewRequestsAssociateComponent } from './components/associate/view-requests-associate/view-requests-associate.component';
import { ViewPendingAssociateComponent } from './components/associate/view-pending-associate/view-pending-associate.component';
import { ViewResolvedAssociateComponent } from './components/associate/view-resolved-associate/view-resolved-associate.component';
import { AddRequestComponent } from './components/associate/add-request/add-request.component';
import { EditRequestManagerComponent } from './components/manager/edit-request-manager/edit-request-manager.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PicUploadComponent } from './components/pic-upload/pic-upload.component';
import { AllPicsComponent } from './components/all-pics/all-pics.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeesComponent,
    ViewRequestsManagerComponent,
    // ViewPendingComponent,
    LoginComponent,
    ViewPendingManagerComponent,
    ViewResolvedManagerComponent,
    ViewRequestsAssociateComponent,
    ViewPendingAssociateComponent,
    ViewResolvedAssociateComponent,
    AddRequestComponent,
    EditRequestManagerComponent,
    LogoutComponent,
    PicUploadComponent,
    AllPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
