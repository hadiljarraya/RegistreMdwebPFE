import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/http.interceptor';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { BoardDoctorRefComponent } from './board-doctor_ref/board-doctor_ref.component';
import { BoardDoctorParComponent } from './board-doctor_par/board-doctor_par.component';
import { IonicModule } from '@ionic/angular';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorsListComponent } from './components/doctor-list/doctor-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ServicesListComponent } from './components/service-list/service-list.component';
import { FichesListComponent } from './components/fiches-list/fiches-list.component';
import { AddFicheComponent } from './components/add-fiche/add-fiche.component';
import { StatistiqueComponent } from './statistique/statistique.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardDoctorParComponent,
    BoardDoctorRefComponent,
    TutorialDetailsComponent,
    AddTutorialComponent,
    TutorialsListComponent,
    DoctorDetailsComponent,
    AddDoctorComponent,
    DoctorsListComponent,
    ServiceDetailsComponent,
    AddServiceComponent,
    ServicesListComponent,
    FichesListComponent,
    AddFicheComponent,
    StatistiqueComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    IonicModule.forRoot()
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
