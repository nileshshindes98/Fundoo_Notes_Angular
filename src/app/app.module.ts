import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {NgIf} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';

import {NgIf, NgFor} from '@angular/common';

import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import {MatMenuModule} from '@angular/material/menu';
import { CardFooterComponent } from './components/card-footer/card-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ResetPasswordComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    CardFooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
     MatFormFieldModule, MatSelectModule, MatButtonModule,
   
    MatToolbarModule,
    
   
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
