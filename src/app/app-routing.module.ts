import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecordsComponent } from './components/records/records.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { RoutinesComponent } from './components/routines/routines.component';
const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : "home", component : HomeComponent},
  {path : "records", component : RecordsComponent},
  {path : "workouts", component : WorkoutsComponent},
  {path : "routines", component : RoutinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
