import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';

const routes: Routes = [
  { path: 'listado-alumnos', component: AlumnosListComponent },
  { path: '', redirectTo: '/listado-alumnos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }