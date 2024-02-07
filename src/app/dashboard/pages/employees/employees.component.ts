import { EmployeeListComponent } from './../../components/employees/employee-list/employee-list.component';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';
import { inject } from '@angular/core'
import { Router } from '@angular/router';
import { LoadingComponent } from '@shared/loading/loading.component';

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

  goToEmployeeDetail(employeeId: number){
    this.router.navigate([`/dashboard/employee`, employeeId])
  }

}
