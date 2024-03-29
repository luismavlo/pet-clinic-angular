import { EmployeeListComponent } from './../../components/employees/employee-list/employee-list.component';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';
import { inject } from '@angular/core'
import { Router } from '@angular/router';
import { LoadingComponent } from '@shared/loading/loading.component';
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    SectionTitleComponent,
    EmployeeListComponent,
    LoadingComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export default class EmployeesComponent {
  private router = inject( Router );
  public employeeService = inject( EmployeeService )

  goToEmployeeDetail(employeeId: number){
    this.router.navigate([`/dashboard/employee`, employeeId])
  }

  constructor() {
    this.employeeService.getEmployees();
  }

}
