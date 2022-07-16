import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'new-employee', component: EmployeeCardComponent },
  { path: 'employee/:idemployee', component: EmployeeViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
