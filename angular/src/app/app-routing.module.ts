import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardDoctorParComponent } from './board-doctor_par/board-doctor_par.component';
import { BoardDoctorRefComponent } from './board-doctor_ref/board-doctor_ref.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorsListComponent } from './components/doctor-list/doctor-list.component';
import { FichesListComponent } from './components/fiches-list/fiches-list.component';
import { ServicesListComponent } from './components/service-list/service-list.component';
import { StatistiqueComponent } from './statistique/statistique.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'par', component: BoardDoctorParComponent ,
  
  },
  { path: 'ref', component: BoardDoctorRefComponent ,
  
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'fiches',  component: FichesListComponent },
  { path: 'doctors',  component: DoctorsListComponent },
  {path: 'services', component: ServicesListComponent },
  {path: 'organismes', component: TutorialsListComponent },
  {path: 'statistiques', component: StatistiqueComponent }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
